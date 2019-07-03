<!-- Copyright (c) -->

<!-- This source code is licensed under the <License here> found in the root directory of this project. -->

<!-- File name: Navigation.vue -->

 <!-- Author: Benjamin.otte -->

<template>
  <header class="navbar">
    <strong id="brand">
      <g-link to="/">{{ $static.metaData.siteName }}</g-link>
    </strong>
    <nav v-for="LINK in LINKS" v-bind:key="LINK.id">
      <g-link class="navlink" v-bind:to="LINK.url">{{LINK.title}}</g-link>
    </nav>
    <Button buttonTitle="Sign Up" v-if="loggedOut" />
  </header>
</template>

<script>
import Button from "./Button";

export default {
  name: "Navigation",
  data() {
    const LINKS = [
      {
        id: 1,
        title: "About",
        url: "/about"
      },
      {
        id: 2,
        title: "Data",
        url: "/data"
      }
    ];
    return { LINKS, loggedOut: true };
  },
  components: {
    Button
  }
};
</script>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style scoped>
/* ID's */
#brand {
  font-size: 1.5rem;
}

/* Classes */
.navbar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 70px;
  max-width: 760px;
  margin: 0px auto;
}

.nav:first-child {
  margin-left: 90px;
}

nav {
  display: flex;
}

.navlink {
  margin: 0px 10px;
}
</style>
