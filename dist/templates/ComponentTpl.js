'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * ComponentTpl
 */
var ComponentTpl =
/**
 *
 * @param name - the component name
 */
function ComponentTpl(name, postfix) {
  _classCallCheck(this, ComponentTpl);

  this.type = 'component';
  this.isDir = true;
  this.name = postfix ? name + '.' + postfix : name;
};

exports.default = ComponentTpl;