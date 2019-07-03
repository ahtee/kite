<!-- Copyright (c) -->

<!-- This source code is licensed under the <License here> found in the root directory of this project. -->

<!-- File name: Button.vue -->

 <!-- Author: Benjamin.otte -->

<template>
  <button class="btn" v-on:click="clicked">{{buttonTitle}}</button>
</template>

<script>
export default {
  props: { buttonTitle: String },
  methods: {
    clicked(e) {
      e.preventDefault();
    }
  }
};
</script>


<style scoped>
.btn {
  border-color: #000000;
  color: #000000;
  border-radius: 2px;
  cursor: pointer;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.035rem;
  line-height: 10px;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-shadow: none;
  transition: background-color 0.05s ease-in-out, border-color 0.05s ease-in-out;
  outline: none;
  white-space: nowrap;
}

.btn:active,
.btn:hover {
  background: 0 0;
  border: 1px solid #0061d5;
  color: #0061d5;
  margin: 0;
}
</style>

