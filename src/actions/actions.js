export const ActionType = {
  SET_NEW_CLASS: `SET_NEW_CLASS`,
  LOAD_LEADER_BOARD: `LOAD_LEADER_BOARD`,
  SET_CURRENT_PLAYER: `SET_NEW_PLAYER`,
  ADD_NEW_PLAYER: `ADD_NEW_PLAYER`,
  ADD_NEW_SCORE: `ADD_NEW_SCORE`,
  CHANGE_GAME_STATUS: `CHANGE_GAME_STATUS`,
  RESET_GAME: `RESET_GAME`,
};

export const ActionCreator = {
  setNewClass: (values) => ({
    type: ActionType.SET_NEW_CLASS,
    payload: values,
  }),
  loadLeaderBoard: (players) => ({
    type: ActionType.LOAD_LEADER_BOARD,
    payload: players,
  }),
  setCurrentPlayer: (player) => ({
    type: ActionType.SET_CURRENT_PLAYER,
    payload: player,
  }),
  changeGameStatus: (status) => ({
    type: ActionType.CHANGE_GAME_STATUS,
    status,
  }),
  addNewPlayer: (player) => ({
    type: ActionType.ADD_NEW_PLAYER,
    payload: player,
  }),
  addNewScore: (score) => ({
    type: ActionType.ADD_NEW_SCORE,
    payload: score,
  })
};
