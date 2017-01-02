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
    var renderStartStopButton = () => {
      if (countdownStatus === 'started') {
        return (
          <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
        );
      } else if (countdownStatus === 'paused') {
        return (
          <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
        );
      }
    };

    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="hollow button alert" onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    );
  },
});

module.exports = Controls;
