<template>
  <v-container>
      <v-row class="mx-5" no-gutters>
          <v-col class="px-1" cols="3" v-for="(video, index) in videos" :key="index">
              <v-card max-width="350" color="transparent" outlined>
                  <v-img class="white--text align end" :src="video.thumbnail_url"> </v-img>
                  <v-card-text class="text--primary">
                      <div class="font-weight-bold">
{{video.title}}
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
data:()=>({
    videos:[
        {
  "html": "<iframe width=\"480\" height=\"270\" src=\"https://www.youtube.com/embed/ojCkgU5XGdg?feature=oembed\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>",
  "title": "Creativity and Drugs (Eng Sub)",
  "thumbnail_height": 360,
  "provider_name": "YouTube",
  "author_url": "https://www.youtube.com/user/serebniti",
  "thumbnail_width": 480,
  "height": 270,
  "provider_url": "https://www.youtube.com/",
  "type": "video",
  "width": 480,
  "version": "1.0",
  'views': 100,
  "author_name": "serebniti",
  "thumbnail_url": "https://i.ytimg.com/vi/ojCkgU5XGdg/hqdefault.jpg"
},
{
  "html": "<iframe width=\"480\" height=\"270\" src=\"https://www.youtube.com/embed/ojCkgU5XGdg?feature=oembed\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>",
  "title": "Creativity and Drugs (Eng Sub)",
  "thumbnail_height": 360,
  "provider_name": "YouTube",
  "author_url": "https://www.youtube.com/user/serebniti",
  "thumbnail_width": 480,
  "height": 270,
  "provider_url": "https://www.youtube.com/",
  "type": "video",
  "width": 480,
  "version": "1.0",
  'views': 100,
  "author_name": "serebniti",
  "thumbnail_url": "https://i.ytimg.com/vi/ojCkgU5XGdg/hqdefault.jpg"
},
{
  "html": "<iframe width=\"480\" height=\"270\" src=\"https://www.youtube.com/embed/ojCkgU5XGdg?feature=oembed\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>",
  "title": "Creativity and Drugs (Eng Sub)",
  "thumbnail_height": 360,
  "provider_name": "YouTube",
  "author_url": "https://www.youtube.com/user/serebniti",
  "thumbnail_width": 480,
  "height": 270,
  "provider_url": "https://www.youtube.com/",
  "type": "video",
  "width": 480,
  "version": "1.0",
  'views': 100,
  "author_name": "serebniti",
  "thumbnail_url": "https://i.ytimg.com/vi/ojCkgU5XGdg/hqdefault.jpg"
},
{
  "html": "<iframe width=\"480\" height=\"270\" src=\"https://www.youtube.com/embed/ojCkgU5XGdg?feature=oembed\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>",
  "title": "Creativity and Drugs (Eng Sub)",
  "thumbnail_height": 360,
  "provider_name": "YouTube",
  "author_url": "https://www.youtube.com/user/serebniti",
  "thumbnail_width": 480,
  "height": 270,
  "provider_url": "https://www.youtube.com/",
  "type": "video",
  "width": 480,
  "version": "1.0",
  'views': 100,
  "author_name": "serebniti",
  "thumbnail_url": "https://i.ytimg.com/vi/ojCkgU5XGdg/hqdefault.jpg"
},
{
  "html": "<iframe width=\"480\" height=\"270\" src=\"https://www.youtube.com/embed/ojCkgU5XGdg?feature=oembed\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>",
  "title": "Creativity and Drugs (Eng Sub)",
  "thumbnail_height": 360,
  "provider_name": "YouTube",
  "author_url": "https://www.youtube.com/user/serebniti",
  "thumbnail_width": 480,
  "height": 270,
  "provider_url": "https://www.youtube.com/",
  "type": "video",
  "width": 480,
  "version": "1.0",
  'views': 100,
  "author_name": "serebniti",
  "thumbnail_url": "https://i.ytimg.com/vi/ojCkgU5XGdg/hqdefault.jpg"
},
{
  "html": "<iframe width=\"480\" height=\"270\" src=\"https://www.youtube.com/embed/ojCkgU5XGdg?feature=oembed\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>",
  "title": "Creativity and Drugs (Eng Sub)",
  "thumbnail_height": 360,
  "provider_name": "YouTube",
  "author_url": "https://www.youtube.com/user/serebniti",
  "thumbnail_width": 480,
  "height": 270,
  "provider_url": "https://www.youtube.com/",
  "type": "video",
  "width": 480,
  "version": "1.0",
  'views': 100,
  "author_name": "serebniti",
  "thumbnail_url": "https://i.ytimg.com/vi/ojCkgU5XGdg/hqdefault.jpg"
},
{
  "html": "<iframe width=\"480\" height=\"270\" src=\"https://www.youtube.com/embed/ojCkgU5XGdg?feature=oembed\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>",
  "title": "Creativity and Drugs (Eng Sub)",
  "thumbnail_height": 360,
  "provider_name": "YouTube",
  "author_url": "https://www.youtube.com/user/serebniti",
  "thumbnail_width": 480,
  "height": 270,
  "provider_url": "https://www.youtube.com/",
  "type": "video",
  "width": 480,
  "version": "1.0",
  'views': 100,
  "author_name": "serebniti",
  "thumbnail_url": "https://i.ytimg.com/vi/ojCkgU5XGdg/hqdefault.jpg"
},{
  "html": "<iframe width=\"480\" height=\"270\" src=\"https://www.youtube.com/embed/ojCkgU5XGdg?feature=oembed\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>",
  "title": "Creativity and Drugs (Eng Sub)",
  "thumbnail_height": 360,
  "provider_name": "YouTube",
  "author_url": "https://www.youtube.com/user/serebniti",
  "thumbnail_width": 480,
  "height": 270,
  "provider_url": "https://www.youtube.com/",
  "type": "video",
  "width": 480,
  "version": "1.0",
  'views': 100,
  "author_name": "serebniti",
  "thumbnail_url": "https://i.ytimg.com/vi/ojCkgU5XGdg/hqdefault.jpg"
},{
  "html": "<iframe width=\"480\" height=\"270\" src=\"https://www.youtube.com/embed/ojCkgU5XGdg?feature=oembed\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>",
  "title": "Creativity and Drugs (Eng Sub)",
  "thumbnail_height": 360,
  "provider_name": "YouTube",
  "author_url": "https://www.youtube.com/user/serebniti",
  "thumbnail_width": 480,
  "height": 270,
  "provider_url": "https://www.youtube.com/",
  "type": "video",
  "width": 480,
  "version": "1.0",
  'views': 100,
  "author_name": "serebniti",
  "thumbnail_url": "https://i.ytimg.com/vi/ojCkgU5XGdg/hqdefault.jpg"
},{
  "html": "<iframe width=\"480\" height=\"270\" src=\"https://www.youtube.com/embed/ojCkgU5XGdg?feature=oembed\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>",
  "title": "Creativity and Drugs (Eng Sub)",
  "thumbnail_height": 360,
  "provider_name": "YouTube",
  "author_url": "https://www.youtube.com/user/serebniti",
  "thumbnail_width": 480,
  "height": 270,
  "provider_url": "https://www.youtube.com/",
  "type": "video",
  "width": 480,
  "version": "1.0",
  'views': 100,
  "author_name": "serebniti",
  "thumbnail_url": "https://i.ytimg.com/vi/ojCkgU5XGdg/hqdefault.jpg"
},{
  "html": "<iframe width=\"480\" height=\"270\" src=\"https://www.youtube.com/embed/ojCkgU5XGdg?feature=oembed\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>",
  "title": "Creativity and Drugs (Eng Sub)",
  "thumbnail_height": 360,
  "provider_name": "YouTube",
  "author_url": "https://www.youtube.com/user/serebniti",
  "thumbnail_width": 480,
  "height": 270,
  "provider_url": "https://www.youtube.com/",
  "type": "video",
  "width": 480,
  "version": "1.0",
  'views': 100,
  "author_name": "serebniti",
  "thumbnail_url": "https://i.ytimg.com/vi/ojCkgU5XGdg/hqdefault.jpg"
},
{
  "html": "<iframe width=\"480\" height=\"270\" src=\"https://www.youtube.com/embed/ojCkgU5XGdg?feature=oembed\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>",
  "title": "Creativity and Drugs (Eng Sub)",
  "thumbnail_height": 360,
  "provider_name": "YouTube",
  "author_url": "https://www.youtube.com/user/serebniti",
  "thumbnail_width": 480,
  "height": 270,
  "provider_url": "https://www.youtube.com/",
  "type": "video",
  "width": 480,
  "version": "1.0",
  'views': 100,
  "author_name": "serebniti",
  "thumbnail_url": "https://i.ytimg.com/vi/ojCkgU5XGdg/hqdefault.jpg"
},

    ]
}),
  methods: {
    async getmovies(){
      const data = axios.get(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=b8a7c2b3c1891a4f2e697f3983ed0d2e'
      )
      const result = await data
      result.data.results.forEach((movie) => {
        this.movies.push(movie)
      });
      console.log('hi');
    },
    async searchMovies(){
      const data = axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=b8a7c2b3c1891a4f2e697f3983ed0d2e&language=en-US&page=1&query=${this.searchInput}`
      )
      const result = await data
        result.data.results.forEach((movie) => {
        this.searchedMovies.push(movie)
      })
    },
    clearSearch(){
      this.searchInput = ''
      this.searchedMovies = []
    }
  },
}
</script>

<style>

</style>