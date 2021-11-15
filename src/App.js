import { useState } from "react";
import s from "./App.module.scss";
import { FeedbackOptions } from "./components/FeedbackOptions/FeedbackOptions";
import { Notification } from "./components/Notification/Notification";
import { Section } from "./components/Section/Section";
import { Statistics } from "./components/Statistics/Statistics";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addGoodGrade = () => {
    setGood((prev) => prev + 1);
  };

  const addNeutralGrade = () => {
    setNeutral((prev) => prev + 1);
  };

  const addBadGrade = () => {
    setBad((prev) => prev + 1);
  };

  function countTotalFeedback() {
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage() {
    return Math.round((good / countTotalFeedback()) * 100);
  }

  return (
    <div className={s.App}>
      <Section text="Please leave feedback">
        <FeedbackOptions
          onClickGood={addGoodGrade}
          onClickNeutral={addNeutralGrade}
          onClickBad={addBadGrade}
        />
      </Section>
      <Section text="Statistics">
        {!countTotalFeedback() ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
}

export default App;
