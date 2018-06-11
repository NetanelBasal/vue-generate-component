/**
 * ComponentTpl
 */
class ComponentTpl {
  /**
   *
   * @param name - the component name
   */
  constructor( name, postfix ) {
    this.type = 'component';
    this.isDir = true;
    this.name = postfix ? `${name}.${postfix}` : name;
  }
}

export default ComponentTpl