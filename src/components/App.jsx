import '../index.css';
import { useState } from 'react';
import { Container } from './App.styled';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = option => {
    if (option === 'good') {
      setGood(good + 1);
    } else if (option === 'neutral') {
      setNeutral(neutral + 1);
    } else if (option === 'bad') {
      setBad(bad + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countTotalPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100) || 0;
  };

  const options = Object.keys({ good, neutral, bad });
  const totalFeedback = countTotalFeedback();
  const totalPercentage = countTotalPercentage();

  return (
    <Container>
      <Section title="Please leave feedback :)">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {totalFeedback !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={totalPercentage}
          />
        ) : (
          <Notification message="There is no feedback :(" />
        )}
      </Section>
    </Container>
  );
};
