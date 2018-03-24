<template>
  <div class="{{(name.split('/')[name.split('/').length-1]) | kebabCase}}"> 
      <h1>{{(name.split('/')[name.split('/').length-1]) | kebabCase}}Component</h1>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  @Component({})
  export default class {{(name.split('/')[name.split('/').length-1]) | pascalCase}}Component extends Vue {

    mounted (){
      console.log('hello from app');
    }
    
  }

</script>

<style scoped lang="scss">
  .{{(name.split('/')[name.split('/').length-1]) | kebabCase}} {

  }
</style>
