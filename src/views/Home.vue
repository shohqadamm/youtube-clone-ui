<template>
<div>
<sidebar />
  <navbar />
  <chips />
  <thubnail />
</div>
 
</template>

<script>
import Chips from '../components/Chips.vue';
// import Navbar from "../components/Navbar";
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/Sidebar.vue';
import Thubnail from '../components/Thubnail.vue';

export default {
  name: "Home",

  components: {
    Navbar,
    Sidebar,
    Chips,
    Thubnail
  },
};
</script>
