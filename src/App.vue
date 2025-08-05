<template>
  <div>
    <!-- Header -->
    <SiteHeader />

    <!-- Page content -->
    <div class="z-1 position-relative">
      <router-view />
    </div>

    <!-- Cursor -->
    <CursorEffects />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import SiteHeader from '@/components/SiteHeader.vue';
import CursorEffects from '@/components/CursorEffects.vue';

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>