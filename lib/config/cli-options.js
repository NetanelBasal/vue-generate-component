'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [{
  name: 'help',
  type: Boolean,
  group: "options",
  description: 'help'
},{
  name: 'component',
  alias: 'c',
  type: String,
  group: "options",
  description: 'generate Vue js component',
  defaultOption: true
}, {
  name: 'directive',
  alias: 'd',
  type: String,
  group: "options",
  description: 'generate Vue js directive'
}, {
  name: 'single',
  alias: 's',
  type: String,
  group: "options",
  description: 'generate Vue js component single file'
},{
  name: 'pipe',
  alias: 'p',
  type: String,
  group: "options",
  description: 'generate Vue js pipe'
},{
  name: 'folder',
  alias: 'f',
  type: Boolean,
  group: "options",
  description: 'generate Vue js component single file inside new folder'
}];