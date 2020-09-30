<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link :to="{name:'products'}">Produtos</router-link>
    <router-link :to="{name: 'task', params: {id: 3}}">Tarefas</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>

</style>
