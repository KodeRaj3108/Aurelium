import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
  Platform,
} from 'react-native';
import Animated, { FadeIn, FadeInUp } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useColors } from '@/hooks/useColors';
import { useTheme } from '@/context/ThemeContext';
import { AnimatedOrb } from '@/components/AnimatedOrb';

export function HeroSection() {
  const colors = useColors();
  const { isDark } = useTheme();
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const topPadding = Platform.OS === 'web' ? 67 : insets.top;

  const orbSize = Math.min(screenWidth * 0.74, 290);

  return (
    <View
      style={[
        styles.container,
        {
          minHeight: screenHeight,
          backgroundColor: colors.background,
          paddingTop: topPadding + 52,
          paddingBottom: 48,
        },
      ]}
    >
      {/* Background gradient vignette */}
      <LinearGradient
        colors={
          isDark
            ? ['transparent', 'transparent', 'rgba(9,9,11,0.6)']
            : ['transparent', 'transparent', 'rgba(247,246,243,0.5)']
        }
        style={[StyleSheet.absoluteFill, { pointerEvents: 'none' }]}
      />

      {/* Brand label */}
      <Animated.View entering={FadeIn.delay(200).duration(1000)}>
        <Text
          style={[
            styles.brandLabel,
            { color: colors.mutedForeground, fontFamily: 'Inter_500Medium' },
          ]}
        >
          A U R E L I U M
        </Text>
      </Animated.View>

      {/* Orb */}
      <Animated.View
        entering={FadeIn.delay(400).duration(1200)}
        style={styles.orbWrapper}
      >
        <AnimatedOrb size={orbSize} idPrefix="hero" animate />
      </Animated.View>

      {/* Tagline */}
      <Animated.View
        entering={FadeInUp.delay(700).duration(900)}
        style={styles.taglineWrapper}
      >
        <Text
          style={[
            styles.tagline,
            { color: colors.foreground, fontFamily: 'CormorantGaramond_700Bold' },
          ]}
        >
          Sculpt motion{'\n'}into meaning.
        </Text>
      </Animated.View>

      {/* Body */}
      <Animated.View entering={FadeInUp.delay(900).duration(800)}>
        <Text
          style={[
            styles.body,
            { color: colors.mutedForeground, fontFamily: 'Inter_400Regular' },
          ]}
        >
          A luxury-forward digital studio where glossy 3D form,
          cinematic transitions, and refined storytelling define
          the entire product presence.
        </Text>
      </Animated.View>

      {/* CTAs */}
      <Animated.View
        entering={FadeInUp.delay(1100).duration(800)}
        style={styles.ctaRow}
      >
        <TouchableOpacity
          style={[
            styles.primaryBtn,
            {
              backgroundColor: colors.primary,
              borderRadius: colors.radius,
            },
          ]}
          activeOpacity={0.82}
        >
          <Text
            style={[
              styles.primaryBtnText,
              {
                color: colors.primaryForeground,
                fontFamily: 'Inter_600SemiBold',
              },
            ]}
          >
            Explore the work
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.secondaryBtn,
            {
              borderColor: colors.border,
              borderRadius: colors.radius,
            },
          ]}
          activeOpacity={0.75}
        >
          <Text
            style={[
              styles.secondaryBtnText,
              {
                color: colors.foreground,
                fontFamily: 'Inter_500Medium',
              },
            ]}
          >
            Commission
          </Text>
        </TouchableOpacity>
      </Animated.View>

      {/* Scroll hint */}
      <Animated.View
        entering={FadeIn.delay(1400).duration(1000)}
        style={styles.scrollHintWrapper}
      >
        <View
          style={[styles.scrollLine, { backgroundColor: colors.sectionDivider }]}
        />
        <Text
          style={[
            styles.scrollHint,
            { color: colors.mutedForeground, fontFamily: 'Inter_400Regular' },
          ]}
        >
          scroll
        </Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 28,
  },
  brandLabel: {
    fontSize: 10,
    letterSpacing: 6,
    marginBottom: 0,
  },
  orbWrapper: {
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  taglineWrapper: {
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  tagline: {
    fontSize: 46,
    lineHeight: 52,
    letterSpacing: -0.5,
  },
  body: {
    fontSize: 15,
    lineHeight: 24,
    alignSelf: 'flex-start',
    marginBottom: 32,
    maxWidth: 340,
  },
  ctaRow: {
    flexDirection: 'row',
    gap: 12,
    alignSelf: 'flex-start',
    marginBottom: 40,
  },
  primaryBtn: {
    paddingHorizontal: 22,
    paddingVertical: 13,
  },
  primaryBtnText: {
    fontSize: 14,
    letterSpacing: 0.2,
  },
  secondaryBtn: {
    paddingHorizontal: 22,
    paddingVertical: 13,
    borderWidth: 1,
  },
  secondaryBtnText: {
    fontSize: 14,
    letterSpacing: 0.2,
  },
  scrollHintWrapper: {
    alignItems: 'center',
    gap: 8,
  },
  scrollLine: {
    width: 1,
    height: 28,
  },
  scrollHint: {
    fontSize: 10,
    letterSpacing: 3,
  },
});
