import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  ActivityIndicator,
  View,
  ViewStyle,
  TextStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from '@/contexts/ThemeContext';
import { Text } from './Text';

type ButtonVariant = 'default' | 'gradient' | 'hero' | 'outline' | 'ghost' | 'destructive';
type ButtonSize = 'sm' | 'default' | 'lg' | 'xl' | 'icon';

interface ButtonProps extends TouchableOpacityProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export function Button({
  variant = 'default',
  size = 'default',
  loading = false,
  children,
  leftIcon,
  rightIcon,
  disabled,
  style,
  ...props
}: ButtonProps) {
  const { theme } = useTheme();

  const isGradient = variant === 'gradient' || variant === 'hero';
  const isDisabled = disabled || loading;

  const getSizeStyles = (): { container: ViewStyle; text: TextStyle } => {
    switch (size) {
      case 'sm':
        return {
          container: { height: 36, paddingHorizontal: theme.spacing[3] },
          text: theme.typography.styles.buttonSmall,
        };
      case 'lg':
        return {
          container: { height: 48, paddingHorizontal: theme.spacing[8] },
          text: theme.typography.styles.button,
        };
      case 'xl':
        return {
          container: { height: 56, paddingHorizontal: theme.spacing[10], borderRadius: theme.borderRadius.lg },
          text: theme.typography.styles.buttonLarge,
        };
      case 'icon':
        return {
          container: { height: 40, width: 40, paddingHorizontal: 0 },
          text: theme.typography.styles.button,
        };
      default:
        return {
          container: { height: 44, paddingHorizontal: theme.spacing[4] },
          text: theme.typography.styles.button,
        };
    }
  };

  const getVariantStyles = (): { container: ViewStyle; text: TextStyle } => {
    switch (variant) {
      case 'outline':
        return {
          container: {
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: theme.colors.border,
          },
          text: { color: theme.colors.foreground },
        };
      case 'ghost':
        return {
          container: { backgroundColor: 'transparent' },
          text: { color: theme.colors.foreground },
        };
      case 'destructive':
        return {
          container: { backgroundColor: theme.colors.destructive },
          text: { color: theme.colors.destructiveForeground },
        };
      case 'gradient':
      case 'hero':
        return {
          container: {},
          text: { color: theme.colors.white },
        };
      default:
        return {
          container: { backgroundColor: theme.colors.primary.main },
          text: { color: theme.colors.white },
        };
    }
  };

  const sizeStyles = getSizeStyles();
  const variantStyles = getVariantStyles();

  const containerStyle: ViewStyle = {
    ...styles.base,
    ...sizeStyles.container,
    ...variantStyles.container,
    ...(isDisabled && styles.disabled),
  };

  const textStyle: TextStyle = {
    ...sizeStyles.text,
    ...variantStyles.text,
  };

  const content = (
    <View style={styles.content}>
      {loading ? (
        <ActivityIndicator color={variantStyles.text.color} size="small" />
      ) : (
        <>
          {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
          {typeof children === 'string' ? (
            <Text style={textStyle}>{children}</Text>
          ) : (
            children
          )}
          {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
        </>
      )}
    </View>
  );

  if (isGradient) {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        disabled={isDisabled}
        style={[style]}
        {...props}
      >
        <LinearGradient
          colors={theme.colors.gradients.primary}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[
            containerStyle,
            variant === 'hero' && styles.heroShadow,
            isDisabled && styles.disabled,
          ]}
        >
          {content}
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={isDisabled}
      style={[containerStyle, theme.shadows.sm, style]}
      {...props}
    >
      {content}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftIcon: {
    marginRight: 8,
  },
  rightIcon: {
    marginLeft: 8,
  },
  disabled: {
    opacity: 0.5,
  },
  heroShadow: {
    shadowColor: '#E8652B',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 8,
  },
});

