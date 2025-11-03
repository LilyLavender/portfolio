<template>
  <div class="photography-page container py-5">
    <div class="photography-header">
      <h1>My Photography</h1>
    </div>

    <div class="gallery">
      <div
        v-for="(img, i) in reorderedPhotos"
        :key="i"
        class="photo-item"
      >
        <img
          :src="img"
          alt="Photo"
          loading="lazy"
          @load="handleLoad($event)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const importImages = import.meta.glob('@/assets/photography/*.{jpg,jpeg,png,JPG,JPEG,PNG}', { eager: true })
const photos = Object.entries(importImages)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([_, img]) => img.default)

const columns = 3

const reorderedPhotos = computed(() => {
  const arranged = []
  for (let row = 0; row < Math.ceil(photos.length / columns); row++) {
    for (let col = 0; col < columns; col++) {
      const index = row + col * Math.ceil(photos.length / columns)
      if (index < photos.length) arranged.push(photos[index])
    }
  }
  return arranged
})

const loadedImages = ref(new Set())

function handleLoad(event) {
  const img = event.target
  img.classList.add('slide-in')
}
</script>

<style scoped>
.photography-page {
  color: #f4f4f4;
  text-align: center;
}

.photography-header {
  margin-bottom: 2rem;
}

.gallery {
  column-count: 3;
  column-gap: 2rem;
}

.photo-item {
  break-inside: avoid;
  margin-bottom: 2rem;
  border-radius: 8px;
  overflow: hidden;
}

.photo-item img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
  object-fit: cover;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

@media (max-width: 768px) {
  .gallery {
    column-count: 1;
  }
}
</style>
