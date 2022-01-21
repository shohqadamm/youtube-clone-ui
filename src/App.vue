<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #333;
}
 
::-webkit-scrollbar-thumb {
  background: #4a4a4a;
  border-radius: 3px;
}

</style>