import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useColors } from '@/hooks/useColors';

interface FeatureSectionProps {
  index: string;
  headline: string;
  body: string;
  align?: 'left' | 'right';
}

export function FeatureSection({
  index,
  headline,
  body,
  align = 'left',
}: FeatureSectionProps) {
  const colors = useColors();
  const isRight = align === 'right';

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isRight ? colors.surfaceElevated : colors.background,
          borderTopWidth: StyleSheet.hairlineWidth,
          borderTopColor: colors.sectionDivider,
        },
      ]}
    >
      {/* Index label */}
      <View
        style={[
          styles.indexRow,
          isRight ? styles.indexRowRight : styles.indexRowLeft,
        ]}
      >
        <View
          style={[styles.indexLine, { backgroundColor: colors.gold }]}
        />
        <Text
          style={[
            styles.indexLabel,
            { color: colors.gold, fontFamily: 'Inter_400Regular' },
          ]}
        >
          {index}
        </Text>
      </View>

      {/* Headline */}
      <Text
        style={[
          styles.headline,
          isRight ? styles.headlineRight : styles.headlineLeft,
          { color: colors.foreground, fontFamily: 'CormorantGaramond_600SemiBold' },
        ]}
      >
        {headline}
      </Text>

      {/* Separator */}
      <View
        style={[
          styles.sep,
          isRight ? styles.sepRight : styles.sepLeft,
          { backgroundColor: colors.sectionDivider },
        ]}
      />

      {/* Body */}
      <Text
        style={[
          styles.body,
          isRight ? styles.bodyRight : styles.bodyLeft,
          { color: colors.mutedForeground, fontFamily: 'Inter_400Regular' },
        ]}
      >
        {body}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 28,
    paddingTop: 52,
    paddingBottom: 60,
  },
  indexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 24,
  },
  indexRowLeft: {
    justifyContent: 'flex-start',
  },
  indexRowRight: {
    justifyContent: 'flex-end',
  },
  indexLine: {
    width: 22,
    height: 1.5,
  },
  indexLabel: {
    fontSize: 11,
    letterSpacing: 2,
  },
  headline: {
    fontSize: 40,
    lineHeight: 46,
    letterSpacing: -0.3,
    marginBottom: 22,
  },
  headlineLeft: {
    textAlign: 'left',
  },
  headlineRight: {
    textAlign: 'right',
  },
  sep: {
    height: StyleSheet.hairlineWidth,
    marginBottom: 22,
  },
  sepLeft: {
    width: '45%',
    alignSelf: 'flex-start',
  },
  sepRight: {
    width: '45%',
    alignSelf: 'flex-end',
  },
  body: {
    fontSize: 15,
    lineHeight: 25,
    maxWidth: 320,
  },
  bodyLeft: {
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  bodyRight: {
    textAlign: 'right',
    alignSelf: 'flex-end',
  },
});
