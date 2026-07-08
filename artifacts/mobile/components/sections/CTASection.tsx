import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useColors } from '@/hooks/useColors';
import { useTheme } from '@/context/ThemeContext';
import { AnimatedOrb } from '@/components/AnimatedOrb';

export function CTASection() {
  const colors = useColors();
  const { isDark } = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.surfaceElevated,
          borderTopWidth: StyleSheet.hairlineWidth,
          borderTopColor: colors.sectionDivider,
        },
      ]}
    >
      {/* Subtle gradient wash */}
      <LinearGradient
        colors={
          isDark
            ? ['rgba(200,164,110,0.06)', 'transparent']
            : ['rgba(139,106,56,0.05)', 'transparent']
        }
        style={[StyleSheet.absoluteFill, { pointerEvents: 'none' }]}
      />

      {/* Small centered orb */}
      <View style={styles.orbWrapper}>
        <AnimatedOrb size={96} idPrefix="cta" animate />
      </View>

      {/* Headline */}
      <Text
        style={[
          styles.headline,
          { color: colors.foreground, fontFamily: 'CormorantGaramond_700Bold' },
        ]}
      >
        Ready to begin.
      </Text>

      {/* Sub */}
      <Text
        style={[
          styles.sub,
          { color: colors.mutedForeground, fontFamily: 'CormorantGaramond_400Regular' },
        ]}
      >
        The first conversation shapes everything.{'\n'}
        Invite Aurelium into your project.
      </Text>

      {/* CTA Button */}
      <TouchableOpacity
        style={[
          styles.ctaBtn,
          {
            backgroundColor: colors.primary,
            borderRadius: colors.radius,
          },
        ]}
        activeOpacity={0.82}
      >
        <Text
          style={[
            styles.ctaBtnText,
            { color: colors.primaryForeground, fontFamily: 'Inter_600SemiBold' },
          ]}
        >
          Commission a work
        </Text>
      </TouchableOpacity>

      {/* Divider */}
      <View style={[styles.divider, { backgroundColor: colors.sectionDivider }]} />

      {/* Footer */}
      <View style={styles.footer}>
        <Text
          style={[
            styles.footerBrand,
            { color: colors.foreground, fontFamily: 'Inter_600SemiBold' },
          ]}
        >
          AURELIUM
        </Text>
        <View style={styles.footerLinks}>
          {['Work', 'Process', 'Contact'].map((link) => (
            <TouchableOpacity key={link} activeOpacity={0.65}>
              <Text
                style={[
                  styles.footerLink,
                  { color: colors.mutedForeground, fontFamily: 'Inter_400Regular' },
                ]}
              >
                {link}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text
          style={[
            styles.copyright,
            { color: colors.mutedForeground, fontFamily: 'Inter_400Regular' },
          ]}
        >
          © 2026 Aurelium. All rights reserved.
        </Text>
      </View>

      {/* Bottom safe area padding */}
      <View style={{ height: Platform.OS === 'web' ? 34 : 20 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 28,
    paddingTop: 60,
  },
  orbWrapper: {
    marginBottom: 28,
  },
  headline: {
    fontSize: 48,
    letterSpacing: -0.5,
    textAlign: 'center',
    marginBottom: 16,
  },
  sub: {
    fontSize: 18,
    lineHeight: 26,
    textAlign: 'center',
    marginBottom: 36,
  },
  ctaBtn: {
    paddingHorizontal: 36,
    paddingVertical: 16,
    marginBottom: 52,
  },
  ctaBtnText: {
    fontSize: 14,
    letterSpacing: 0.5,
  },
  divider: {
    width: '100%',
    height: StyleSheet.hairlineWidth,
    marginBottom: 32,
  },
  footer: {
    width: '100%',
    alignItems: 'flex-start',
    gap: 16,
  },
  footerBrand: {
    fontSize: 10,
    letterSpacing: 5,
  },
  footerLinks: {
    flexDirection: 'row',
    gap: 24,
  },
  footerLink: {
    fontSize: 13,
    letterSpacing: 0.2,
  },
  copyright: {
    fontSize: 11,
    letterSpacing: 0.1,
  },
});
