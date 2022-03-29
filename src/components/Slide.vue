<template>
  <v-container>
    <v-carousel
      cycle
      height="380"
      hide-delimiter-background
      show-arrows-on-hover
      color="#555"
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%" width="100%">
          <v-row
            class="fill-height"
            align="center"
            justify="center"
            width="100%"
          >
            <img width="1200" height="400" :src="slide" class="text-h2" />
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
import a from "../assets/a.jpg";
import b from "../assets/b.png";
import c from "../assets/c.jpg";
import d from "../assets/d.jpg";
import e from "../assets/e.jpg";

export default {
  name: "Slide",

  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: [a, b, c, d, e],
    };
  },
};
</script>