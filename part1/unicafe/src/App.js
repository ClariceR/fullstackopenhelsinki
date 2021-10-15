import React, { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const total = () => good + neutral + bad;
  const averageGood = () => (good - bad) / total();
  const positivePercentage = () => (good * 100) / total();

  if (good > 0 || neutral > 0 || bad > 0) {
    return (
      <>
        <h2>Statistics</h2>
        <table>
          <tbody>
            <StatisticsLine text="Good" value={good} />
            <StatisticsLine text="Neutral" value={neutral} />
            <StatisticsLine text="Bad" value={bad} />
            <StatisticsLine text="All" value={total()} />
            <StatisticsLine text="Average" value={averageGood()} />
            <StatisticsLine text="Percentage" value={positivePercentage()}/>
          </tbody>
        </table>
      </>
    );
  }
  return <p>No Feedback Given</p>;
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
      <Button onClick={handleGood} text="Good" />
      <Button onClick={handleNeutral} text="Neutral" />
      <Button onClick={handleBad} text="Bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
