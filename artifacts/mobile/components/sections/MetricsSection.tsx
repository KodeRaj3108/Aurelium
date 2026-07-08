import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useColors } from '@/hooks/useColors';

const METRICS = [
  { value: '48', label: 'Commissions' },
  { value: '99.8', label: 'Satisfaction' },
  { value: '12', label: 'Markets' },
  { value: '7', label: 'Citations' },
];

function MetricItem({
  value,
  label,
  showRight,
}: {
  value: string;
  label: string;
  showRight: boolean;
}) {
  const colors = useColors();
  return (
    <View
      style={[
        styles.metric,
        showRight && {
          borderRightWidth: StyleSheet.hairlineWidth,
          borderRightColor: colors.sectionDivider,
        },
      ]}
    >
      <Text
        style={[
          styles.metricValue,
          { color: colors.foreground, fontFamily: 'CormorantGaramond_700Bold' },
        ]}
      >
        {value}
      </Text>
      <Text
        style={[
          styles.metricLabel,
          { color: colors.mutedForeground, fontFamily: 'Inter_400Regular' },
        ]}
      >
        {label}
      </Text>
    </View>
  );
}

export function MetricsSection() {
  const colors = useColors();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.background,
          borderTopWidth: StyleSheet.hairlineWidth,
          borderTopColor: colors.sectionDivider,
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderBottomColor: colors.sectionDivider,
        },
      ]}
    >
      {/* Label */}
      <Text
        style={[
          styles.label,
          { color: colors.mutedForeground, fontFamily: 'Inter_400Regular' },
        ]}
      >
        BY THE NUMBERS
      </Text>

      {/* Grid */}
      <View style={styles.grid}>
        <View
          style={[
            styles.row,
            {
              borderBottomWidth: StyleSheet.hairlineWidth,
              borderBottomColor: colors.sectionDivider,
            },
          ]}
        >
          <MetricItem value={METRICS[0].value} label={METRICS[0].label} showRight />
          <MetricItem value={METRICS[1].value} label={METRICS[1].label} showRight={false} />
        </View>
        <View style={styles.row}>
          <MetricItem value={METRICS[2].value} label={METRICS[2].label} showRight />
          <MetricItem value={METRICS[3].value} label={METRICS[3].label} showRight={false} />
        </View>
      </View>

      {/* Footnote */}
      <Text
        style={[
          styles.footnote,
          { color: colors.mutedForeground, fontFamily: 'Inter_400Regular' },
        ]}
      >
        Data as of 2026 — active and completed engagements.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 28,
    paddingTop: 44,
    paddingBottom: 44,
  },
  label: {
    fontSize: 10,
    letterSpacing: 4,
    marginBottom: 28,
  },
  grid: {
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
  },
  metric: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 16,
    alignItems: 'flex-start',
  },
  metricValue: {
    fontSize: 48,
    lineHeight: 54,
    letterSpacing: -1,
  },
  metricLabel: {
    fontSize: 12,
    letterSpacing: 1,
    marginTop: 4,
  },
  footnote: {
    fontSize: 11,
    lineHeight: 18,
    letterSpacing: 0.1,
  },
});
