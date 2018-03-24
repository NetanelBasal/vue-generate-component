'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/**
 * PipeTpl
 */
var PipeTpl =
/**
 *
 * @param name - the Pipe name
 */
function PipeTpl(name) {
  _classCallCheck(this, PipeTpl);

  this.type = 'Pipe';
  this.name = name;
};

exports.default = PipeTpl;