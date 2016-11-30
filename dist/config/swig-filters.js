'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (swig) {
  /* ===============
   Swig filters
   =============== */
  swig.setFilter('kebabCase', function (input) {
    return _lodash2.default.kebabCase(input);
  });

  swig.setFilter('camelCase', function (input) {
    return _lodash2.default.capitalize(_lodash2.default.camelCase(input));
  });

  swig.setFilter('camelCaseOnly', function (input) {
    return _lodash2.default.camelCase(input);
  });

  swig.setFilter('upperCase', function (input) {
    return input.toUpperCase();
  });
};