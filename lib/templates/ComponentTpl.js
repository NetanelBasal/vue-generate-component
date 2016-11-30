/**
 * ComponentTpl
 */
class ComponentTpl {
  /**
   *
   * @param name - the component name
   */
  constructor( name ) {
    this.type = 'component';
    this.isDir = true;
    this.name = name;
  }
}

export default ComponentTpl