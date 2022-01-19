<template>
  <v-row>
      <v-text-field label="search" dense background-color="primaryDarker" hide-details="" solo >

      </v-text-field>
      <v-btn>
          <v-icon dark depressed height="40" class="btn-search">
              mdi-magnify
          </v-icon>
      </v-btn>
  </v-row>
</template>

<script>
export default {
name: 'SearchBar'
}
</script>

<style>

</style>