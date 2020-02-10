import {ActionCreator} from '../actions/actions.js';
import {connect} from 'react-redux';
import {Timer} from '../components/timer/timer.jsx';

const mapStateToProps = (state) => ({
  gameStatus: state.gameStatus,
});

const mapDispatchToProps = (dispatch) => ({
  setScore: (score) => {
    dispatch(ActionCreator.addNewScore(score));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);


