<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <TasksComponents :title="'Título no APP'" :items="['lavar', 'cozinhar', 'passar']"></TasksComponents>
  </div>
</template>

<script>

import TasksComponents from "./components/TasksComponents";

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    TasksComponents
  }
}
</script>

<style>
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
