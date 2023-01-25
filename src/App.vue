<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/deleted">Deleted Items</router-link>
  </nav>
  <router-view/>
</template>

<style>
@import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css';
@import 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.title {
  font-size: 60px;
}

.outerDiv {
  padding: 30px 0px;
  margin-top: 50px;
  margin-bottom: 50px;
  width: 60%;
  background: rgb(29, 29, 29);
  border-radius: 40px;
}

nav {
  padding: 10px;
  padding-bottom: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
