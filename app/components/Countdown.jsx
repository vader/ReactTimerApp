var React = require('react');
var Clock = require('Clock');

var Countdown = React.createClass({
  render: function () {
    return (
      <div><Clock totalSeconds={123}/></div>
    );
  },
});

module.exports = Countdown;

