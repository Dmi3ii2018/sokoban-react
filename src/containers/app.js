import {App} from '../components/app/app.jsx';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
  gameStatus: state.gameStatus,
});


export default connect(mapStateToProps)(App);
