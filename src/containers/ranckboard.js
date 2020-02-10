import {connect} from 'react-redux';
import {RanckBoard} from '../components/rankboard/rankboard.jsx';

const mapStateToProps = (state) => ({
  currentPlayer: state.currentPlayer,
  players: [state.currentPlayer, ...state.players],
});

export default connect(mapStateToProps)(RanckBoard);
