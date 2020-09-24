<template>
  <div class="app-header">
    <span class="app-header__title"> Buscador películas imdb </span>
    <div class="app-header__nav">
      <a class="app-header__link" href="#" @click.prevent="goTo()"> Home </a>
      <a class="app-header__link" href="#" @click.prevent="goTo()"> Contacto </a>
      <a class="app-header__link" href="#" @click.prevent="goTo()"> Legal </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
  .app-header {
     background-color: #121212;
     color: #F5C518;
     padding: 10px
  }
  .app-header__title {
    font-size: 2em;
  }
  .app-header__nav {
    padding: 1rem;
    display: flex;
    justify-content: space-around;
  }
  .app-header__link {
    text-decoration: none;
    color: inherit !important;
  }
</style>