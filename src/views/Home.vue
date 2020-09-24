<template>
  <div class="home">
    <Seacher @movies-found="moviesFound"/>
    <ListMovies :list-movies="movies"/>
    <div v-if="searchUsed && !movies">
      <h1> No se ha podido encontrar ninguna película con su búsqueda,
        inténtelo de nuevo por favor </h1>
    </div>
  </div>
</template>

<script>
import Seacher from '@/components/Seacher'
import ListMovies from '@/components/ListMovies'
export default {
  name: 'Home',
  components: {
    Seacher,
    ListMovies
  },
  data() {
    return {
      movies: [],
      searchUsed: false
    }
  },
  methods: {
    moviesFound(movies) {
      this.movies = movies
      this.searchUsed = true
    }
  }
}
</script>

<style scoped>
  .home {
    padding: 2rem;
  }
</style>
