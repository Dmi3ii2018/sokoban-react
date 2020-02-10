import React from 'react';
import {connect} from 'react-redux';
import {Game} from '../components/game/game.jsx';
import {ActionCreator} from '../actions/actions.js';

const getItems = (data) => {
  const level = [[], [], [], [], [], [], [], [], []];
  for (let n = 0; n < data.length; n++) {
    for (let m = 0; m < data[n].length; m++) {
      let key = String(data[n]);
      let elem = <li key={key + n + m} className={data[n][m]}></li>;
      level[n].push(elem);
    }
  }
  return level;
};

const mapStateToProps = (state) => ({
  gameMap: getItems(state.gameMap),
  initialMap: state.gameMap,
});

const mapDispatchToProps = (dispatch) => ({
  onKeyPress: (value) => dispatch(ActionCreator.setNewClass(value)),
  winHandler: (value) => dispatch(ActionCreator.changeGameStatus(value)),
  leaderboardLoaded: (players) => {
    dispatch(ActionCreator.loadLeaderBoard(players));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
