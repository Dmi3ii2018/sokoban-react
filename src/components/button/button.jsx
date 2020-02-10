import React from 'react';
import PropTypes from 'prop-types';

export const Button = (props) => {
  return <button className="button">{props.name}</button>;
};

Button.propTypes = {
  name: PropTypes.string,
};
