import {connect} from 'react-redux';
import {Greeting} from '../components/greeting/greeting.jsx';
import {ActionCreator} from '../actions/actions.js';

const mapDispatchToProps = (dispatch) => ({
  setGameStatus: (status) => {
    dispatch(ActionCreator.changeGameStatus(status));
  },
  setCurrentPlayer: (newPlayer) => {
    dispatch(ActionCreator.setCurrentPlayer(newPlayer));
  },
  addNewPlayer: (player) => {
    dispatch(ActionCreator.addNewPlayer(player));
  }
});

export default connect(null, mapDispatchToProps)(Greeting);
