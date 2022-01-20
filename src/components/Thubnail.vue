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
},

    ]
})
}
</script>

<style>

</style>