'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * SingleTpl
 */
var SingleTpl =
/**
 *
 * @param name - the single name
 */
function SingleTpl(name, isDir) {
  _classCallCheck(this, SingleTpl);

  this.type = 'single';
  this.name = name;
  this.isDir = isDir;
};

exports.default = SingleTpl;