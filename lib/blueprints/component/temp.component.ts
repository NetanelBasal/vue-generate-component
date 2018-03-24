import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class {{(name.split('/')[name.split('/').length-1]) | pascalCase}}Component extends Vue {

  mounted (){
    console.log('hello from app');
  }
  
}

