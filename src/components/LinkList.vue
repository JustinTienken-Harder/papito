<template>
  <ul class="center">
    <li v-for="(nav, index) in navData" :key="index">
      <a :href="nav.navUrl">{{ nav.navText }}</a>
    </li>
  </ul>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

defineProps(["navData"]);
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";

.center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 40vw;
  height: 50vh;
}

li {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  list-style-type: none;
  background-color: white;
  transition: box-shadow 0 -1px 5px black;
  transition: margin 0;
  transition-duration: 0.8s;
  margin: 0.1rem 0.1rem;
  &:hover {
    box-shadow: 0 0 0.5rem -0.2rem black;
    margin: 0.5rem 0 0.5rem 0;
  }

  a {
    color: $color-primary-dark;
    display: block;
    text-decoration: none;
    padding: 1rem;
    font-size: 1.6rem;
  }
}

@media (max-width: 320px) {
  .center {
    width: 80vw;
    a {
      font-size: 1.2rem;
    }
    li {
      margin: 0.1rem 0.1rem;
    }
  }
}
</style>
