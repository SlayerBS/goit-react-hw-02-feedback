import logo from "../../images/logoEspresso.png";
const Statistics = ({ stats, onFeedback, total, percentage }) => {
  return (
    <>
      <img src={logo} />
      <p>Please leave feedback</p>
      <div>
        <button onClick={() => onFeedback("good")}>Good</button>
        <button onClick={() => onFeedback("neutral")}>Neutral</button>
        <button onClick={() => onFeedback("bad")}>Bad</button>
      </div>
      <div>
        <p>Statistics</p>
        <ul>
          <li>Goog{stats.good}</li>
          <li>Neutral{stats.neutral}</li>
          <li>Bad{stats.bad}</li>
          <li>Total{total}</li>
          <li>Positive feedback{percentage}</li>
        </ul>
      </div>
    </>
  );
};

export default Statistics;
