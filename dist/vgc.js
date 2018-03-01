#! /usr/bin/env node
'use strict';

var _commandLineArgs = require('command-line-args');

var _commandLineArgs2 = _interopRequireDefault(_commandLineArgs);

var _swig = require('swig');

var _swig2 = _interopRequireDefault(_swig);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _TemplateFactory = require('./TemplateFactory');

var _TemplateFactory2 = _interopRequireDefault(_TemplateFactory);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _config = require('./config/config');

var _config2 = _interopRequireDefault(_config);

var _cliOptions = require('./config/cli-options');

var _cliOptions2 = _interopRequireDefault(_cliOptions);

var _swigFilters = require('./config/swig-filters');

var _swigFilters2 = _interopRequireDefault(_swigFilters);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cli = (0, _commandLineArgs2.default)(_cliOptions2.default);

(0, _swigFilters2.default)(_swig2.default);
var options = cli.parse().options;

/* ===============
 Ask for help
 =============== */
if (options.help) {
  console.log(cli.getUsage(cli));
}

/* ===============
 Set the file extensions
 =============== */
if (options.html || options.style || options.script || options.spec) {
  var configData = _config2.default.getConfigFile();
  configData.filesType.html = options.html ? options.html : configData.filesType.html;
  configData.filesType.style = options.style ? options.style : configData.filesType.style;
  configData.filesType.script = options.script ? options.script : configData.filesType.script;
  configData.filesType.spec = options.spec ? options.spec : configData.filesType.spec;
  _config2.default.updateConfigFile(configData);
}

_TemplateFactory2.default.createTemplateFor(options);