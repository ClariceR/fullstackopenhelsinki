import React, { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const StatisticsLine = ({ text, value }) => (
  <p>
    {text} {value}
  </p>
);

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
          <tr>
            <td>
              <StatisticsLine text="Good" />
            </td>
            <td>
              <StatisticsLine value={good} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticsLine text="Neutral" />
            </td>
            <td>
              <StatisticsLine value={neutral} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticsLine text="Bad" />
            </td>
            <td>
              <StatisticsLine value={bad} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticsLine text="All" />
            </td>
            <td>
              <StatisticsLine value={total()} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticsLine text="Average" />
            </td>
            <td>
              <StatisticsLine value={averageGood()} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticsLine text="Percentage" />
            </td>
            <td>
              <StatisticsLine value={positivePercentage()} />
            </td>
            <td>%</td>
          </tr>

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
