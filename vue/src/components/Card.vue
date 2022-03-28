<template>
  <div class="card">
    <h2>Cultos Semanais</h2>
    <img class="img-card" width="200" :src=img alt="">
  </div>
</template>

<script>
  import img from '../assets/b.png'
  export default {
    name:'Card',
    components: {
      
    },
    data () {
      return {
        img
      }
    },
  }
</script>

<style>
  .card{
    border-radius: 0.5rem;
    padding: 1rem;
    box-shadow: 0 0 1rem 0 #ccc;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .img-card{
    width: 100%;
  }
</style>