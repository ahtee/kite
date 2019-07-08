// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
//
// Populating the <head> can be found here https://gridsome.org/docs/head

import DefaultLayout from '~/layouts/Default.vue';
import store from './store';

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout, store);
}
