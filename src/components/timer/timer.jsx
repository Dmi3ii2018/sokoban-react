import React from 'react';
import PropTypes from 'prop-types';

export class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {timer: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
        () => this.tick(),
        1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState(() => ({
      timer: new Date(),
    }));
  }

  render() {
    const {setScore, startTime, isWin} = this.props;
    const timeDiffMillisec = this.state.timer - startTime;
    const timeDiff = new Date(timeDiffMillisec);

    if (isWin) {
      setScore(timeDiffMillisec);
    }

    return <p>
      {`${timeDiff.getUTCHours()}:${timeDiff.getUTCMinutes()}:${timeDiff.getUTCSeconds()}`}
    </p>;
  }
}

Timer.propTypes = {
  startTime: PropTypes.instanceOf(Date),
  setScore: PropTypes.func,
  isWin: PropTypes.bool,
  addNewPlayer: PropTypes.func,
};
