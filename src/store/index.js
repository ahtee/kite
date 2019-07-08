import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const dark = { background: '#4d4d4d', color: '#ffffff' };
const light = { color: '#ffffff', background: '#4d4d4d' };

const state = {
  themeColor: dark
};

const mutations = {
  setThemeColor(state) {
    state.themeColor ? light : dark;
  }
};

const getters = {
  themeColor: state => state.themeColor
};

export default new Vuex.Store({
  state,
  mutations,
  getters
});
