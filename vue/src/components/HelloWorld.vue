<template>
  <header>
      <Nav />
  </header>
  <v-container>

  <section>
    <h2>Cultos</h2>
    <div class="card-container">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </section>
  </v-container>
  <Footer />
  

</template>

<script>
  import Nav from './Nav.vue'
  import Card from './Card.vue'
  import Footer from './Footer.vue'
  

  export default {
    name:'HelloWorld',
    components: {
      Nav,
      Card,
      Footer

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