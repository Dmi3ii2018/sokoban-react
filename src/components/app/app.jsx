import React from 'react';
import PropTypes from 'prop-types';
import Greeting from '../../containers/greeting.js';
import GameBoard from '../../containers/game-board.js';
import RanckBoard from '../../containers/ranckboard.js';
import {GameStatus} from '../../util.js';

export class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const {gameStatus} = this.props;
    const {GREETING, PLAYING, RANCKBOARD} = GameStatus;
    const current = () => {
      switch (gameStatus) {
        case GREETING:
          return <Greeting />;
        case PLAYING:
          return <GameBoard />;
        case RANCKBOARD:
          return <RanckBoard />;
        default:
          return null;
      }
    };

    return <div className="game-container">
      {current()}
    </div>;
  }

}

App.propTypes = {
  isPlaying: PropTypes.bool,
  gameStatus: PropTypes.oneOf([`greeting`, `playing`, `ranckboard`]),
};
