<template>
  <div id="search">
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="12" md="10" lg="11">
          <div v-for="video in videos" :key="video.id.videoId" class="mb-5">
            <v-skeleton-loader
              class="mx-auto"
              type="list-item-avatar-three-line"
              :loading="loading"
              tile
              large
            >
              <v-card class="card mb-10" tile flat v-if="video.id.channelId">
                <v-row no-gutters justify="center">
                  <v-col cols="10" sm="10" md="3" lg="3" class="d-flex">
                    <!-- <v-responsive max-height="100%"> -->
                    <v-avatar size="130" max-width="150" class="mx-auto">
                      <v-img
                        class="align-center"
                        :src="video.snippet.thumbnails.high.url"
                      >
                      </v-img>
                    </v-avatar>
                    <!-- </v-responsive> -->
                  </v-col>
                  <v-col cols="10" sm="10" md="6" lg="6" class="justify-center">
                    <!-- <div class="ml-2"> -->
                    <v-card-title
                      class="pl-2 pt-0 subtitle-1 font-weight-bold align-center"
                    >
                      {{video.snippet.title}}
                    </v-card-title>

                    <v-card-subtitle
                      class="pl-2 pt-2 pb-0"
                      style="line-height: 1.2"
                    >
                      2.1M subscribers<v-icon>mdi-circle-small</v-icon>700
                      videos
                    </v-card-subtitle>
                    <v-card-subtitle class="pl-2 pt-2 pb-0">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Fugiat consequatur rerum id nulla, iure beatae atque
                    </v-card-subtitle>
                    <!-- </div> -->
                  </v-col>
                  <v-col cols="10" sm="10" md="3" lg="3">
                    <v-btn class="red white--text mt-6" tile depressed
                      >Subscribed</v-btn
                    >
                    <v-btn icon class="ml-5 mt-6"
                      ><v-icon>mdi-bell</v-icon></v-btn
                    >
                  </v-col>
                </v-row>
              </v-card>
              <v-card class="card mb-10" tile flat v-else>
                <v-row no-gutters>
                  <v-col cols="5" sm="3" md="3" lg="3">
                    <!-- <v-responsive max-height="100%"> -->
                    <v-img
                      class="align-center"
                      :src="video.snippet.thumbnails.high.url"
                    >
                    </v-img>
                    <!-- </v-responsive> -->
                  </v-col>
                  <v-col cols="7" sm="7" md="8" lg="8">
                    <div class="ml-2">
                      <v-card-title
                        class="pl-2 pt-0 subtitle-1 font-weight-bold"
                      >
                        {{video.snippet.title}}
                      </v-card-title>

                      <v-card-subtitle
                        class="pl-2 pt-2 pb-0"
                        style="line-height: 1.2"
                      >
                        {{video.snippet.channelTitle}}<br />
                        9.6k views<v-icon>mdi-circle-small</v-icon>6 hours ago
                      </v-card-subtitle>
                      <v-card-subtitle class="pl-2 pt-2 pb-0">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Fugiat consequatur rerum id nulla, iure beatae
                        atque
                      </v-card-subtitle>
                    </div>
                  </v-col>
                </v-row>
              </v-card>
            </v-skeleton-loader>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    loading: true,
    videos: null
  }),
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 3000);

    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${this.$route.query.q}&maxResults=10&key=AIzaSyDeQSkZ24yzT1Fi_ecPzlw2CzxVwVw4A_U`
      )
      .then((response) => (this.videos = response.data.items))
      .then((data) => console.log(data));
  }
}
</script>

<style></style>
