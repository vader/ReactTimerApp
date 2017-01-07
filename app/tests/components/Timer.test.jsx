var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

let Timer = require('Timer');

describe('Timer', () => {
  it('Timer should exist', () => {
    expect(Timer).toExist();
  });

  it('should start timer on timer-start status', (done) => {
    let timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.handleStatusChanged('timer-start');

    expect(timer.state.count).toBe(0, 'timer should be zero at this point');
    setTimeout(() => {
      expect(timer.state.count).toBe(1, 'timer should be 1 at this point');
      expect(timer.state.countdownStatus).toBe('timer-running', 'timer state should be timer-running at this point');
      done();
    }, 1001);
  });
  it('should stop and clear timer on timer-clear status', (done) => {
    let timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.handleStatusChanged('timer-start');

    expect(timer.state.count).toBe(0, 'timer should be zero at this point');
    setTimeout(() => {
      expect(timer.state.count).toBe(1, 'timer should be 1 at this point');
      expect(timer.state.countdownStatus).toBe('timer-running', 'timer state should be timer-running at this point');
    }, 1001);
    timer.handleStatusChanged('timer-clear');
    expect(timer.state.count).toBe(0, 'timer should be zero at this point');
    expect(timer.state.countdownStatus).toBe('timer-stop', 'timer should be zero at this point');
    done();
  });
});
