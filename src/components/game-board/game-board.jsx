import React from 'react';
import Game from '../../containers/game.js';
import PropTypes from 'prop-types';
import Timer from '../../containers/timer.js';
import {gameMap} from '../../reducer/reducer.js';
import {removeListener} from '../../util.js';

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
      <p>{name}</p>
      <Timer isWin={isWin} startTime={startTime} />
      <Game setWin={this._setWin} />
      <button onClick={() => {
        removeListener();
        this.props.resetGame(gameMap);
      }}>Restart</button>
    </div>;
  }
}

GameBoard.propTypes = {
  name: PropTypes.string,
  resetGame: PropTypes.func,
};
