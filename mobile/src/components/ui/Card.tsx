import React from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from '@/contexts/ThemeContext';
import { Text } from './Text';

interface CardProps extends ViewProps {
  variant?: 'default' | 'gradient';
  gradientColors?: string[];
}

export function Card({
  variant = 'default',
  gradientColors,
  style,
  children,
  ...props
}: CardProps) {
  const { theme } = useTheme();

  if (variant === 'gradient') {
    const colors = gradientColors || [
      'rgba(229, 77, 77, 0.05)',
      'rgba(245, 166, 35, 0.05)',
    ];

    return (
      <LinearGradient
        colors={colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[
          styles.card,
          {
            backgroundColor: theme.colors.card,
            borderColor: theme.colors.border,
          },
          theme.shadows.sm,
          style,
        ]}
        {...props}
      >
        {children}
      </LinearGradient>
    );
  }

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: theme.colors.card,
          borderColor: theme.colors.border,
        },
        theme.shadows.sm,
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
}

interface CardHeaderProps extends ViewProps {}

export function CardHeader({ style, children, ...props }: CardHeaderProps) {
  const { theme } = useTheme();

  return (
    <View style={[styles.header, style]} {...props}>
      {children}
    </View>
  );
}

interface CardTitleProps {
  children: React.ReactNode;
  style?: any;
}

export function CardTitle({ children, style }: CardTitleProps) {
  return (
    <Text variant="h4" style={style}>
      {children}
    </Text>
  );
}

interface CardDescriptionProps {
  children: React.ReactNode;
  style?: any;
}

export function CardDescription({ children, style }: CardDescriptionProps) {
  return (
    <Text variant="bodySmall" muted style={[styles.description, style]}>
      {children}
    </Text>
  );
}

interface CardContentProps extends ViewProps {}

export function CardContent({ style, children, ...props }: CardContentProps) {
  return (
    <View style={[styles.content, style]} {...props}>
      {children}
    </View>
  );
}

interface CardFooterProps extends ViewProps {}

export function CardFooter({ style, children, ...props }: CardFooterProps) {
  return (
    <View style={[styles.footer, style]} {...props}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    borderWidth: 1,
    overflow: 'hidden',
  },
  header: {
    padding: 16,
    gap: 6,
  },
  description: {
    marginTop: 4,
  },
  content: {
    padding: 16,
    paddingTop: 0,
  },
  footer: {
    padding: 16,
    paddingTop: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

