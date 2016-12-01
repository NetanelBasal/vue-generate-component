/**
 * SingleTpl
 */
class SingleTpl {
  /**
   *
   * @param name - the single name
   */
  constructor( name, isDir ) {
    this.type = 'single';
    this.name = name;
    this.isDir = isDir;
  }
}

export default SingleTpl