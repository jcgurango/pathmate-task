import React from 'react';
import QuestionPage from './src/pages/QuestionPage';

// Some dummy data to pass. Normally this would be retrieve from a DB.
const dummyQuestionData = {
  topText: 'Lass uns das Coaching auf dich und dein Gesundheit abstimmen.',
  questionText: 'Welche Situation trifft auf dich zu?',
  answers: [
    {
      id: 'a000',
      text: 'Ich leide Bluthochdruck',
    },
    {
      id: 'a001',
      text: 'Ich leide an Diabetes Typ 2',
    },
    {
      id: 'a002',
      text: 'Ich habe Schlafprobleme',
    },
    {
      id: 'a003',
      text: 'Ich möchte meine persönlichen Gesundheitsrisiken kennenlernen',
    },
    {
      id: 'a004',
      text: 'Ich bin gesund und möchte es auch bleiben',
    },
  ],
};

const App = () => {
  return (
    <QuestionPage
      currentStep={2}
      maxSteps={7}
      question={dummyQuestionData}
    />
  );
}

export default App;
