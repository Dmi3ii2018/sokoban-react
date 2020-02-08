import React from 'react';
import {Rank} from '../rank/rank.jsx';
import PropTypes from 'prop-types';
import {LoginButton} from '../login-button/login-button.jsx';

export const RankBoard = (props) => {
  let leaderboard = props.players || [];
  leaderboard = leaderboard.sort((prev, next) => {
    if (prev.maxScore === next.maxScore) {
      return prev.name <= next.name ? 1 : -1;
    }
    return prev.maxScore < next.maxScore ? 1 : -1;
  });

  leaderboard.filter((member, index) => {
    member.rank = index + 1;
    member.currentPlayer = member.id === props.currentPlayer.id;
  });

  const displayedPlayers = leaderboard.filter((member, index) => {
    if (index < 3 || member.id === props.currentPlayer.id) {
      return member;
    }
    return null;
  });

  return (
    <>
      {
        props.currentPlayer ? <div className="rankboard">
          {displayedPlayers.map((player) => {
            return <Rank rank={player.rank} name={player.name} score={player.maxScore} key={player.name + player.score} />;
          })}
        </div> : <LoginButton authenticate={props.auth} name="Login"/>
      }
    </>
  );
};

RankBoard.propTypes = {
  auth: PropTypes.func,
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
