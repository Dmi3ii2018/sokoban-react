import React from 'react';
import PropTypes from 'prop-types';

export const Button = (props) => {
  return <button onClick={props.auth ? props.auth : ``} className="button">{props.name}</button>;
};

Button.propTypes = {
  name: PropTypes.string.required,
  auth: PropTypes.func,
};
