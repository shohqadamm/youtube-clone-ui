<template>
  <div>
      <v-btn>
        <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="dark"
          dark
          v-bind="attrs"
          v-on="on"
        >
            <v-icon>{{headIcon}}</v-icon>
        </v-btn>
      </template>
      <v-list>
       <navbar-menu-item>{{title}}</navbar-menu-item>
      </v-list>
    </v-menu>
    </v-btn>
  </div>
</template>

<script>
import NavbarMenuItem from './NavbarMenuItem.vue'
export default {
  components: { NavbarMenuItem },
props:{
    headIcon: String,
    icon: String,
    title: String,
}
}
</script>

<style>

</style>