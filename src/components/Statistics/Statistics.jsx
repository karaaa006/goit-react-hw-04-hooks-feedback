import PropTypes from "prop-types";
import s from "./Statistics.module.scss";

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <ul className={s.statistics}>
        <li className={s.statisticElem}>Good: {good}</li>
        <li className={s.statisticElem}>Neutral: {neutral}</li>
        <li className={s.statisticElem}>Bad: {bad}</li>
        <li className={s.statisticElem}>Total: {total}</li>
      </ul>
      <p>Positive feedback: {positivePercentage}%</p>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
