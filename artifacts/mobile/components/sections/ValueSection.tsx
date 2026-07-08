import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { useColors } from '@/hooks/useColors';
import { AnimatedOrb } from '@/components/AnimatedOrb';

export function ValueSection() {
  const colors = useColors();
  const { width: screenWidth } = useWindowDimensions();
  const orbSize = Math.min(screenWidth * 0.38, 148);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.background,
          borderTopWidth: StyleSheet.hairlineWidth,
          borderTopColor: colors.sectionDivider,
        },
      ]}
    >
      {/* Section label */}
      <Text
        style={[
          styles.label,
          { color: colors.mutedForeground, fontFamily: 'Inter_400Regular' },
        ]}
      >
        POSITIONING
      </Text>

      {/* Two-column layout */}
      <View style={styles.columns}>
        {/* Left: text */}
        <View style={styles.textCol}>
          <Text
            style={[
              styles.heading,
              { color: colors.foreground, fontFamily: 'CormorantGaramond_700Bold' },
            ]}
          >
            Precision{'\n'}in every{'\n'}frame.
          </Text>
          <View
            style={[styles.divider, { backgroundColor: colors.gold }]}
          />
          <Text
            style={[
              styles.body,
              { color: colors.mutedForeground, fontFamily: 'Inter_400Regular' },
            ]}
          >
            Each transition, each material choice, each moment of stillness is
            intentional. Nothing incidental. Nothing improvised.
          </Text>
        </View>

        {/* Right: small orb */}
        <View style={styles.orbCol}>
          <AnimatedOrb size={orbSize} idPrefix="value" animate />
          <Text
            style={[
              styles.orbCaption,
              { color: colors.mutedForeground, fontFamily: 'CormorantGaramond_400Regular' },
            ]}
          >
            Material depth
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 28,
    paddingTop: 52,
    paddingBottom: 56,
  },
  label: {
    fontSize: 10,
    letterSpacing: 4,
    marginBottom: 32,
  },
  columns: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 20,
  },
  textCol: {
    flex: 1,
  },
  heading: {
    fontSize: 38,
    lineHeight: 44,
    letterSpacing: -0.3,
    marginBottom: 20,
  },
  divider: {
    width: 28,
    height: 1.5,
    marginBottom: 16,
  },
  body: {
    fontSize: 14,
    lineHeight: 22,
  },
  orbCol: {
    alignItems: 'center',
    paddingTop: 8,
    gap: 10,
  },
  orbCaption: {
    fontSize: 12,
    fontStyle: 'italic',
    letterSpacing: 0.3,
  },
});
