var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Controls = require('Controls');

describe('Controls', () => {
  it('Controls should be loaded', () => {
    expect(Controls).toExist();
  });
  describe('it should render pause when started', () => {
    var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
    var $el = $(ReactDOM.findDOMNode(controls));
    let $pauseButton = $el.find('button:contains(Pause)');
    expect($pauseButton.length).toBe(1);
  });
  describe('it should render start when paused', () => {
    var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
    var $el = $(ReactDOM.findDOMNode(controls));
    let $pauseButton = $el.find('button:contains(Start)');
    expect($pauseButton.length).toBe(1);
  });
});
