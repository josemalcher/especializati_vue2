<template>
  <div id="app" class="comp">
   <teste-component></teste-component>
    <hr>
    <form-component></form-component>
    <hr>
    <TaskComponents></TaskComponents>
  </div>
</template>

<script>

import TesteComponent from './components/TesteComponent'
import FormComponent from "./components/FormComponent";
import TaskComponents from "./components/TaskComponents";


export default {
  name: 'app',
  data () {
    return {
      msg: 'OLá Mundo!'
    }
  },
  components:{
    TesteComponent,
    FormComponent,
    TaskComponents
  }
}
</script>

<style>

.comp{
  border: 1px solid blue;
  margin: 5px;
  padding: 5px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
