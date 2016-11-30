#! /usr/bin/env node
import commandLineArgs from 'command-line-args';
import swig from 'swig';
import path from 'path';
import TemplateFactory from './TemplateFactory';
import fs from 'fs';
import config from './config/config';
import cliOptions from './config/cli-options'
import swigFilters from './config/swig-filters';
const cli = commandLineArgs(cliOptions);

swigFilters(swig);
const options = cli.parse().options;

/* ===============
 Ask for help
 =============== */
if( options.help ) {
  console.log(cli.getUsage(cli));
}

/* ===============
 Set the file extensions
 =============== */
if( options.html || options.style ) {
  let configData = config.getConfigFile();
  configData.filesType.html = options.html ? options.html : configData.filesType.html;
  configData.filesType.style = options.style ? options.style : configData.filesType.style;
  config.updateConfigFile(configData);
}

TemplateFactory.createTemplateFor(options);