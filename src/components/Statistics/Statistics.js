import Notification from "../Notification";

import styles from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <>
      {total > 0 && (
        <ul className={styles.list}>
          <li className={styles.item}>Goog: {good}</li>
          <li className={styles.item}>Neutral: {neutral}</li>
          <li className={styles.item}>Bad: {bad}</li>
          <li className={styles.item}>Total: {total}</li>
          <li className={styles.item}>Positive feedback: {percentage}%</li>
        </ul>
      )}
      {total === 0 && <Notification message={"No feedback given"} />}
    </>
  );
};

export default Statistics;
