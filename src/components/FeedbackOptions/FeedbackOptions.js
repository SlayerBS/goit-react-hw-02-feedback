const FeedbackButton = ({ mark, onLeaveFeedback }) => {
  return (
    <button type="button" data-mark={mark} onClick={onLeaveFeedback}>
      {mark}
    </button>
  );
};

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map((option) =>
    FeedbackButton({ mark: option, onLeaveFeedback })
  );
};

export default FeedbackOptions;
