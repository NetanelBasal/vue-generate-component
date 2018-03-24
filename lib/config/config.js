'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  /**
   * ovveride the default config
   */
  updateConfigFile: function updateConfigFile(config) {
    var content = JSON.stringify(config, null, 2);
    _fs2.default.writeFileSync(__dirname + '/config.json', content, 'utf8');
  },

  /**
   * get the config json as js object
   */
  getConfigFile: function getConfigFile() {
    var config = _fs2.default.readFileSync(__dirname + '/config.json', 'utf8');
    return JSON.parse(config);
  }
};