import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, handleFeedbackIncrement }) => {
  return (
    <ul>
      {options.map(option => (
        <button
          key={option}
          type="button"
          name={option}
          onClick={handleFeedbackIncrement}
        >
          {option}
        </button>
      ))}
    </ul>
  );
};

FeedbackOptions.PropType = {
  options: PropTypes.oneOf(['good', 'neutral', 'bad']).isRequired,
  handleFeedbackIncrement: PropTypes.func.isRequired,
};
