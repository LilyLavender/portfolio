<template>
  <v-app>
    <SiteHeader />
    <router-view />
  </v-app>
</template>

<script setup>
import SiteHeader from '@/components/SiteHeader.vue';
</script>