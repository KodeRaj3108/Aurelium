import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated';
import { BlurView } from 'expo-blur';
import { Feather } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useColors } from '@/hooks/useColors';
import { useTheme } from '@/context/ThemeContext';

interface StickyHeaderProps {
  scrollY: SharedValue<number>;
}

export function StickyHeader({ scrollY }: StickyHeaderProps) {
  const colors = useColors();
  const { isDark, toggleTheme } = useTheme();
  const insets = useSafeAreaInsets();

  const bgStyle = useAnimatedStyle(() => ({
    opacity: interpolate(scrollY.value, [0, 90], [0, 1], Extrapolation.CLAMP),
  }));

  const topPadding = Platform.OS === 'web' ? 67 : insets.top;

  return (
    <View
      style={[
        styles.wrapper,
        { paddingTop: topPadding },
      ]}
    >
      {/* Animated blurred background */}
      <Animated.View style={[StyleSheet.absoluteFill, bgStyle]}>
        {Platform.OS === 'ios' ? (
          <BlurView
            intensity={80}
            tint={isDark ? 'dark' : 'light'}
            style={StyleSheet.absoluteFill}
          />
        ) : (
          <View
            style={[StyleSheet.absoluteFill, { backgroundColor: colors.headerBg }]}
          />
        )}
      </Animated.View>

      {/* Header content */}
      <View style={styles.content}>
        <Text
          style={[styles.logo, { color: colors.foreground, fontFamily: 'Inter_600SemiBold' }]}
        >
          A U R E L I U M
        </Text>

        <View style={styles.actions}>
          <TouchableOpacity
            onPress={toggleTheme}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            accessibilityLabel={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            accessibilityRole="button"
          >
            <Feather
              name={isDark ? 'sun' : 'moon'}
              size={17}
              color={colors.mutedForeground}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 14,
  },
  logo: {
    fontSize: 11,
    letterSpacing: 5,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
});
