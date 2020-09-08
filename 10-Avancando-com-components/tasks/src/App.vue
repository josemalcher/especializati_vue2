<template>
  <div id="app">
    <ListTasks></ListTasks>
  </div>
</template>

<script>
import ListTasks from "./components/Taks/ListTasks";
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    ListTasks
  }
}
</script>

<style>

</style>
