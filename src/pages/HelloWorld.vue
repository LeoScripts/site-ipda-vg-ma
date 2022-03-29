<template>
  <header>
    <Nav />
  </header>
  <v-container>
    <section>
      <h2>Cultos</h2>
      <div class="card-container">

        <div v-for="item in cultos" :key="item.dia">

          <card 
            :title="item.title" 
            :date="item.date" 
            :time="item.time"
            :img="item.img"
          />
        </div>
      </div>
    </section>
  <Form />
  </v-container>

  <Footer />
</template>

<script>
import Nav from "../components/Nav.vue";
import Card from "../components/Card.vue";
import Footer from "../components/Footer.vue";
import Form from "../components/Form.vue";

import a from "../assets/a.jpg"
import b from "../assets/b.png"
import c from "../assets/c.jpg"
import d from "../assets/d.jpg"
import e from "../assets/e.jpg"


export default {
  name: "HelloWorld",
  components: {
    Nav,
    Card,
    Footer,
    Form
  },
  data() {
    return {

      cultos:[
        {
          date:"terça-feira",
          title:"Culto de Dotrina",
          time:"19:00 hs",
          img:a
        },
                {
          date:"quarta-feira",
          title:"Culto das Senhoras",
          time:"19:00 hs",
          img: b
        },
                {
          date:"quinta-feira",
          title:"Culto de Oração",
          time:"19:00 hs",
          img:c
        },
                {
          date:"sabado",
          title:"Circulo de Oração",
          time:"7:30 hs",
          img:d
        },
                {
          date:"domingo",
          title:"Escola Biblica",
          time:"8:00 hs",
          img:e
        },
      ]
    };
  },
};
</script>

<style>
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}
</style>