<!-- Copyright (c) -->

<!-- This source code is licensed under the <License here> found in the root directory of this project. -->

<!-- File name: Navigation.vue -->

 <!-- Author: Benjamin.otte -->

<template>
  <header class="navbar">
    <div class="navbar-left">
      <strong id="brand">
        <g-link to="/">
          <g-image alt="Example image" src="~/logo.png" width="40" />
        </g-link>
      </strong>
      <nav v-for="LINK in LINKS" v-bind:key="LINK.id">
        <g-link class="navlink" active-class="navlink-active" v-bind:to="LINK.url">{{LINK.title}}</g-link>
      </nav>
    </div>
    <div class="navbar-right">
      <section v-if="loggedOut">
        <g-link>Log In</g-link>
        <Button>Sign Up</Button>
      </section>
      <Button buttonAction="setThemeColor($event)">Change Theme</Button>
    </div>
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
    return {
      LINKS,
      loggedOut: true
    };
  },
  components: {
    Button
  },
  methods: {
    onClick() {
      return {
        loggedOut: !loggedOut
      };
    }
  }
};
</script>

<style scoped>
/* ID's */
#brand {
  font-size: 1.5rem;
  margin: 0px 20px 0px 0px;
}

/* Classes */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  max-width: 760px;
  margin: 0px auto;
}

.navbar-left {
  display: flex;
  align-items: center;
}

.navbar-right {
  display: flex;
}

nav {
  display: flex;
}

.navlink {
  margin: 0px 10px;
  text-decoration: none;
  color: #888888;
  position: relative;
}

.navlink-active {
  color: #00b5e2;
}

.navlink-active:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #00b5e2;
}

.navlink:hover {
  color: #00b5e2;
}
</style>
