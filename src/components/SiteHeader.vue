<template>
  <header class="header unvisitable">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/resume">Resume</RouterLink>
    <RouterLink to="/development">Portfolio</RouterLink>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.header {
  all: unset;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  left: 0;
  right: 0;
  top: 0;
  padding: 1rem;
  width: 33%;
  margin: 0 auto;
  z-index: 1;
}
</style>
