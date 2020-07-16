import React from 'react';
import AppText from './AppText';
import { useTheme } from '../providers/Theme';

/**
 * Extension of AppText with some header styles.
 */
const HeaderText = ({
  style,
  ...props
}) => {
  const theme = useTheme();
  const headerStyle = {
    color: theme.primaryColor,
    fontWeight: 'bold',
  };

  return (
    <AppText size={1.5} style={[headerStyle, style]} {...props} />
  );
};

export default HeaderText;
