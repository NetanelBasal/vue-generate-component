<template>
  <section class="{{name | kebabCase}}">
    <h1>{{name | kebabCase}} Component</h1>
  </section>
</template>

<script>
  export default  {
    name: '{{name | kebabCase}}',
    props: [],
    mounted() {
      
    },
    data() {
      return {
        
      }
    },
    methods: {
    
    },
    computed: {

    }
}
</script>

<style scoped>
  .{{name | kebabCase}} {

  }
</style>