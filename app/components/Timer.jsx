var React = require('react');
var Clock = require('Clock');
var TimerControls = require('TimerControls');

var Timer = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      countdownStatus: 'timer-stop',
    };
  },
  startTimer: function () {
    this.timer = setInterval(() => {
      let count = this.state.count;
      count = count + 1;
      this.setState({
        count: count,
        countdownStatus: 'timer-running',
      });
    }, 1000);
  },
  componentDidUpdate: function () {
    var { count, countdownStatus } = this.state;
    switch (countdownStatus) {

      case 'timer-start': {
        console.log('Start the timer');
        this.startTimer();
        break;
      }

      case 'timer-stop': {
        console.log('Stop the timer');
        clearInterval(this.timer);
        this.timer = undefined;
        break;
      }

      case 'timer-clear': {
        console.log('Clear the timer');
        clearInterval(this.timer);
        this.timer = undefined;
        this.setState({ count: 0, countdownStatus: 'timer-stop' });
        break;
      }

    }
  },
  componentDidMount: function () {
    console.log('Timer componentDidMount');
  },
  handleStatusChanged: function (newStatus) {
    this.setState({
      countdownStatus: newStatus,
    });
  },
  componentWillUnmount: function () {
    clearInterval(this.timer);
    this.timer = undefined;
  },
  render: function () {
    var { count, countdownStatus } = this.state;

    return (
      <div>
        <h1 className="page-title">Timer</h1>
        <Clock totalSeconds={count}/>
        <TimerControls countdownStatus={countdownStatus} onStatusChanged={this.handleStatusChanged}/>
      </div>
    );
  },
});

module.exports = Timer;
