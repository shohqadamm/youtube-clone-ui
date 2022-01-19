<template>
<div>
<sidebar />
  <navbar />
</div>
 
</template>

<script>
// import Navbar from "../components/Navbar";
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/Sidebar.vue';

export default {
  name: "Home",

  components: {
    Navbar,
    Sidebar
  },
};
</script>
