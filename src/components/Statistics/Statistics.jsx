import { Notification } from 'components/Notification/Notification';
import PropTypes from 'prop-types';

export const Statistics = ({
  state: { good, neutral, bad },
  totalFeedback,
  positiveFeedback,
}) => {
  if (totalFeedback) {
    return (
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive feedback: {positiveFeedback}%</li>
      </ul>
    );
  } else {
    return <Notification message="No feedback given" />;
  }
};

Statistics.PropType = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};
