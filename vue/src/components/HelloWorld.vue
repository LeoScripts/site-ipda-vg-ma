<template>
  <header>
      <Nav />

  </header>
  <v-container>



  </v-container>

</template>

<script>
  import Nav from './Nav.vue'
  

  export default {
    name:'HelloWorld',
    components: {
      Nav
    },
    data () {
      return {
        
        
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      }
    },
  }
</script>