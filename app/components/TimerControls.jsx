var React = require('react');

var Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChanged: React.PropTypes.func.isRequired,
  },
  onStatusChange: function (newStatus) {
    return () => {
      this.props.onStatusChanged(newStatus);
    };
  },
  render: function () {
    var { countdownStatus } = this.props;
    console.log('Render TimerControls countdownStatus:', countdownStatus);
    var renderStartStopButton = () => {
      if (countdownStatus === 'timer-running' || countdownStatus === 'timer-start') {
        return (
          <button className="button primary" onClick={this.onStatusChange('timer-stop')}>Stop</button>
        );
      } else if (countdownStatus === 'timer-pause' || countdownStatus === 'timer-clear') {
        return (
          <button className="button primary" onClick={this.onStatusChange('timer-start')}>Start</button>
        );
      } else if (countdownStatus === 'timer-stop') {
        return (
          <button className="button primary" onClick={this.onStatusChange('timer-start')}>Start</button>
        );
      }
    };

    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="hollow button alert" onClick={this.onStatusChange('timer-clear')}>Clear</button>
      </div>
    );
  },
});

module.exports = Controls;
