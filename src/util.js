export const GameStatus = {
  GREETING: `greeting`,
  PLAYING: `playing`,
  RANCKBOARD: `ranckboard`,
};

export const keyPressHandler = (level, x, y, inputHandler, winHandler, setWin) => (e) => {
  let dx;
  let dy;
  let fwdCell;

  const updateClasses = ({row, col, value}) => {
    level[row][col] = value;
  };

  if (e.keyCode === 37) {
    dx = -1;
    dy = 0;
  } else if (e.keyCode === 39) {
    dx = 1;
    dy = 0;
  } else if (e.keyCode === 38) {
    dx = 0;
    dy = -1;
  } else if (e.keyCode === 40) {
    dx = 0;
    dy = 1;
  } else {
    return;
  }
  fwdCell = level[y + dy][x + dx];
  if (fwdCell === `w`) {
    return;
  }
  let cell = level[y][x];

  if (fwdCell === `b` || fwdCell === `a`) {
    let coordY = y + dy + dy;
    let coordX = x + dx + dx;
    let fwd2cell = level[coordY][coordX];
    if (fwd2cell === `w` || fwd2cell === `b` || fwd2cell === `a`) {
      return;
    }
    if (fwd2cell === `p`) {
      updateClasses({row: coordY, col: coordX, value: `a`});
    } else {
      updateClasses({row: coordY, col: coordX, value: `b`});
    }

    if (fwdCell === `a`) {
      fwdCell = `p`;
      updateClasses({row: (y + dy), col: (x + dx), value: `p`});
    } else {
      updateClasses({row: (y + dy), col: (x + dx), value: `s`});
    }
  }
  if (fwdCell === `w`) {
    return;
  }

  if (cell === `Y`) {
    updateClasses({row: y, col: x, value: `p`});
  } else {
    updateClasses({row: y, col: x, value: `s`});
  }

  if (fwdCell === `p`) {
    updateClasses({row: (y + dy), col: (x + dx), value: `Y`});
  } else {
    updateClasses({row: (y + dy), col: (x + dx), value: `y`});
  }

  x += dx; y += dy;
  let isWin = true;
  for (let n = 0; n < level.length; n++) {
    for (let m = 0; m < level[n].length; m++) {
      if (level[n][m] === `b`) {
        isWin = false;
      }
    }
  }

  window.removeEventListener(`keyup`, keyPressHandler);

  if (!isWin) {
    inputHandler(level);
    return;
  } else {
    setWin();
    winHandler(`ranckboard`);
  }
};


export const setListener = (level, inputHandler, winHandler, setWin) => {
  let x;
  let y;

  for (let n = 0; n < level.length; n++) {
    for (let m = 0; m < level[n].length; m++) {
      if (level[n][m] === `y`) {
        x = m;
        y = n;
      }
    }
  }
  window.addEventListener(`keyup`, keyPressHandler(level, x, y, inputHandler, winHandler, setWin));
};

export const removeListener = () => {
  window.removeEventListener(`keyup`, keyPressHandler);
};
