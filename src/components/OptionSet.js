import React, { Fragment } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../providers/Theme';
import AppText from './AppText';

/**
 * Internal renderer for the individual options.
 */
const Option = ({
  children,
  onSelected,
  selected,
  value,
}) => {
  const theme = useTheme();
  const selectedTickStyle = [
    styles.optionTick,
    {
      borderColor: theme.primaryColor,
      backgroundColor: theme.primaryColor,
      color: theme.buttonTextColor,
    },
  ];

  return (
    <TouchableOpacity
      style={styles.optionContainer}
      onPress={() => onSelected(value)}
    >
      <View style={styles.optionTickContainer}>
        <View style={selected ? selectedTickStyle : styles.optionTick}>
          {selected ? (
            <Ionicons name="ios-checkmark" color={theme.buttonTextColor} size={16} />
          ) : null}
        </View>
      </View>
      <View style={styles.optionContentContainer}>
        {children}
      </View>
    </TouchableOpacity>
  );
};

/**
 * Renders a list of options that can be selected.
 */
const OptionSet = ({
  options,
  // Default to just rendering plain text.
  renderOption = (option) => (<AppText>{option}</AppText>),
  // Default to using the index as the key.
  keySelector = (option, index) => `option-${index}`,
  // Default to using the entire option object as the value.
  valueSelector = (option, index) => option,
  value,
  onChange,
}) => {
  // Checks if the option value is in the array (and that an array was provided)
  const isSelected = (optionValue) => {
    return value && (value.indexOf(optionValue) > -1);
  };

  // Toggles the selection of a single option.
  const toggleOption = (optionValue) => {
    // Check if it's already in the selected values.
    if (isSelected(optionValue)) {
      // Call back with an array with the option filtered out.
      onChange(value.filter((option) => (option !== optionValue)));
    } else {
      // Call back with an array that includes the option.
      onChange(value.concat(optionValue));
    }
  };

  return (
    <View style={styles.optionSetContainer}>
      {options.map((option, index) => {
        const optionValue = valueSelector(option);

        return (
          <Fragment key={keySelector(option, index)}>
            <Option
              selected={isSelected(optionValue)}
              onSelected={toggleOption}
              value={optionValue}
            >
              {renderOption(option)}
            </Option>
          </Fragment>
        );
      })}
    </View>
  );
};

export default OptionSet;

const styles = StyleSheet.create({
  optionContainer: {
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionTickContainer: {
    marginRight: 8,
  },
  optionTick: {
    borderRadius: 8,
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: 'rgb(225, 225, 225)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionContentContainer: {
    flex: 1,
  },
});
