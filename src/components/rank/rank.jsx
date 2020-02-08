import React from 'react';
import PropTypes from 'prop-types';

export const Rank = (props) => {
  return <div className="rank">
    <span>{props.rank}</span>
    <p>{props.name}</p>
    <span className="score">{props.score}</span>
  </div>;
};

Rank.propTypes = {
  name: PropTypes.string,
  score: PropTypes.number,
  rank: PropTypes.number,
};
