<template>
  <nav id="nav">
    <div id="container">
      <NavigationLeft />
      <NavigationRight v-bind:logged-in="loggedIn" />
    </div>
  </nav>
</template>

<script>
import NavigationLeft from './NavigationLeft'
import NavigationRight from './NavigationRight'

export default {
  name: 'navigation',
  components: {
    NavigationLeft,
    NavigationRight
  },
  data() {
    return {
      loggedIn: false
    }
  }
}
</script>

<style scoped>
#container {
  max-width: 960px;
  margin: 0px auto;
  display: flex;
  align-items: center;
}

#nav {
  background-color: #2c3e50;
  padding: 7px 0px;
}
</style>
