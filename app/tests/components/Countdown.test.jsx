var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Countdown = require('Countdown');

describe('CountdownForm', () => {
  it('Countdown should be loaded', () => {
    expect(Countdown).toExist();
  });

  describe('handleSetCountdown', () => {
    //If you set the value to be done it will run the test in a synchronous manner and will only check once done is set
    it('should set state to started and count down', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');
      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        done(); //set done to run the check
      }, 1001);
    });

    it('should set state should never be negative', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(1);

      expect(countdown.state.count).toBe(1);
      expect(countdown.state.countdownStatus).toBe('started');
      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        done(); //set done to run the check
      }, 2001);
    });

    it('should pause countdown on pause status', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(3);
      countdown.handleStatusChanged('paused');
      setTimeout(() => {
        expect(countdown.state.count).toBe(3);
        expect(countdown.state.countdownStatus).toBe('paused');
        done(); //set done to run the check
      }, 1001);
    });

    it('should clear countdown on stopped status', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(3);
      countdown.handleStatusChanged('stopped');
      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        expect(countdown.state.countdownStatus).toBe('stopped');
        done(); //set done to run the check
      }, 1001);
    });
  });
});
