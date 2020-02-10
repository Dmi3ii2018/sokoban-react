import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

export const Rank = (props) => {
  const {isActive} = props;

  const ranckClass = cn({
    'ranck': true,
    'ranck--active': isActive,
  });

  return <div className={ranckClass}>
    <span>{props.rank}</span>
    <p>{props.name}</p>
    <span className="score">{props.score}</span>
  </div>;
};

Rank.propTypes = {
  name: PropTypes.string,
  score: PropTypes.number,
  rank: PropTypes.number,
  isActive: PropTypes.bool,
};
