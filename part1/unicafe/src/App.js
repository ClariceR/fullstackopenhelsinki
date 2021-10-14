import React, { useState } from "react";

const Statistics = ({ good, neutral, bad }) => {
  const total = () => good + neutral + bad;
  const averageGood = () => (good - bad) / total();
  const positivePercentage = () => (good * 100) / total();

  return (
    <>
      <p>All: {total()}</p>
      <p>Average: {averageGood()}</p>
      <p>Positive: {positivePercentage()}%</p>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={() => handleGood()}>Good</button>
      <button onClick={() => handleNeutral()}>Neutral</button>
      <button onClick={() => handleBad()}>Bad</button>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  );
};

export default App;
