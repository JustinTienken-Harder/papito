<template>
  <footer>
    <h1>Sources:</h1>
    <hr />
    <slot />
  </footer>
</template>

<script></script>

<style lang="scss">
@import "../assets/mixins.scss";
footer {
  position: fixed;
  bottom: 0;
  width: 100vw;
  background-color: #2c3e50;
  opacity: 0.8;
  color: white;
  @include respond(tab-land) {
    display: none;
  }
  @include respond(tab-port) {
    display: none;
  }
  @include respond(phone) {
    display: none;
  }
  h1 {
    position: absolute;
    top: 1rem;
    left: 3rem;
  }

  ul {
    margin-top: 3rem;
    li {
      list-style-type: none;
      text-align: left;
      margin: 0.3rem;
      a {
        color: white;
        text-decoration: none;
        font-size: 0.9rem;
      }
    }
  }
}
</style>
