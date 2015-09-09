
var assert = require('assert');
var Shouty = require('../../lib/shouty');

var bridgeHouse = [53.4720597,-2.2998615];
var theQuays    = [53.4709477,-2.2938976];
var piccadilly  = [53.4774029,-2.2309325];

module.exports = function () {
  this.World = function(callback) {
    callback();
    return new Shouty();
  };

  this.Given(/^Joanne is (\d+) km away from Fred$/, function (distance, callback) {
    this.personIsIn("Joanne", bridgeHouse);

    if(distance <= 1) {
      this.personIsIn("Fred", theQuays);
    } else {
      this.personIsIn("Fred", piccadilly);
    }
    callback();
  });

  this.When(/^Fred shouts$/, function (callback) {
    this.shout("Fred", "hello everyone");
    // Write code here that turns the phrase above into concrete actions
    callback();
  });

  this.Then(/^Joanne does not hear anything$/, function (callback) {
    var expected = [];
    var actual = this.getAllShoutsHeardBy("Joanne");
    assert.deepEqual(actual, expected);
    callback();
  });

  this.Then(/^Joanne hears Fred's shout$/, function (callback) {
    var expected = ["hello everyone"];
    var actual = this.getAllShoutsHeardBy("Joanne");
    assert.deepEqual(actual, expected);
    callback();
  });
};
var assert = require('assert');
var Shouty = require('../../lib/shouty');

var bridgeHouse = [53.4720597,-2.2998615];
var theQuays    = [53.4709477,-2.2938976];
var piccadilly  = [53.4774029,-2.2309325];

module.exports = function () {
  this.World = function(callback) {
    callback();
    return new Shouty();
  };

  this.Given(/^Joanne is (\d+) km away from Fred$/, function (distance, callback) {
    this.personIsIn("Joanne", bridgeHouse);

    if(distance <= 1) {
      this.personIsIn("Fred", theQuays);
    } else {
      this.personIsIn("Fred", piccadilly);
    }
    callback();
  });

  this.When(/^Fred shouts$/, function (callback) {
    this.shout("Fred", "hello everyone");
    // Write code here that turns the phrase above into concrete actions
    callback();
  });

  this.Then(/^Joanne does not hear anything$/, function (callback) {
    var expected = [];
    var actual = this.getAllShoutsHeardBy("Joanne");
    assert.deepEqual(actual, expected);
    callback();
  });

  this.Then(/^Joanne hears Fred's shout$/, function (callback) {
    var expected = ["hello everyone"];
    var actual = this.getAllShoutsHeardBy("Joanne");
    assert.deepEqual(actual, expected);
    callback();
  });
};
