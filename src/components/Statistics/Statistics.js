import Notification from "../Notification";
const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <>
      {total > 0 && (
        <ul>
          <li>Goog: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive feedback: {percentage}%</li>
        </ul>
      )}
      {total === 0 && <Notification message={"No feedback given"} />}
    </>
  );
};

export default Statistics;
