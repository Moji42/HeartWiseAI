import React from 'react';
import { Text as RNText, TextProps as RNTextProps, StyleSheet } from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { TypographyStyle } from '@/theme';

interface TextProps extends RNTextProps {
  variant?: TypographyStyle;
  color?: string;
  center?: boolean;
  muted?: boolean;
}

export function Text({
  variant = 'body',
  color,
  center,
  muted,
  style,
  children,
  ...props
}: TextProps) {
  const { theme } = useTheme();

  const textColor = color
    ? color
    : muted
    ? theme.colors.mutedForeground
    : theme.colors.foreground;

  return (
    <RNText
      style={[
        theme.typography.styles[variant],
        { color: textColor },
        center && styles.center,
        style,
      ]}
      {...props}
    >
      {children}
    </RNText>
  );
}

const styles = StyleSheet.create({
  center: {
    textAlign: 'center',
  },
});

