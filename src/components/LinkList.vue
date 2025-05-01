<template>
  <ul>
    <li v-for="(nav, index) in navData" :key="index">
      <a :href="nav.navUrl">{{ nav.navText }}</a>
    </li>
  </ul>
</template>

<script setup>
defineProps(["navData"]);
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";
li {
  list-style-type: none;
  background-color: white;
  transition: box-shadow 0 -1px 5px black;
  transition: margin 0;
  transition-duration: 0.8s;
  &:hover {
    box-shadow: 0 0 0.5rem -0.2rem black;
    margin: 0.3rem 0 0.3rem 0;
  }

  a {
    color: $color-primary-dark;
    display: block;
    text-decoration: none;
    padding: 1rem;
    font-size: 1.5rem;
  }
}
</style>
