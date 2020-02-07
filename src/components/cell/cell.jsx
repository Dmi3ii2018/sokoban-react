import React from 'react';

export let level;

export let coordX;
export let coordY;

const getItems = (data) => {
  level = [[], [], [], [], [], [], [], [], []];
  const itemsList = [];
  for (let n = 0; n < data.length; n++) {
    for (let m = 0; m < data[n].length; m++) {
      let key = String(data[n]);
      let elem = <li key={key} className={data[n][m]}></li>;
      level[n].push(elem);
      itemsList.push(elem);
      if (data[n][m] === `y`) {
        coordX = m;
        coordY = n;
      }
    }
  }
  return itemsList;
};

// export const GetCells = (props) => {

//   const {data} = props;
//   let items = getItems(data);

//   return <ul className="container">
//     {items.map((it) => {
//       return it;
//     })}
//   </ul>;
// };
