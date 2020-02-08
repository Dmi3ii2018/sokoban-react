import React from 'react';
// import {Button} from '../button/button.jsx';
import PropTypes from 'prop-types';

export const LoginButton = (props) => {
  return <button className="button" onClick={() => props.authenticate()}>{props.name}</button>;
};

LoginButton.propTypes = {
  authenticate: PropTypes.func,
  name: PropTypes.string.required,
};
