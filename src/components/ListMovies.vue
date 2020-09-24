<template>
  <div class="list-movies">
     <div class="list-movies__container-cards">
       <CardMovie
         v-for="(movie, index) in listMovies"
         :movie="movie"
         :key="index"/>
     </div>
  </div>
</template>

<script>
import CardMovie from './CardMovie'

export default {
  name: 'ListMovies',
  components: {
    CardMovie
  },
  props: {
    listMovies: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
  .list-movies__container-cards {
     display: flex;
     flex-wrap: wrap;
     justify-content: space-between;
     margin-top: 40px
  }
</style>