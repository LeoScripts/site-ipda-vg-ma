<template>
  <header>
      <Nav />
  </header>
  <v-container>

    <div class="card-container">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>

  </v-container>

</template>

<script>
  import Nav from './Nav.vue'
  import Card from './Card.vue'
  

  export default {
    name:'HelloWorld',
    components: {
      Nav,
      Card

    },
    data () {
      return {
        
      }
    },
  }
</script>

<style>
  .card-container{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px,1fr));
    gap: 20px;
  }
</style>