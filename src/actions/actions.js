const ActionType = {
  SET_NEW_CLASS: `SET_NEW_CLASS`,
  LOAD_LEADER_BOARD: `LOAD_LEADER_BOARD`,
  LOGGED_IN: `LOGGED_IN`,
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
  loggedIn: (player) => ({
    type: ActionType.LOGGED_IN,
    payload: player,
  })

};
