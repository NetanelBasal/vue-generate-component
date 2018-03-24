'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * DirectiveTpl
 */
var DirectiveTpl =
/**
 *
 * @param name - the directive name
 */
function DirectiveTpl(name) {
  _classCallCheck(this, DirectiveTpl);

  this.type = 'directive';
  this.name = name;
};

exports.default = DirectiveTpl;