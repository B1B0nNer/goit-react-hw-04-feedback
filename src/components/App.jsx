import React, { Component } from 'react';
import Options from './Options';
import Statistics from './Statistics';
import Section from './Section';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  btnOptionHandler = (btnData) => {
    switch (btnData) {
      case 'good':
        this.setState((prevState) => ({ good: prevState.good + 1 }));
        break;
      case 'neutral':
        this.setState((prevState) => ({ neutral: prevState.neutral + 1 }));
        break;
      case 'bad':
        this.setState((prevState) => ({ bad: prevState.bad + 1 }));
        break;
      default:
        break;
    }
  };

  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = good + neutral + bad;
    const countPositiveFeedbackPercentage = `${Math.round(
      (good / countTotalFeedback) * 100
    )}%`;

    return (
      <>
        <Section title={'Select an option'}>
          <Options
            onClick={this.btnOptionHandler}
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
  }
}

export default App;
