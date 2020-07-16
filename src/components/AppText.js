import React from 'react';
import { Text } from 'react-native';
import { useTheme } from '../providers/Theme';

/**
 * Small layer on top of the <Text /> component to set defaults and allow size
 * to be defined as a percentage.
 */
const AppText = ({ size = 1, style, children, ...props }) => {
  const theme = useTheme();

  const defaultTextStyle = {
    color: theme.fontColor,
    fontSize: theme.fontSize * size,
  };

  return (
    <Text style={[defaultTextStyle, style]} {...props}>
      {children}
    </Text>
  );
};

export default AppText;
