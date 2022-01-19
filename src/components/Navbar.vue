<template>
  <div>
    <v-app-bar
      color="dark"
      dense
      dark
      fixed
      flat
    height="56"
    clipped-left app
    >
      <v-app-bar-nav-icon @click="onClick"></v-app-bar-nav-icon>
<v-btn text >
  <img src="../assets/YouTube-Logo.wine.svg" alt="YouTube" width="150">
</v-btn>
      <!-- <v-toolbar-title>Youtube</v-toolbar-title> -->

      <v-spacer></v-spacer>
<SearchBar />
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-video-plus</v-icon>
      </v-btn>


  <v-btn icon>
        <v-icon>mdi-view-grid</v-icon>
      </v-btn>
        <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
       <v-avatar
                  size="36px"
                >
                  <img
                    
                    alt="Avatar"
                    src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                  >
                 
                </v-avatar>
    </v-app-bar>
  </div>
</template>
<script>
import SearchBar from './SearchBar.vue';
export default {
  name: "Navbar",
  components: {
    SearchBar
  },

  data: ()=>({

  }),

 
  
};
</script>
