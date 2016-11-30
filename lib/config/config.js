import fs from 'fs';

export default {
  /**
   * ovveride the default config
   */
    updateConfigFile( config ) {
    let content = JSON.stringify(config, null, 2);
    fs.writeFileSync(`${__dirname}/config.json`, content, 'utf8');
  },
  /**
   * get the config json as js object
   */
    getConfigFile() {
    let config = fs.readFileSync(`${__dirname}/config.json`, 'utf8');
    return JSON.parse(config);
  }
}