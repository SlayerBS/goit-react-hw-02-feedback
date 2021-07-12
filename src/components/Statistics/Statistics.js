import logo from "../../images/logoEspresso.png";
const Statistics = ({ stats, onFeedback }) => {
  console.log({ stats });
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
        </ul>
      </div>
    </>
  );
};

export default Statistics;
