<template>
  <v-container>
      <v-row class="mx-5" no-gutters>
          <v-col class="px-1" cols="3" v-for="(video, index) in videos" :key="index">
              <v-card max-width="350" color="transparent" outlined>
                  <v-img class="white--text align end" :src="`https://image.tmdb.org/t/p/w500/${video.poster_path}`"> </v-img>
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
import myvideos from '../assets/data.json'
export default {
data: ()=>({
 
   videos: myvideos
 
}),
}
</script>

<style>

</style>