<template>
  <div id="app">
    <nav class="navbar navbar-light bg-light">
      <span class="navbar-brand mb-0 h1">
        <img src="/images/logo.png" alt="logo" width="50" />
      </span>
    </nav>
    <router-view />
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #114e6b;
  background-color: #F8F9FA;
  padding-bottom: 20px;
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
.neomorphism {
  background-color: #f8f9fa;
  box-shadow: 4px 4px 4px #e8e9eb, -2px -2px 4px #ffffff;
}
</style>
