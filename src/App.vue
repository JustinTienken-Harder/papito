<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'
import Footer from './components/Footer.vue'

const isNavBarVisible = ref(true)
let lastScrollY = 0

const handleScroll = () => {
  const currentScrollY = window.scrollY
  
  // Show navbar when at top of page
  if (currentScrollY < 50) {
    isNavBarVisible.value = true
    return
  }
  
  // Show navbar when scrolling up, hide when scrolling down
  if (currentScrollY < lastScrollY) {
    isNavBarVisible.value = true
  } else {
    isNavBarVisible.value = false
  }
  
  lastScrollY = currentScrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div id="app">
    <header id="navBar" :class="{ 'nav-hidden': !isNavBarVisible }">
      <img alt="Vue logo" class="logo" src="@/assets/PapitoPaul-Logo.png" />

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
@import './assets/base.scss';
@import './assets/mixins.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color-primary-dark;
  width: 100vw;
  height: 210vh;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  font-size: 62.5%;
  background-image: url('./assets/escheresque.png');
  background-attachment: fixed;
  background-repeat: repeat;
  scroll-behavior: smooth;
}

.logo {

  width:auto;
  height: 10rem;
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
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform: translateY(0);
  opacity: 1;
  
  &.nav-hidden {
    transform: translateY(-100%);
    opacity: 0;
  }
  
  .navigation {
    align-self: center;
    flex: 1 0 auto;
    padding-right: 1rem;
    text-align: right;
  }
  .route-link {
    transition: all 0.2s ease;
    font-weight: bold;
    font-family:'Cambria', 'Cochin', 'Georgia', 'Times', 'Times New Roman', 'serif';
    color:#3a3e6c;
    font-size: 1rem;
    padding: 0 0.4rem 0 0.4rem;
    
    &.router-link-exact-active {
      color: #3a3e6c;
      opacity: 40%;
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
@media (max-width: 740px) {
 
  .logo {
    height: 5.4rem;
    width: auto;
  }
}


</style>
