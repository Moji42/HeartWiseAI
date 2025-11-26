import { Platform, TextStyle } from 'react-native';

// Font family based on platform
const fontFamily = Platform.select({
  ios: 'System',
  android: 'Roboto',
  default: 'System',
});

export const typography = {
  // Font families
  fonts: {
    regular: fontFamily,
    medium: fontFamily,
    semiBold: fontFamily,
    bold: fontFamily,
  },

  // Font weights
  weights: {
    regular: '400' as TextStyle['fontWeight'],
    medium: '500' as TextStyle['fontWeight'],
    semiBold: '600' as TextStyle['fontWeight'],
    bold: '700' as TextStyle['fontWeight'],
  },

  // Font sizes with line heights
  sizes: {
    xs: {
      fontSize: 12,
      lineHeight: 16,
    },
    sm: {
      fontSize: 14,
      lineHeight: 20,
    },
    base: {
      fontSize: 16,
      lineHeight: 24,
    },
    lg: {
      fontSize: 18,
      lineHeight: 28,
    },
    xl: {
      fontSize: 20,
      lineHeight: 28,
    },
    '2xl': {
      fontSize: 24,
      lineHeight: 32,
    },
    '3xl': {
      fontSize: 30,
      lineHeight: 36,
    },
    '4xl': {
      fontSize: 36,
      lineHeight: 40,
    },
    '5xl': {
      fontSize: 48,
      lineHeight: 48,
    },
  },

  // Pre-defined text styles
  styles: {
    // Headings
    h1: {
      fontSize: 36,
      lineHeight: 44,
      fontWeight: '700' as TextStyle['fontWeight'],
      letterSpacing: -0.5,
    },
    h2: {
      fontSize: 30,
      lineHeight: 36,
      fontWeight: '700' as TextStyle['fontWeight'],
      letterSpacing: -0.25,
    },
    h3: {
      fontSize: 24,
      lineHeight: 32,
      fontWeight: '600' as TextStyle['fontWeight'],
    },
    h4: {
      fontSize: 20,
      lineHeight: 28,
      fontWeight: '600' as TextStyle['fontWeight'],
    },

    // Body text
    bodyLarge: {
      fontSize: 18,
      lineHeight: 28,
      fontWeight: '400' as TextStyle['fontWeight'],
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '400' as TextStyle['fontWeight'],
    },
    bodySmall: {
      fontSize: 14,
      lineHeight: 20,
      fontWeight: '400' as TextStyle['fontWeight'],
    },

    // Labels and captions
    label: {
      fontSize: 14,
      lineHeight: 20,
      fontWeight: '500' as TextStyle['fontWeight'],
    },
    caption: {
      fontSize: 12,
      lineHeight: 16,
      fontWeight: '400' as TextStyle['fontWeight'],
    },

    // Buttons
    buttonLarge: {
      fontSize: 18,
      lineHeight: 24,
      fontWeight: '600' as TextStyle['fontWeight'],
    },
    button: {
      fontSize: 16,
      lineHeight: 20,
      fontWeight: '600' as TextStyle['fontWeight'],
    },
    buttonSmall: {
      fontSize: 14,
      lineHeight: 18,
      fontWeight: '500' as TextStyle['fontWeight'],
    },
  },
};

export type TypographyStyle = keyof typeof typography.styles;

