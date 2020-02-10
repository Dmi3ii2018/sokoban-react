import React from 'react';
import Game from '../../containers/game.js';
import PropTypes from 'prop-types';
import Timer from '../../containers/timer.js';

export class GameBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isWin: false,
      startTime: new Date(),
    };
    this._setWin = this._setWin.bind(this);
  }

  _setWin() {
    this.setState(() => ({
      isWin: true,
    }));
  }

  render() {
    const {name} = this.props;
    const {isWin, startTime} = this.state;

    return <div className="game-board">
      <p className="name">{name}</p>
      <Timer isWin={isWin} startTime={startTime} />
      <Game setWin={this._setWin} />
    </div>;
  }
}

GameBoard.propTypes = {
  name: PropTypes.string,
  resetGame: PropTypes.func,
};
