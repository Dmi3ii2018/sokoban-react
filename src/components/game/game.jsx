import React from 'react';
import {setListener, removeListener} from '../../util.js';
import PropTypes from 'prop-types';


export class Game extends React.Component {
  constructor(props) {
    super(props);


    this._onKeyPress = this.props.onKeyPress.bind(this);
    this._winHandler = this.props.winHandler.bind(this);
  }

  componentDidMount() {
    setListener(this.props.initialMap, this._onKeyPress, this._winHandler, this.props.setWin);
  }

  componentDidUpdate() {
    removeListener();
  }

  componentWillUnmount() {
    removeListener();
  }

  render() {
    const {gameMap} = this.props;
    const items = [...gameMap];

    return <ul className="container">
      {
        items.map((it) => {
          return it;
        })
      }
    </ul>;
  }
}

Game.propTypes = {
  gameMap: PropTypes.arrayOf(PropTypes.array),
  initialMap: PropTypes.arrayOf(PropTypes.array),
  onKeyPress: PropTypes.func,
  winHandler: PropTypes.func,
  setWin: PropTypes.func,
};

// export default App;
