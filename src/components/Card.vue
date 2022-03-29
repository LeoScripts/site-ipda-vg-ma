<template>
  <div class="card">
    <strong>{{title}}</strong>

    <div>
      <p>{{date}}</p>
      <p>{{time}}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: "Card",
  props:{
    title: String,
    img: String,
    date: String,
    time: String
  },
  data() {
    return {
    };
  },
};
</script>

<style>
.card {
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 0 1rem 0 #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #313d86;
}

.img-card {
  width: 70%;
}
</style>