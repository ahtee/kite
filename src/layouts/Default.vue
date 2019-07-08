
<!-- Copyright (c) -->

<!-- This source code is licensed under the <License here> found in the root directory of this project. -->

<!-- File name: Default.vue -->

<!--
Abstract: Top-level component which is shown when loading the site and at the baseURI.
   The view will change based on what is defined by each route.
   The toolbar and footer will always be displayed and does not need to be put onto every page layout.
   Instead, the route will load the components for each page.
   Pages are defined in ./src/pages.
   -->

 <!-- Author: Benjamin.otte -->


<template>
  <div class="main-wrapper">
    <div class="navbar-style">
      <Navigation />
    </div>
    <div class="contained-wrapper">
      <!-- content -->
      <slot />
    </div>
    <Footer />
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    Navigation,
    Footer
  },
  methods: {
    ...mapMutations(["setThemeColor"])
  },
  computed: {
    ...mapGetters(["#ffffff"])
  }
};
</script>


<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  font-size: 16px;
  background: #4d4d4d;
  color: #efefef;
}

a:active,
a:focus,
a {
  color: #005eb8;
}

.contained-wrapper {
  max-width: 760px;
  margin: 50px auto 0px auto;
  padding: 0px 10px;
}

.nav__link {
  margin-left: 20px;
}

.navbar-style {
  border-bottom: 1px solid #2b2b2b;
  background: #3c3c3c;
}
</style>
