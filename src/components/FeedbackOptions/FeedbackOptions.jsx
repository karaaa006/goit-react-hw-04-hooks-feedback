import PropTypes from "prop-types";
import { Button } from "../Button/Button";

export function FeedbackOptions({ onClickGood, onClickNeutral, onClickBad }) {
  return (
    <div className="feedbackOptions">
      <Button name="good" onClick={onClickGood}>
        Good
      </Button>
      <Button name="neutral" onClick={onClickNeutral}>
        Neutral
      </Button>
      <Button name="bad" onClick={onClickBad}>
        Bad
      </Button>
    </div>
  );
}

FeedbackOptions.propTypes = {
  onClickGood: PropTypes.func,
  onClickNeutral: PropTypes.func,
  onClickBad: PropTypes.func,
};
