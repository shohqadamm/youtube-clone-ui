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

      
<navbar-menu title="Upload" icon="mdi-upload-outline" headIcon="mdi-video-plus-outline"></navbar-menu>
<navbar-menu headIcon="mdi-view-grid"></navbar-menu>
<navbar-menu headIcon="mdi-bell"></navbar-menu>
     

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
import NavbarMenu from './NavbarMenu.vue';
import SearchBar from './SearchBar.vue';
export default {
  name: "Navbar",
  components: {
    SearchBar,
    NavbarMenu
  },

  data:()=>({
      drawer: true,
      toggler: true,

      // showFullDrawer: false
    
  }),

    methods:{
    onClick(){
      if(this.videoIsPlaying){
        this.$store.commit('toggleShowDrawer', !this.showDrawer)
      }else{
        this.$store.commit('toggleShowFullDrawer', !this.showDrawer)

      }
    }
  }
  
};
</script>
