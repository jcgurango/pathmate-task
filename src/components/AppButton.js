import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import AppText from './AppText';
import { useTheme } from '../providers/Theme';

/**
 * Generic button for use around the app.
 */
const AppButton = ({
  style,
  color,
  children,
  text,
  ...props
}) => {
  const theme = useTheme();

  const renderText = (text) => {
    return (
      <AppText style={{ color: theme.buttonTextColor, fontWeight: 'bold' }}>{text}</AppText>
    );
  };

  // If text is provided, render the text, otherwise render the children
  // directly.
  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        { backgroundColor: color || theme.primaryColor },
        style,
      ]}
    >
      {text ? renderText(text) : children}
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    padding: 16,
    borderRadius: 32,
  },
});
