var path = require('path');
var expect = require('chai').expect;

var collatz = require(path.join(__dirname, '..', './collatz.js'));

describe('collatz()', function () {
  'use strict';

  it('exists', function () {
    expect(collatz).to.be.a('function');

  });

  it('does something', function () {
    expect(collatz(4)).to.equal(2);
  });

  it('does something else', function () {
    expect(collatz(2)).to.equal(1);
  });

  it('does something', function () {
    expect(collatz(3)).to.equal(10);
  });

  it('does something else', function () {
    expect(collatz(9)).to.equal(28);
  });


});
