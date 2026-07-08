import colors from '@/constants/colors';
import { useTheme } from '@/context/ThemeContext';

type ColorPalette = typeof colors.light;

/**
 * Returns the design tokens for the current color scheme.
 * Reads from ThemeContext so the manual toggle is respected.
 */
export function useColors(): ColorPalette & { radius: number } {
  const { isDark } = useTheme();
  const palette: ColorPalette = isDark ? colors.dark : colors.light;
  return { ...palette, radius: colors.radius };
}
