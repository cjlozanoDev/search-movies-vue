<template>
  <div class="seacher">
  <div class="seacher__input">
    <md-field>
       <label>Escribe una película aquí</label>
       <md-input v-model="nameMovie"/>
       <span class="md-helper-text">Usa el buscador para encontrar una película</span>
    </md-field>
   </div>   
   <md-button 
     @click="searchMovies"
     class="md-raised">Buscar</md-button> 
  </div>
</template>

<script>
export default {
  name: 'Seacher',
  data() {
    return {
      nameMovie: ''
    }
  },
  methods: {
    searchMovies() {
      const API_KEY = process.env.VUE_APP_API_KEY
      fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${this.nameMovie}`)
      .then(data => data.json())
      .then(data => {
         this.$emit('movies-found', data.Search)
      })
    }
  }
}
</script>

<style scoped>
  .seacher {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .seacher__input {
    width: 300px;
  }
</style>