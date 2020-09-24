<template>
  <div>
    <md-card class="card">
      <md-card-media>
        <img :src="movie.Poster" alt="movie">
      </md-card-media>

      <md-card-header>
        <div class="md-title">{{ movie.Title }}</div>
        <div class="md-subhead">{{ movie.Year }}</div>
      </md-card-header>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'CardMovie',
  props: {
    movie: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>
 .card {
    width: 300px;
 }
</style>