import React, { useEffect } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import Svg, {
  Circle,
  Ellipse,
  Defs,
  RadialGradient,
  LinearGradient,
  Stop,
} from 'react-native-svg';
import { useColors } from '@/hooks/useColors';

interface AnimatedOrbProps {
  size?: number;
  idPrefix?: string;
  animate?: boolean;
}

export function AnimatedOrb({
  size = 220,
  idPrefix = 'orb',
  animate = true,
}: AnimatedOrbProps) {
  const colors = useColors();
  const r = size / 2;
  const sphereR = r * 0.86;
  const cx = r;
  const cy = r;

  const breathe = useSharedValue(1);
  const drift = useSharedValue(0);

  useEffect(() => {
    if (!animate) return;
    breathe.value = withRepeat(
      withTiming(1.038, { duration: 3400, easing: Easing.inOut(Easing.sin) }),
      -1,
      true,
    );
    drift.value = withRepeat(
      withTiming(0.012, { duration: 4800, easing: Easing.inOut(Easing.sin) }),
      -1,
      true,
    );
  }, [animate]);

  const orbStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: breathe.value },
      { translateX: drift.value * size },
    ],
  }));

  const g = (name: string) => `${idPrefix}-${name}`;
  const gold = colors.gold;

  return (
    <Animated.View style={[{ width: size, height: size }, orbStyle]}>
      <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <Defs>
          {/* Ambient outer glow */}
          <RadialGradient id={g('glow')} cx="50%" cy="50%" r="50%">
            <Stop offset="48%" stopColor={gold} stopOpacity="0" />
            <Stop offset="100%" stopColor={gold} stopOpacity="0.28" />
          </RadialGradient>

          {/* Main sphere — light source top-left */}
          <RadialGradient id={g('sphere')} cx="33%" cy="26%" r="74%">
            <Stop offset="0%" stopColor="#F9F9F9" stopOpacity="1" />
            <Stop offset="10%" stopColor="#D6D6D6" stopOpacity="1" />
            <Stop offset="32%" stopColor="#8C8C8C" stopOpacity="1" />
            <Stop offset="62%" stopColor="#2D2D34" stopOpacity="1" />
            <Stop offset="100%" stopColor="#07070E" stopOpacity="1" />
          </RadialGradient>

          {/* Specular highlight */}
          <RadialGradient id={g('spec')} cx="50%" cy="50%" r="50%">
            <Stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
            <Stop offset="60%" stopColor="#FFFFFF" stopOpacity="0.35" />
            <Stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </RadialGradient>

          {/* Gold rim light */}
          <LinearGradient id={g('rim')} x1="88%" y1="6%" x2="12%" y2="94%">
            <Stop offset="0%" stopColor={gold} stopOpacity="0" />
            <Stop offset="38%" stopColor={gold} stopOpacity="0.78" />
            <Stop offset="62%" stopColor={gold} stopOpacity="0.55" />
            <Stop offset="100%" stopColor={gold} stopOpacity="0" />
          </LinearGradient>

          {/* Secondary soft reflection on lower-right */}
          <RadialGradient id={g('refl')} cx="50%" cy="50%" r="50%">
            <Stop offset="0%" stopColor="#9AB0C0" stopOpacity="0.3" />
            <Stop offset="100%" stopColor="#9AB0C0" stopOpacity="0" />
          </RadialGradient>
        </Defs>

        {/* Outer ambient glow disc */}
        <Circle cx={cx} cy={cy} r={r * 1.38} fill={`url(#${g('glow')})`} />

        {/* Main sphere */}
        <Circle cx={cx} cy={cy} r={sphereR} fill={`url(#${g('sphere')})`} />

        {/* Gold rim arc */}
        <Circle
          cx={cx}
          cy={cy}
          r={sphereR * 0.935}
          fill="none"
          stroke={`url(#${g('rim')})`}
          strokeWidth={sphereR * 0.052}
          opacity="0.88"
        />

        {/* Subtle secondary fill reflection */}
        <Ellipse
          cx={cx + sphereR * 0.22}
          cy={cy + sphereR * 0.28}
          rx={sphereR * 0.36}
          ry={sphereR * 0.22}
          fill={`url(#${g('refl')})`}
        />

        {/* Primary specular highlight */}
        <Ellipse
          cx={cx - sphereR * 0.26}
          cy={cy - sphereR * 0.30}
          rx={sphereR * 0.27}
          ry={sphereR * 0.17}
          fill={`url(#${g('spec')})`}
          opacity="0.88"
        />

        {/* Micro-specular pinpoint */}
        <Ellipse
          cx={cx - sphereR * 0.24}
          cy={cy - sphereR * 0.33}
          rx={sphereR * 0.085}
          ry={sphereR * 0.055}
          fill="#FFFFFF"
          opacity="0.97"
        />

        {/* Inner depth shadow ring */}
        <Circle
          cx={cx}
          cy={cy}
          r={sphereR * 0.58}
          fill="none"
          stroke="#000000"
          strokeWidth="1.2"
          opacity="0.1"
        />
      </Svg>
    </Animated.View>
  );
}
