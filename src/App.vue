<template class="a">
  <div class="topbar">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/completed">Completed Items</router-link>
    </nav>
  </div>
  <div class="sidebar">
    <SidebarComponent/>
  </div>
  <div class="main">
    <router-view/>
  </div>
</template>

<script>
import SidebarComponent from '@/components/SidebarComponent.vue'
export default {
  name: 'App',
  components: {
    SidebarComponent
  }
}
</script>

<style>
/*noinspection CssUnknownTarget*/
@import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css';
/*noinspection CssUnknownTarget*/
@import 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css';

/*body {
  /*background: linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%);* /
  background: #03001e;
  background: -webkit-linear-gradient(to left, #fdeff9, #ec38bc, #7303c0, #03001e);
  background: linear-gradient(to left, #fdeff9, #ec38bc, #7303c0, #03001e);
}*/

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.topbar {
  position: fixed;
  height: 54px;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  background: rgb(239, 239, 239);
  border-bottom: 1px solid black;
}

.sidebar {
  position: fixed;
  height: 100%;
  width: 13%;
  top: 0;
  left: 0;
  z-index: 3;
  background: rgb(222, 222, 222);
  border-right: 1px solid black;
}

.main {
  margin-top: 75px;
}

.title {
  font-size: 60px;
  font-weight: 700;
  margin-bottom: 20px;
} .subtitle {
  font-size: 45px;
  font-weight: 600;
  margin-bottom: 24.4px;
  color: #5c6774 !important;
}

.space {
  height: 58.4px;
}

nav {
  padding: 10px 10px 20px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
