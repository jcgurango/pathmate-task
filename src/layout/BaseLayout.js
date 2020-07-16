import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { useTheme } from '../providers/Theme';

/**
 * The main container for all app-related screens. Takes into account Android
 * notches/status bars, and the similar equivalents in iOS.
 */
const BaseLayout = ({
  style,
  children,
}) => {
  const theme = useTheme();

  return (
    <SafeAreaView style={[{ flex: 1 }, style]}>
      <StatusBar backgroundColor={theme.statusBar.backgroundColor} barStyle="dark-content" />
      {children}
    </SafeAreaView>
  );
};

export default BaseLayout;
