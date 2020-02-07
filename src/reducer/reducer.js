// import update from 'immutability-helper';

const initialState = {
  gameMap: [
    [`s`, `s`, `w`, `w`, `w`, `w`, `w`, `s`],
    [`w`, `w`, `w`, `s`, `s`, `s`, `w`, `s`],
    [`w`, `p`, `s`, `y`, `b`, `s`, `w`, `s`],
    [`w`, `w`, `w`, `s`, `b`, `p`, `w`, `s`],
    [`w`, `p`, `w`, `w`, `b`, `s`, `w`, `s`],
    [`w`, `s`, `w`, `s`, `p`, `s`, `w`, `w`],
    [`w`, `b`, `s`, `a`, `b`, `b`, `p`, `w`],
    [`w`, `s`, `s`, `s`, `p`, `s`, `s`, `w`],
    [`w`, `w`, `w`, `w`, `w`, `w`, `w`, `w`]
  ]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `SET_NEW_CLASS`:
      return Object.assign({}, state, {
        gameMap: action.payload,
      });
    default:
      return state;
  }
};


