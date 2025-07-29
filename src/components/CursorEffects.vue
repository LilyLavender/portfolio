<template>
  <div class="gooey-wrapper" ref="gooeyWrapper">
    <div class="circle circle-green" ref="circleg"></div>
  </div>
  <div class="circle circle-black" ref="circleb"></div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const gooeyWrapper = ref(null)
const clonedElements = []
const circleg = ref(null)
const circleb = ref(null)
const route = useRoute()

let fadeTimeout = null

function showCircles() {
  if (circleg.value) circleg.value.style.opacity = '1'
  if (circleb.value) circleb.value.style.opacity = '1'

  if (fadeTimeout) clearTimeout(fadeTimeout)

  fadeTimeout = setTimeout(() => {
    if (circleg.value) circleg.value.style.opacity = '0'
    if (circleb.value) circleb.value.style.opacity = '0'
  }, 2500)
}

function updateCursor(e) {
  showCircles()

  if (circleg.value) {
    circleg.value.style.left = `${e.clientX + window.scrollX - 25}px`;
    circleg.value.style.top = `${e.clientY + window.scrollY - 25}px`;
    circleg.value.style.transform = `none`;
  }
  if (circleb.value) {
    circleb.value.style.transform = `translate(${e.clientX - 45}px, ${e.clientY - 45}px)`
  }
}

function clearClones() {
  clonedElements.forEach(el => el.remove())
  clonedElements.length = 0
}

function cloneGooeyTargets() {
  clearClones()

  const targets = document.querySelectorAll('.gooey')

  targets.forEach(original => {
    const rect = original.getBoundingClientRect()

    const clone = original.cloneNode(true)
    clone.style.position = 'absolute';
    clone.style.left = `${rect.left + window.scrollX}px`;
    clone.style.top = `${rect.top + window.scrollY}px`;
    clone.style.margin = '0'
    clone.style.pointerEvents = 'none'
    clone.style.zIndex = '-3'
    clone.classList.add('cloned-gooey')

    gooeyWrapper.value.appendChild(clone)
    clonedElements.push(clone)
  })
}

onMounted(() => {
  document.addEventListener('mousemove', updateCursor)
  window.addEventListener('resize', cloneGooeyTargets)
  window.addEventListener('scroll', cloneGooeyTargets)
  requestAnimationFrame(cloneGooeyTargets)
})

watch(() => route.fullPath, () => {
  clearClones()
  requestAnimationFrame(cloneGooeyTargets)
})

onUnmounted(() => {
  document.removeEventListener('mousemove', updateCursor)
  window.removeEventListener('resize', cloneGooeyTargets)
  window.removeEventListener('scroll', cloneGooeyTargets)
  clearClones()
})
</script>

<style scoped>
.circle {
  top: 0;
  left: 0;
  border-radius: 50%;
  pointer-events: none;
  opacity: 0;

  transition: opacity 0.5s ease-in-out;
}

.circle-green {
  position: absolute;
  width: 50px;
  height: 50px;
  background: #1a6c07;
  z-index: -1;
}

.circle-black {
  position: fixed;
  width: 90px;
  height: 90px;
  background: black;
  z-index: -2;
  filter: blur(50px);
}
</style>
