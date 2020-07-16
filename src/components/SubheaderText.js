import React from 'react';
import AppText from './AppText';

/**
 * Extension of AppText with some subheader styles.
 */
const SubheaderText = ({
  style,
  ...props
}) => {
  const subHeaderStyle = {
    fontWeight: 'bold',
  };

  return (
    <AppText size={1.15} style={[subHeaderStyle, style]} {...props} />
  );
};

export default SubheaderText;
