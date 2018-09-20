/*! collatz v0.0.0 - MIT license */
'use strict';

var collatz = function (x) {
  var result = x % 2;
  if( result == 0 ) {
    x = x /2;
  }
  else {
    x = (x * 3) + 1;
  }
  return x;
}

if ( typeof module !== "undefined" ) {
  module.exports = collatz;
}
