<template>
  <div class="detail-movie">
    <div class="detail-movie__container">
      <md-card class="detail-movie__container__card">
        <md-card-media>
          <img :src="movie.Poster" alt="movie">
        </md-card-media>

        <md-card-header>
          <div class="md-title">{{ movie.Title }}</div>
          <div class="md-subhead">{{ movie.Year }}</div>
        </md-card-header>
      </md-card>
      <div class="detail-movie__info">
        <div class="detail-movie__info__block">
          <span class="detail-movie__info__block__label"> Director: </span>
          <span> {{movie.Director}}</span>
        </div>
        <div class="detail-movie__info__block">
          <span class="detail-movie__info__block__label"> Actores: </span>
          <span> {{movie.Actors}}</span>
        </div>
        <div class="detail-movie__info__block">
          <span class="detail-movie__info__block__label"> Pais: </span>
          <span> {{movie.Country}}</span>
        </div>
        <div class="detail-movie__info__block">
          <span class="detail-movie__info__block__label"> Guionistas: </span>
          <span> {{movie.Writer}}</span>
        </div>
        <div class="detail-movie__info__block">
          <span class="detail-movie__info__block__label"> Puntuación IMB: </span>
          <span> {{movie.imdbRating}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailMovie',
  created() {
    const idMovie = 'tt2975590'
    const API_KEY = process.env.VUE_APP_API_KEY
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${idMovie}`)
    .then(data => data.json())
    .then(data => {
       this.movie = data
    })
  },
  data() {
    return {
      movie: {}
    }
  }
}
</script>
<style scoped>
  .detail-movie__container {
    display: flex;
  }
  .detail-movie__container__card {
     min-width: 400px;
  }
  .detail-movie__info {
    text-align: left;
    margin-left: 40px;
    font-size: 1.5em;
  }
  .detail-movie__info__block {
    margin-bottom: 15px;
  }
  .detail-movie__info__block__label {
    font-weight: bold;
  }
</style>