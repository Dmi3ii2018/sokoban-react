import React from 'react';
import {connect} from 'react-redux';
import {setListener, removeListener} from '../util.js';
import {ActionCreator} from '../actions/actions.js';
import PropTypes from 'prop-types';


const getItems = (data) => {
  const level = [[], [], [], [], [], [], [], [], []];
  for (let n = 0; n < data.length; n++) {
    for (let m = 0; m < data[n].length; m++) {
      let key = String(data[n]);
      let elem = <li key={key + n + m} className={data[n][m]}></li>;
      level[n].push(elem);
    }
  }
  return level;
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this._onKeyPress = this.props.onKeyPress.bind(this);
  }

  componentDidMount() {
    setListener(this.props.initialMap, this._onKeyPress);
  }

  render() {
    const {gameMap} = this.props;
    const items = [...gameMap];
    return <div>
      <ul className="container">
        {
          items.map((it) => {
            return it;
          })
        }
      </ul>
    </div>;
  }

  componentWillUnmount() {
    removeListener();
  }
}

const mapStateToProps = (state) => ({
  gameMap: getItems(state.gameMap),
  initialMap: state.gameMap,
});

const mapDispatchToProps = (dispatch) => ({
  onKeyPress: (value) => dispatch(ActionCreator.setNewClass(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  gameMap: PropTypes.arrayOf(PropTypes.array),
  initialMap: PropTypes.arrayOf(PropTypes.array),
  onKeyPress: PropTypes.func,
};
