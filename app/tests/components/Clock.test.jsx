var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist();
  });
});

describe('formatSeconds', () => {
  it('should equal 01:01', () => {
    var clock = TestUtils.renderIntoDocument(<Clock/>);
    expect(clock.formatSeconds(615)).toBe('10:15');
  });

  it('should equal 01:01', () => {
    var clock = TestUtils.renderIntoDocument(<Clock/>);
    expect(clock.formatSeconds(61)).toBe('01:01');
  });
});

