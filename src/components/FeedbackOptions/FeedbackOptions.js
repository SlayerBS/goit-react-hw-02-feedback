import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.css";

const FeedbackButton = ({ mark, onLeaveFeedback }) => {
  return (
    <button
      key={mark}
      className={styles.btn}
      type="button"
      data-mark={mark}
      onClick={onLeaveFeedback}
    >
      {mark}
    </button>
  );
};

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map((option) =>
    FeedbackButton({ mark: option, onLeaveFeedback })
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
