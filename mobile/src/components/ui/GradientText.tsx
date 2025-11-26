import React from 'react';
import { Text, TextProps } from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { TypographyStyle } from '@/theme';

interface GradientTextProps extends TextProps {
  variant?: TypographyStyle;
  colors?: string[];
}

// Note: MaskedView requires installation: npm install @react-native-masked-view/masked-view
// For now, we'll use a simpler approach without MaskedView

export function GradientText({
  variant = 'h1',
  colors,
  style,
  children,
  ...props
}: GradientTextProps) {
  const { theme } = useTheme();
  const gradientColors = colors || theme.colors.gradients.primary;

  // Simple fallback - just use the first gradient color
  // In a full implementation, you'd use MaskedView for true gradient text
  return (
    <Text
      style={[
        theme.typography.styles[variant],
        { color: gradientColors[0] },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
}

// Alternative implementation with MaskedView (requires additional package)
// Uncomment and use after installing @react-native-masked-view/masked-view
/*
export function GradientTextMasked({
  variant = 'h1',
  colors,
  style,
  children,
  ...props
}: GradientTextProps) {
  const { theme } = useTheme();
  const gradientColors = colors || theme.colors.gradients.primary;

  return (
    <MaskedView
      maskElement={
        <Text
          style={[theme.typography.styles[variant], style]}
          {...props}
        >
          {children}
        </Text>
      }
    >
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text
          style={[theme.typography.styles[variant], { opacity: 0 }, style]}
          {...props}
        >
          {children}
        </Text>
      </LinearGradient>
    </MaskedView>
  );
}
*/

