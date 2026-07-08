import React from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedScrollHandler } from 'react-native-reanimated';
import { useColors } from '@/hooks/useColors';
import { StickyHeader } from '@/components/StickyHeader';
import { HeroSection } from '@/components/sections/HeroSection';
import { ValueSection } from '@/components/sections/ValueSection';
import { FeatureSection } from '@/components/sections/FeatureSection';
import { MetricsSection } from '@/components/sections/MetricsSection';
import { CTASection } from '@/components/sections/CTASection';

export default function LandingScreen() {
  const colors = useColors();
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      'worklet';
      scrollY.value = event.contentOffset.y;
    },
  });

  return (
    <View style={[styles.root, { backgroundColor: colors.background }]}>
      {/* Floating header — sits above the scroll content */}
      <StickyHeader scrollY={scrollY} />

      {/* Scrollable narrative */}
      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <HeroSection />
        <ValueSection />
        <FeatureSection
          index="01"
          headline="Form as language."
          body="Every material decision carries semantic weight. We build visual systems where texture, weight, and motion become syntax — nothing decorative, everything structural."
          align="left"
        />
        <FeatureSection
          index="02"
          headline="The material speaks."
          body="Surface depth, refracted light, and spatial tension are not aesthetic choices — they are communication tools. We master them so your product says exactly what it means."
          align="right"
        />
        <MetricsSection />
        <CTASection />
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
});
