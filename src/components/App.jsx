import { useState } from 'react';
import Options from './Options';
import Statistics from './Statistics';
import Section from './Section';

export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const btnOptionHandler = btnData => {

    switch (btnData) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = good + neutral + bad;
  const countPositiveFeedbackPercentage = `${Math.round(
    (good / countTotalFeedback) * 100
  )}%`;

  return (
    <>
      <Section title={'Select an option'}>
        <Options
          onClick={btnOptionHandler}
          options={['good', 'neutral', 'bad']}
        />
      </Section>

      <Section title={'Stats'}>
        {countTotalFeedback !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          ></Statistics>
        ) : (
          <p>None Here ^_^</p>
        )}
      </Section>
    </>
  );
};