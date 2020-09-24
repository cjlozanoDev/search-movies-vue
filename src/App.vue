<template>
  <div id="app">
    <AppHeader />
    <Home/>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import Home from '@/views/Home'

export default {
  name: 'App',
  components: {
    AppHeader,
    Home
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0
}
</style>
