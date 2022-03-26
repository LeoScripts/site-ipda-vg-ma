<template>
  <header>
    <img
      justify="space-between"
      width="400"
      :src="logo"
      alt="igreja pentecostal Deus e amor"
    />

    <v-menu left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </template>

      <v-list><v-list-item-title>asdf</v-list-item-title></v-list>
      <v-list><v-list-item-title>asdf</v-list-item-title></v-list>
      <v-list><v-list-item-title>asdf</v-list-item-title></v-list>
    </v-menu>
  </header>
</template>
<script>
import logo from "../assets/logo.png";

export default {
  data() {
    return {
      logo,
      drawer: false,
      group: null,
    };
  },

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
</style>