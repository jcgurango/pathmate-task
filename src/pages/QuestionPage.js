import React, { useState } from 'react';
import HeaderLayout from '../layout/HeaderLayout';
import BackButton from '../components/BackButton';
import { View, StyleSheet } from 'react-native';
import ProgressBar from '../components/ProgressBar';
import AppText from '../components/AppText';
import { ScrollView } from 'react-native-gesture-handler';
import HeaderText from '../components/HeaderText';
import SubheaderText from '../components/SubheaderText';
import AppButton from '../components/AppButton';
import OptionSet from '../components/OptionSet';

/**
 * The header to be displayed showing what step they're on with a progress
 * bar.
 */
const StepHeader = ({
  currentStep = 1,
  maxSteps = 7,
}) => {
  return (
    <View>
      <AppText size={0.75} style={styles.headerText}>{`Step ${currentStep}/${maxSteps}`}</AppText>
      <View style={styles.progressBarContainer}>
        <ProgressBar />
      </View>
    </View>
  );
};

/**
 * Renders a question.
 */
const QuestionPage = ({
  currentStep = 1,
  maxSteps = 7,
  question: {
    topText,
    questionText,
    answers,
  },
}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  return (
    <HeaderLayout
      left={<BackButton />}
      header={<StepHeader currentStep={currentStep} maxSteps={maxSteps} />}
    >
      <ScrollView style={styles.questionContainer} contentContainerStyle={styles.contentContainer}>
        <HeaderText style={styles.text}>{topText}</HeaderText>
        <SubheaderText style={styles.text}>{questionText}</SubheaderText>
        <OptionSet
          options={answers}
          keySelector={({ id }) => id}
          valueSelector={({ id }) => id}
          renderOption={({ text }) => (<AppText>{text}</AppText>)}
          onChange={setSelectedOptions}
          value={selectedOptions}
        />
      </ScrollView>
      <View style={styles.contentContainer}>
        <AppButton text="Weiter" />
      </View>
    </HeaderLayout>
  );
};

export default QuestionPage;

const styles = StyleSheet.create({
  headerText: {
    textAlign: 'center',
  },
  progressBarContainer: {
    marginTop: 8,
  },
  questionContainer: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  text: {
    textAlign: 'center',
    marginBottom: 16,
  },
});
