<template>
  <div id="home" class="pa-4">
    <v-container fluid>
      <h3 class="headline font-weight-medium">Recommended</h3>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="video in videos"
          :key="video.id.videoId"
          class="mx-xs-auto"
        >
          <v-skeleton-loader type="card-avatar" :loading="loading">
            <!-- <video-card
              :card="{ maxWidth: 350 }"
              :video="video"
              :channel="channel"
            ></video-card> -->
            <v-card
              class="content-bg card mx-auto"
              max-width="350"
              flat
              tile
              router
              :to="`watch/${video.id.videoId}`"
            >
              <v-img
                :src="video.snippet.thumbnails.high.url"
                height="200px"
              ></v-img>
              <v-row no-gutters>
                <v-col cols="2">
                  <v-list-item class="pl-0 pt-3" router to="/channels/12">
                    <v-list-item-avatar color="grey darken-3">
                      <v-img
                        class="elevation-6"
                        src="https://randomuser.me/api/portraits/men/1.jpg"
                      ></v-img>
                    </v-list-item-avatar>
                  </v-list-item>
                </v-col>
                <v-col>
                  <v-card-title class="pl-2 pt-3 subtitle-1 font-weight-bold">
                    {{video.snippet.title}}
                  </v-card-title>

                  <v-card-subtitle class="pl-2 pb-0">
                    {{video.snippet.channelTitle}}
                  </v-card-subtitle>
                  <v-card-subtitle class="pl-2 pt-0">
                    9.6k views<v-icon>mdi-circle-small</v-icon>{{timeAgo.format(new Date(video.snippet.publishedAt))}}
                  </v-card-subtitle>
                </v-col>
              </v-row>
            </v-card>
          </v-skeleton-loader>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// import videoCard from '@/components/VideoCard'
import axios from "axios";
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

TimeAgo.addDefaultLocale(en)

// Create formatter (English).
// timeAgo: new TimeAgo('en-US')
// console.log(timeAgo.format(new Date("2021-07-12T20:09:00Z")));

export default {
  name: 'Home',
  data: () => ({
    loading: true,
    timeAgo: new TimeAgo('en-US'),
    video: {
      url: '/watch/12',
      thumb: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
      title: 'Top western road trips',
      views: '9.6k',
      createdAt: '6 hours ago'
    },
    channel: {
      url: '/channels/12',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    videos: null,
    channels: null
  }),
  components: {
    // videoCard
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 3000)
    axios
      .get(
        "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=siliconvalley&key=AIzaSyDeQSkZ24yzT1Fi_ecPzlw2CzxVwVw4A_U"
      )
      .then((response) => (this.videos = response.data.items))
      .then((data) => data.forEach(item=>{
        axios.get(
          `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${item.snippet.channelId}&key=AIzaSyDeQSkZ24yzT1Fi_ecPzlw2CzxVwVw4A_U`
          )
          .then((response) => (this.channels = response.data.items))
          .then(data=>console.log(data))
      }));
  }
}
</script>

<style lang="scss">
.card {
  background: #f9f9f9 !important;
}
</style>
