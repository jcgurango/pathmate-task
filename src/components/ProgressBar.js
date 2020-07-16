import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '../providers/Theme';

/**
 * A simple progress bar. Defaults to the primary theme color.
 */
const ProgressBar = ({
  backgroundColor,
  barColor,
  style,
}) => {
  const [progressBarWidth, setProgressBarWidth] = useState(0);

  // Retrieve the "grey" and primary color from the theme.
  const {
    grey: defaultBackgroundColor,
    primaryColor: defaultBarColor,
  } = useTheme();

  const relayout = (e) => {
    // Retrieve the width of the progress bar.
    const { nativeEvent: { layout: { width } } } = e;
    setProgressBarWidth(width);
  };

  // The progress bar's style is rendered as a function of the width of the
  // container.
  return (
    <View
      style={[
        styles.progressBarContainer,
        {
          backgroundColor: backgroundColor || defaultBackgroundColor,
        },
        style,
      ]}
      onLayout={relayout}
    >
      <View
        style={[
          styles.progressBar,
          { width: progressBarWidth * 0.25, backgroundColor: barColor || defaultBarColor }
        ]}
      />
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  progressBarContainer: {
    backgroundColor: 'black',
    borderRadius: 4,
    height: 8,
  },
  progressBar: {
    backgroundColor: 'white',
    borderRadius: 4,
    height: 8,
  },
});
