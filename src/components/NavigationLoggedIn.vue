<template>
  <div v-bind:logged-in="loggedIn" v-if="loggedIn">
    <router-link to="/upload">Upload</router-link>
    <router-link to="/:username">Profile</router-link>
    <a href="/">Logout</a>
  </div>
</template>

<script>
export default {
  props: {
    loggedIn: Boolean
  }
}
</script>
