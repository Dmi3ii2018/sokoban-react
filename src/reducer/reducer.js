import {ActionType} from '../actions/actions.js';
import {players} from '../mock/mock.js';
import update from 'immutability-helper';
import copy from 'deep-copy-javascript';

const initialGameMap = [
  [`s`, `s`, `w`, `w`, `w`, `w`, `w`, `s`],
  [`w`, `w`, `w`, `s`, `s`, `s`, `w`, `s`],
  [`w`, `p`, `s`, `y`, `b`, `s`, `w`, `s`],
  [`w`, `w`, `w`, `s`, `b`, `p`, `w`, `s`],
  [`w`, `p`, `w`, `w`, `b`, `s`, `w`, `s`],
  [`w`, `s`, `w`, `s`, `p`, `s`, `w`, `w`],
  [`w`, `b`, `s`, `a`, `b`, `b`, `p`, `w`],
  [`w`, `s`, `s`, `s`, `p`, `s`, `s`, `w`],
  [`w`, `w`, `w`, `w`, `w`, `w`, `w`, `w`]
];

export const gameMap = copy.deepCopy(initialGameMap);

const initialState = {
  gameStatus: `greeting`,
  currentPlayer: null,
  players,
  gameMap: copy.deepCopy(initialGameMap),
};

console.log(initialState.gameMap == initialGameMap);

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_NEW_CLASS:
      return Object.assign({}, state, {
        gameMap: action.payload,
      });
    case ActionType.LOAD_LEADER_BOARD:
      return Object.assign({}, state, {
        players: action.payload,
      });
    case ActionType.SET_CURRENT_PLAYER:
      return Object.assign({}, state, {
        currentPlayer: action.payload,
      });
    case ActionType.CHANGE_GAME_STATUS:
      return Object.assign({}, state, {
        gameStatus: action.status,
      });
    case ActionType.ADD_NEW_PLAYER:
      return Object.assign({}, state, {
        players: [action.payload, ...state.players],
      });
    case ActionType.ADD_NEW_SCORE:
      return update(state, {currentPlayer: {maxScore: {$set: action.payload}}});
    default:
      return state;
  }
};
