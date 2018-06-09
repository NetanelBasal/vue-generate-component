'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _swig = require('swig');

var _swig2 = _interopRequireDefault(_swig);

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _config = require('./config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * TemplateGenerator
 */
var TemplateGenerator = function () {

  /**
   * Todo: Inject swig, fs and config to mock them in the future tests
   * @param options
   */
  function TemplateGenerator(options) {
    _classCallCheck(this, TemplateGenerator);

    this.TEMPLATES_DIR = __dirname + '/blueprints';
    this._create(options);
  }

  /**
   *
   * @param options
   * @private
   */


  _createClass(TemplateGenerator, [{
    key: '_create',
    value: function _create() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var name = options.name,
          type = options.type,
          actions = options.actions,
          postfix = options.postfix;

      var filesType = _config2.default.getConfigFile().filesType;
      if (options.isDir) {
        this._createDirectory(this._getDirPath(type), { name: name, actions: actions, filesType: filesType, postfix: postfix }, filesType);
      } else {
        var tpl = this._compileTpl(this._getSingleTpl(type), { name: name, actions: actions, filesType: filesType });
        this._createFile(name, type, filesType.script, tpl);
      }
    }

    /**
     *
     * @param file
     * @param data
     * @returns {*}
     * @private
     */

  }, {
    key: '_compileTpl',
    value: function _compileTpl(file, _ref) {
      var name = _ref.name,
          actions = _ref.actions,
          filesType = _ref.filesType;

      var compiled = _swig2.default.compileFile(file);
      return compiled({ name: name, actions: actions, filesType: filesType });
    }

    /**
     *
     * @param name
     * @param fileType
     * @param type
     * @param tpl
     * @private
     */

  }, {
    key: '_createFile',
    value: function _createFile(name, type, fileType, tpl) {
      _fsExtra2.default.outputFile(this._createFilePath(name, type, fileType), tpl, function (err) {
        if (err) console.log(err);
      });
    }

    /**
     *
     * @param dirPath
     * @param fileType
     * @param data
     * @private
     */

  }, {
    key: '_createDirectory',
    value: function _createDirectory(dirPath, data, fileTypes) {
      var _this = this;

      _fsExtra2.default.readdir(dirPath, function (err, dir) {
        var name = data.name;
        var folder = _path2.default.join(process.cwd(), name);
        var filePath = void 0;

        dir.forEach(function (tempFile) {
          var compiled = _this._compileTpl(dirPath + '/' + tempFile, data);
          var fileName = _this._createFileName(tempFile, name, fileTypes, data.postfix);

          filePath = _path2.default.join(folder, fileName);

          _fsExtra2.default.outputFile(filePath, compiled, function (err) {
            if (err) console.log(err);
          });
        });
      });
    }

    /**
     *
     * @param tempFile
     * @param name
     * @param fileTypes
     * @returns {*}
     * @private
     */

  }, {
    key: '_createFileName',
    value: function _createFileName(tempFile, name, fileTypes, postfix) {
      var newName = tempFile.replace(/temp/, name);

      if (newName.indexOf('tpl') > -1) {
        newName = newName.replace(/tpl./, '');
        newName = newName.replace(/extension/, fileTypes.html);
      }

      if (newName.indexOf('sty') > -1) {
        newName = newName.replace(/sty./, '');
        newName = newName.replace(/extension/, fileTypes.style);
      }

      if (newName.indexOf('script') > -1) {
        newName = newName.replace(/script./, '');
        newName = newName.replace(/extension/, fileTypes.script);
      }

      if (newName.indexOf('spec') > -1) {
        newName = newName.replace(/extension/, fileTypes.spec);
      }

      return newName;
    }

    /**
     *
     * @param type
     * @param extension
     * @returns {*}
     * @private
     */

  }, {
    key: '_getSingleTpl',
    value: function _getSingleTpl(type) {
      var extension = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'js';

      if (type === 'single') {
        return this.TEMPLATES_DIR + '/' + type + '/temp.vue';
      }
      return this.TEMPLATES_DIR + '/' + type + '/temp.' + type + '.' + extension;
    }

    /**
     *
     * @param type
     * @returns {*}
     * @private
     */

  }, {
    key: '_getDirPath',
    value: function _getDirPath(type) {
      return this.TEMPLATES_DIR + '/' + type;
    }

    /**
     *
     * @param name
     * @param type
     * @param fileType
     * @returns {*}
     * @private
     */

  }, {
    key: '_createFilePath',
    value: function _createFilePath(name, type, fileType) {
      if (type === 'single') {
        return _path2.default.join(process.cwd(), name + '.vue');
      }
      return _path2.default.join(process.cwd(), name + '.' + type + '.' + fileType);
    }
  }]);

  return TemplateGenerator;
}();

exports.default = TemplateGenerator;