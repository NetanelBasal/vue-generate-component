import Vue from 'vue';

export const {{(name.split('/')[name.split('/').length-1]) | pascalCase}} = function (value) {
    return value;
};

Vue.filter('{{(name.split('/')[name.split('/').length-1]) | kebabCase}}', {{(name.split('/')[name.split('/').length-1]) | pascalCase}});
