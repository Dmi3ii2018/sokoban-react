import {GameBoard} from '../components/game-board/game-board.jsx';
import {connect} from 'react-redux';
import {ActionCreator} from '../actions/actions.js';

const mapStateToProps = (state) => ({
  name: state.currentPlayer.name,
});

const mapDispatchToProps = (dispatch) => ({
  resetGame: (value) => {
    dispatch(ActionCreator.setNewClass(value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
