<template>
  <v-card class="mx-auto overflow-hidden" height="400">
    <v-app-bar color="#FFF" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <img class="logo" :src="logo" alt="" />
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-Navigation</v-icon>
            </v-list-item-icon>
            <a href="https://goo.gl/maps/G4QuhrYgReZcb72v6" target="_blank">
              <v-list-item-title> <b>ENDEREÇO</b> </v-list-item-title>
            </a>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-Navigation</v-icon>
            </v-list-item-icon>
            <a href="mailto:ipdavgma@gmail.com" type="mailto" target="_blank">
              <v-list-item-title>EMAIL</v-list-item-title>
            </a>
          </v-list-item>

          <v-link></v-link>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-Navigation</v-icon>
            </v-list-item-icon>
            <a href="tel:+5598991005881" target="_blank">
              <v-list-item-title>TELEFONE</v-list-item-title>
            </a>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <slide />
  </v-card>
</template>

<script>
import logo from "../assets/logo.png";
import Slide from "./Slide.vue";

export default {
  name:"Nave",
  components: {
    Slide,
  },
  data: () => ({
    logo,
    drawer: false,
    group: null,
  }),
};
</script>

<style>

@media (max-width: 519px) {
  .logo {
    width: 80%;
  }
}

@media (min-width: 520px) {
  .logo {
    width: 70%;
  }
}

@media (min-width: 998px) {
  .logo {
    width: 25%;
  }
}
</style>