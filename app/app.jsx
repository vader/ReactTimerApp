var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');
var Main = require('Main');
var Countdown = require('Countdown');
var Timer = require('Timer');

// Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');

// Start foundation select document using jquery and call the foundation method

$(document).foundation();

//app.css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component = {Main}>
      <Route path="/countdown" component = {Countdown}/>
      <IndexRoute component = {Timer}/>
    </Route>
  </Router>, document.getElementById('app'));
