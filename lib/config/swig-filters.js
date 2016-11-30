import _ from 'lodash';

export default ( swig ) => {
  /* ===============
   Swig filters
   =============== */
  swig.setFilter('kebabCase', function( input ) {
    return _.kebabCase(input);
  });

  swig.setFilter('camelCase', function( input ) {
    return _.capitalize(_.camelCase(input));
  });

  swig.setFilter('camelCaseOnly', function( input ) {
    return _.camelCase(input);
  });

  swig.setFilter('upperCase', function( input ) {
    return input.toUpperCase();
  });

}
