<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="/forif_2022_introduction/#/">FORIF</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/forif_2022_introduction/#/">Home</b-nav-item>
        <b-nav-item href="/forif_2022_introduction/#/about">About FORIF</b-nav-item>
        <b-nav-item href="/forif_2022_introduction/#/game">Game</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

  <div id="app">
    <router-view/>
  </div>
  </div>
</template>

<script>
import forif from './assets/forif.png'

export default {
  data(){
    return {
      forif: forif,
    }
  }
}
</script>



<style>
@font-face {
    font-family: 'IM_Hyemin-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2106@1.1/IM_Hyemin-Bold.woff2') format('woff');
    font-weight: normal;
    font-style: normal;
}
#app {
  font-family: 'IM_Hyemin-Bold',Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5%;
  margin-bottom: 7%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
