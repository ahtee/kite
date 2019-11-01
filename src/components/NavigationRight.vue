<template>
  <div id="nav-right">
    <NavigationLoggedIn v-if="loggedIn" v-bind:logged-in="loggedIn" />
    <router-link v-else to="/login">Login</router-link>
  </div>
</template>

<script>
export default {
  props: {
    loggedIn: Boolean
  }
}
</script>

<style scoped>
#nav-right {
  margin-left: auto;
}
#nav-right a {
  font-weight: bold;
  color: #597ea2;
  padding: 20px 15px;
  text-decoration: none;
}

#nav-right a:hover {
  color: #42b983;
}

#nav-right a.router-link-exact-active {
  color: #42b983;
  border-bottom: 4px solid #42b983;
}
</style>
