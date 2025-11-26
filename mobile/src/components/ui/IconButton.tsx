import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from '@/contexts/ThemeContext';

interface IconButtonProps {
  icon: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'gradient';
}

export function IconButton({ icon, size = 'md', variant = 'gradient' }: IconButtonProps) {
  const { theme } = useTheme();

  const sizeStyles: Record<string, ViewStyle> = {
    sm: { width: 32, height: 32, borderRadius: 8 },
    md: { width: 48, height: 48, borderRadius: 12 },
    lg: { width: 64, height: 64, borderRadius: 16 },
  };

  if (variant === 'gradient') {
    return (
      <LinearGradient
        colors={theme.colors.gradients.primary}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[styles.container, sizeStyles[size]]}
      >
        {icon}
      </LinearGradient>
    );
  }

  return (
    <View
      style={[
        styles.container,
        sizeStyles[size],
        { backgroundColor: theme.colors.muted },
      ]}
    >
      {icon}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

