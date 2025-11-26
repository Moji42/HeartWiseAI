import React, { useState } from 'react';
import {
  TextInput,
  TextInputProps,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Eye, EyeOff } from 'lucide-react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { Text } from './Text';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export function Input({
  label,
  error,
  leftIcon,
  rightIcon,
  secureTextEntry,
  style,
  ...props
}: InputProps) {
  const { theme } = useTheme();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const isPassword = secureTextEntry !== undefined;

  return (
    <View style={styles.container}>
      {label && (
        <Text variant="label" style={styles.label}>
          {label}
        </Text>
      )}

      <View
        style={[
          styles.inputContainer,
          {
            backgroundColor: theme.colors.background,
            borderColor: error
              ? theme.colors.error
              : isFocused
              ? theme.colors.primary.main
              : theme.colors.border,
          },
        ]}
      >
        {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}

        <TextInput
          style={[
            styles.input,
            {
              color: theme.colors.foreground,
            },
            leftIcon ? styles.inputWithLeftIcon : undefined,
            (rightIcon || isPassword) ? styles.inputWithRightIcon : undefined,
            style,
          ]}
          placeholderTextColor={theme.colors.mutedForeground}
          secureTextEntry={isPassword && !isPasswordVisible}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />

        {isPassword && (
          <TouchableOpacity
            style={styles.rightIcon}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            {isPasswordVisible ? (
              <EyeOff size={20} color={theme.colors.mutedForeground} />
            ) : (
              <Eye size={20} color={theme.colors.mutedForeground} />
            )}
          </TouchableOpacity>
        )}

        {rightIcon && !isPassword && (
          <View style={styles.rightIcon}>{rightIcon}</View>
        )}
      </View>

      {error && (
        <Text variant="caption" color={theme.colors.error} style={styles.error}>
          {error}
        </Text>
      )}
    </View>
  );
}

interface TextAreaProps extends TextInputProps {
  label?: string;
  error?: string;
}

export function TextArea({ label, error, style, ...props }: TextAreaProps) {
  const { theme } = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      {label && (
        <Text variant="label" style={styles.label}>
          {label}
        </Text>
      )}

      <TextInput
        style={[
          styles.textArea,
          {
            backgroundColor: theme.colors.background,
            borderColor: error
              ? theme.colors.error
              : isFocused
              ? theme.colors.primary.main
              : theme.colors.border,
            color: theme.colors.foreground,
          },
          style,
        ]}
        placeholderTextColor={theme.colors.mutedForeground}
        multiline
        textAlignVertical="top"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />

      {error && (
        <Text variant="caption" color={theme.colors.error} style={styles.error}>
          {error}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    minHeight: 48,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  inputWithLeftIcon: {
    paddingLeft: 8,
  },
  inputWithRightIcon: {
    paddingRight: 8,
  },
  leftIcon: {
    paddingLeft: 12,
  },
  rightIcon: {
    paddingRight: 12,
  },
  textArea: {
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 16,
    padding: 16,
    minHeight: 120,
  },
  error: {
    marginTop: 4,
  },
});

