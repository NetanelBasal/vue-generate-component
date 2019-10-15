<template lang="{{filesType.html}}">
{% if filesType.html === 'jade' || filesType.html === 'pug' %}
  section(class="{{name | kebabCase}}")
    h1 {{name | kebabCase}} Component
{% else %}
  <section class="{{name | kebabCase}}">
    <h1>{{name | kebabCase}} Component</h1>
  </section>
{% endif %}
</template>

<script lang="{{ filesType.script }}">
{% if filesType.script !== 'ts' %}
  export default  {
    name: '{{name | kebabCase}}',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}

{% else %}
  import {Component, Vue} from "vue-property-decorator";

  @Component({
    components: []
  })
  export default class {{ name | PascalCase }} extends Vue {


  }
{% endif %}
</script>

<style scoped lang="{{ filesType.style }}">
  .{{name | kebabCase}} {

  }
</style>
