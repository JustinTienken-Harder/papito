<template>
  <div class="center"><LinkList :nav-data="homeNavigation" /></div>
</template>

<script setup>
import { homeNav } from "../utils/mainNavData.js";
import LinkList from "../components/LinkList.vue";
import { ref } from "vue";
const homeNavigation = ref(homeNav);
defineProps({
  navData: Object,
});

console.log(homeNavigation);
</script>

<style type="scss">
.center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 40vw;
  height: 50vh;
}
</style>
