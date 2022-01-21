<template>
  <v-container>
      <v-row class="mx-5" no-gutters>
          <v-col class="px-1" cols="3" v-for="(movie, index) in movies" :key="index">
              <v-card max-width="350" color="transparent" outlined>
                  <v-img class="white--text align end" :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"> </v-img>
                  <v-card-text class="text--primary">
                      <div class="font-weight-bold">
{{movie.title.slice(0,25)}} 
                      </div>

                       <div class="text--secondary">
{{video.author_name}}
                      </div>

                       <div class="text--secondary">
{{video.views}}
                      </div>
                  </v-card-text>
              </v-card>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
data: function(){
return { movies:[],}
},
  async fetch(){
    if(this.searchInput === ''){
      await this.getmovies()
      return
    }
  },
    fetchDelay: 1000,
  methods: {
    async getmovies(){
      const data = axios.get(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=b8a7c2b3c1891a4f2e697f3983ed0d2e'
      )
      const result = await data
      result.data.results.forEach((movie) => {
        this.movies.push(movie)
      });
      console.log('asdf');
    },
    get(){
      console.log(movies)
    }  },
}
</script>

<style>

</style>