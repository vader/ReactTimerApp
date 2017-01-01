var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      countdownStatus: 'stopped',
    };
  },
  startTimer: function () {
    this.timer = setInterval(() => {
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0,
      });
    }, 1000);
  },
  componentDidUpdate: function (prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started' :
          this.startTimer();
          break;
        case 'stopped' :
          this.setState({ count: 0 });
        case 'paused' :
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  handleSetCountdown: function (seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started',
    });
  },
  handleStatusChanged: function (newStatus) {
    this.setState({ countdownStatus: newStatus });
  },
  render: function () {
    var { count, countdownStatus } = this.state;
    console.log('countdownStatus', countdownStatus);
    var renderControlArea = () => {
      if (countdownStatus !== 'stopped') {
        return <Controls countdownStatus={countdownStatus} onStatusChanged={this.handleStatusChanged}/>;
      } else {
        return <CountdownForm onSetCountdown={this.handleSetCountdown}/>;
      }
    };

    return (
      <div>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    );
  },
});

module.exports = Countdown;

