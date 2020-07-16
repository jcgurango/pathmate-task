import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useTheme } from '../providers/Theme';

/**
 * A button with an arrow pointing left.
 */
const BackButton = ({
  size,
  color,
  ...props
}) => {
  const theme = useTheme();

  // Set the size to 8em by default.
  const getButtonSize = () => {
    if (typeof(size) === 'undefined') {
      return theme.em * 8;
    }

    return size;
  };

  // The button color is the primary color by default.
  return (
    <TouchableOpacity {...props}>
      <Ionicons
        name="md-arrow-back"
        color={color || theme.primaryColor}
        size={getButtonSize()}
      />
    </TouchableOpacity>
  );
};

export default BackButton;
