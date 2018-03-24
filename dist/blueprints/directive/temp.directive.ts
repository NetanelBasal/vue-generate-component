import Vue from 'vue';

export const {{(name.split('/')[name.split('/').length-1]) | pascalCase}}Directive
{

    function bind(el, binding, vnode)
    {

    }
    // When the bound element is inserted into the DOM...
    function inserted(el)
    {
        // el.focus();
    }

    function update()
    {

    }

    function unbind()
    {

    }
};

// You can also make it available globally.
Vue.directive('{{(name.split('/')[name.split('/').length-1]) | kebabCase}}', {{(name.split('/')[name.split('/').length-1]) | pascalCase}}Directive);