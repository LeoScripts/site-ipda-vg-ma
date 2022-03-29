<template>
  <v-app>
    <v-main>
      <HelloWorld/>
      <Nav />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './pages/HelloWorld.vue'
export default {
  name: 'App',

  components: {
    HelloWorld,
  
  },

  data: () => ({
    //
  }),
}
</script>
