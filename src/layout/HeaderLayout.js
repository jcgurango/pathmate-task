import React from 'react';
import { StyleSheet, View } from 'react-native';
import BaseLayout from './BaseLayout';
import { useTheme } from '../providers/Theme';

/**
 * A simple layout with a customizable header, and customizable left/right
 * controls.
 */
const HeaderLayout = ({
  header,
  left,
  right,
  children,
}) => {
  const theme = useTheme();
  const headerContainerStyle = {
    padding: theme.em * 4,
  };

  return (
    <BaseLayout style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={[styles.headerSideContainer, styles.headerLeft, headerContainerStyle]}>
          {left}
        </View>
        <View style={[styles.headerMiddleContainer, headerContainerStyle]}>
          {header}
        </View>
        <View style={[styles.headerSideContainer, styles.headerRight, headerContainerStyle]}>
          {right}
        </View>
      </View>
      <View style={styles.contentContainer}>
        {children}
      </View>
    </BaseLayout>
  );
};

export default HeaderLayout;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  headerContainer: {
    flexDirection: 'row',
  },
  contentContainer: {
    flex: 1,
  },
  headerSideContainer: {
    flex: 1,
  },
  headerMiddleContainer: {
    flex: 4,
  },
  headerLeft: {
    alignItems: 'flex-start',
  },
  headerRight: {
    alignItems: 'flex-end',
  },
});
