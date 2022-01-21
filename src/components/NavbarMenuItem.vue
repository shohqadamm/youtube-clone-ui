<template>
  
       <v-list-item>
          <v-list-item-title><v-btn> <v-icon>{{icon}}</v-icon> {{title}}</v-btn></v-list-item-title>
        </v-list-item>
  
</template>

<script>
export default {
props:{
    icon: String,
    title: String,
}
}
</script>

<style>

</style>