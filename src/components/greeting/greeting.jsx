import React from 'react';
import PropTypes from 'prop-types';
import uniqId from 'uniqid';

export class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ``,
      isNameValid: true,
    };

    this._inputHandler = this._inputHandler.bind(this);
    this._buttonClickHandler = this._buttonClickHandler.bind(this);
  }

  _inputHandler(evt) {
    this.setState({name: evt.target.value});
  }

  _buttonClickHandler() {
    if (this.state.name) {
      const newPlayer = {name: this.state.name, maxScore: 0, id: uniqId()};
      this.props.setGameStatus(`playing`);
      this.props.setCurrentPlayer(newPlayer);
      // this.props.addNewPlayer(newPlayer);
    } else {
      this.setState(() => (
        {isNameValid: false}
      ));
    }
  }

  render() {
    const {name, isNameValid} = this.state;

    return <div className="greeting">
      <h2>Welcome to Sokoban Game!</h2>
      {isNameValid ? null : <p>Please enter your name</p>}
      <input type="text" value={name} onChange={this._inputHandler} placeholder=" Your Name" />
      <button className="button" name="Play" onClick={this._buttonClickHandler} >Play</button>
    </div>;
  }
}

Greeting.propTypes = {
  setGameStatus: PropTypes.func,
  setCurrentPlayer: PropTypes.func,
  addNewPlayer: PropTypes.func,
};
