import { colors, ColorTheme } from './colors';
import { typography, TypographyStyle } from './typography';
import { spacing, borderRadius, shadows, SpacingValue, BorderRadiusValue, ShadowValue } from './spacing';

export interface Theme {
  colors: ColorTheme & {
    primary: typeof colors.primary;
    gradients: typeof colors.gradients;
    mood: typeof colors.mood;
    success: string;
    warning: string;
    error: string;
    info: string;
    white: string;
    black: string;
    transparent: string;
  };
  typography: typeof typography;
  spacing: typeof spacing;
  borderRadius: typeof borderRadius;
  shadows: typeof shadows;
  isDark: boolean;
}

export const lightTheme: Theme = {
  colors: {
    ...colors.light,
    primary: colors.primary,
    gradients: colors.gradients,
    mood: colors.mood,
    success: colors.success,
    warning: colors.warning,
    error: colors.error,
    info: colors.info,
    white: colors.white,
    black: colors.black,
    transparent: colors.transparent,
  },
  typography,
  spacing,
  borderRadius,
  shadows,
  isDark: false,
};

export const darkTheme: Theme = {
  colors: {
    ...colors.dark,
    primary: colors.primary,
    gradients: {
      ...colors.gradients,
      subtle: colors.gradients.subtleDark,
    },
    mood: colors.mood,
    success: colors.success,
    warning: colors.warning,
    error: colors.error,
    info: colors.info,
    white: colors.white,
    black: colors.black,
    transparent: colors.transparent,
  },
  typography,
  spacing,
  borderRadius,
  shadows,
  isDark: true,
};

export { colors, typography, spacing, borderRadius, shadows };
export type { ColorTheme, TypographyStyle, SpacingValue, BorderRadiusValue, ShadowValue };

