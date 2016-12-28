var React = require('react');
var { Link, IndexLink } = require('react-router');

var Nav = () => ({
  render: function () {
    return (
      <div>
        <div className="top-bar" id="example-menu">
          <div className="top-bar-left">
            <ul className="menu" data-dropdown-menu>
              <li className="menu-text">React Timer App</li>
              <li><IndexLink to="/" activeClassName="active-link">Timer</IndexLink></li>
              <li><Link to="/" activeClassName="active-link">Countdown</Link></li>
            </ul>
          </div>
          <div className="top-bar-right">
            <ul className="menu" data-dropdown-menu>
              <li className="menu-text">Created by <a href="http://vader.it"><span>Shawn Vader</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  },
});

module.exports = Nav;
