import React from 'react';
import {Rank} from '../rank/rank.jsx';
import PropTypes from 'prop-types';

export const RanckBoard = (props) => {
  let leaderboard = props.players || [];
  // let ranckList = [];

  // leaderboard.forEach((element, i, arr) => {
  //   if (i === arr.length - 1) {
  //     ranckList.push(arr[arr.length - 1]);
  //     return;
  //   }
  //   if (element.name !== arr[i + 1].name) {
  //     ranckList.push(element);
  //     console.log(ranckList);
  //   }
  // });

  leaderboard.sort((prev, next) => {
    if (prev.maxScore === next.maxScore) {
      return prev.name <= next.name ? 1 : -1;
    }
    return prev.maxScore < next.maxScore ? -1 : 1;
  });

  leaderboard.filter((member, index) => {
    member.rank = index + 1;
    member.currentPlayer = member.id === props.currentPlayer.id;
  });

  const displayedPlayers = leaderboard.filter((member, index) => {
    if (index < 4 || member.id === props.currentPlayer.id) {
      return member;
    }
    return null;
  });
console.log(displayedPlayers);
console.log(leaderboard);

  return <div className="rankboard">
    {displayedPlayers.map((player) => {
      const time = new Date(player.maxScore);
      return <Rank
        key={player.id}
        isActive={player.currentPlayer ? true : false}
        rank={player.rank}
        name={player.name}
        score={`${time.getUTCHours()}:${time.getUTCMinutes()}:${time.getUTCSeconds()}`} />;
    })}
  </div>;
};

RanckBoard.propTypes = {
  currentPlayer: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    maxScore: PropTypes.number,
    name: PropTypes.string,
    rank: PropTypes.number,
  }),
  players: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    maxScore: PropTypes.number,
    name: PropTypes.string,
    rank: PropTypes.number,
  }))
};

