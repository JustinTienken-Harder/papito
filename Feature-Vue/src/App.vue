<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue'

// export default {
//   data() {
//     return {
//       logolocation: logoImg
//     }
//   },
//   components: {
//     Logo,
//     Footer
//   }
// }
</script>

<template>
  <div id="app">
    <header id="navBar">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

      <nav class="navigation">
        <RouterLink class="route-link" to="/">Home</RouterLink>
        <RouterLink class="route-link" to="/about">About</RouterLink>
      </nav>
    </header>
    <main>
      <RouterView />
    </main>
    <Footer class="flex-style">
      <ul class="flex-box">
        <li><a href="https://papito-paul.blogspot.com/" target="_blank">papito-paul.blogspot.com</a></li>
        <li><a href="https://github.com/JustinTienken-Harder" target="_blank">Github: JustinTienken-Harder</a></li>
        <li><a href="https://github.com/sito44" target="_blank">Github: sito44</a></li>
      </ul>
    </Footer>
  </div>
</template>

<style lang="scss" scoped>
@import './assets/mixins.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(98, 113, 111);
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  font-size: 62.5%;
  /* background-image: url('./assets/patterns/escheresque.png'); */
  scroll-behavior: smooth;
}
#navBar {
  z-index: 500;
  background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.4));
  background-color: rgba(white, 0.8);
  width: 100%;
  padding: 0 0 0 0.3rem;
  box-shadow: 0 -1px 5px black;
  position: fixed;
  display: flex;
  justify-content: space-between;
  .navigation {
    align-self: center;
    flex: 1 0 auto;
    padding-right: 1rem;
    text-align: right;
  }
  .route-link {
    transition: all 0.2s ease;
    font-weight: bold;
    color: #2c3e50;
    font-size: 1rem;
    padding: 0 0.8rem 0 0.8rem;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

main {
  margin-bottom: 10.8rem;
  @include respond(tab-land) {
    margin-bottom: 0;
  }
  @include respond(tab-port) {
    margin-bottom: 0;
  }
  @include respond(phone) {
    margin-bottom: 0;
  }
}

.flex-style {
  display: flex;
  flex-wrap: wrap;
}


</style>
