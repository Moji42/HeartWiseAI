// HeartWiseAI Color System
// Based on the web app's red-to-orange gradient theme

export const colors = {
  // Primary gradient colors
  primary: {
    red: '#E54D4D', // hsl(0, 85%, 60%)
    orange: '#F5A623', // hsl(30, 95%, 60%)
    main: '#E8652B', // hsl(14, 90%, 55%) - midpoint
  },

  // Gradient definitions (for LinearGradient)
  gradients: {
    primary: ['#E54D4D', '#F5A623'], // Red to Orange
    primaryDark: ['#CC3D3D', '#E09520'], // Darker variant
    subtle: ['#FFFFFF', '#FDF8F5'], // Subtle warm white
    subtleDark: ['#121212', '#1A1A1A'],
  },

  // Light theme
  light: {
    background: '#FFFFFF',
    foreground: '#1A1A1A',
    card: '#FFFFFF',
    cardForeground: '#1A1A1A',
    muted: '#F7F3F0',
    mutedForeground: '#737373',
    border: '#E8E2DD',
    input: '#E8E2DD',
    ring: '#E8652B',
    destructive: '#E54D4D',
    destructiveForeground: '#FFFFFF',
  },

  // Dark theme
  dark: {
    background: '#121212',
    foreground: '#FAFAFA',
    card: '#1A1A1A',
    cardForeground: '#FAFAFA',
    muted: '#262626',
    mutedForeground: '#A6A6A6',
    border: '#333333',
    input: '#333333',
    ring: '#E8652B',
    destructive: '#E54D4D',
    destructiveForeground: '#FFFFFF',
  },

  // Semantic colors
  success: '#22C55E',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',

  // Mood colors (for mood tracker)
  mood: {
    great: '#22C55E', // Green
    good: '#3B82F6', // Blue
    okay: '#F59E0B', // Yellow
    low: '#F97316', // Orange
    struggling: '#EF4444', // Red
  },

  // Common
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
};

export type ColorTheme = typeof colors.light;

