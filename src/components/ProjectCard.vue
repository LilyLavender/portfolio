<template>
  <div class="project-card">
    <div class="card-body">
      <!-- Left side -->
      <div class="card-section-1">
        <!-- Title -->
        <h2 class="no-hl">{{ project.title }}</h2>

        <!-- Description -->
        <p>{{ project.description }}</p>

        <!-- Tags -->
        <div class="tags no-hl">
          <span
            v-for="tag in project.tags"
            :key="tag"
            class="tag"
            :style="{ backgroundColor: tagColors[tag] || '#808080' }"
          >
            {{ tag }}
          </span>
        </div>

        <!-- Links -->
        <div class="links">
          <!-- Download / View -->
          <a
            v-if="project.downloadLink"
            :href="project.downloadLink"
            class="button small gooey unvisitable"
            target="_blank"
          >
          <i v-if="project.downloadIcon" :class="project.downloadIcon"></i>
          {{ project.downloadText }}
          </a>
          <p
            v-else-if="project.downloadText"
            class="button small gooey no-hl"
          >
          <i v-if="project.downloadIcon" :class="project.downloadIcon"></i>
          {{ project.downloadText }}
          </p>

          <!-- Source Code -->
          <a
            v-if="project.sourceLink"
            :href="project.sourceLink"
            class="button small gooey unvisitable"
            target="_blank"
          >
          <i v-if="project.sourceIcon" :class="project.sourceIcon"></i>
          {{ project.sourceText }}
          </a>
          <p
            v-else-if="project.sourceText"
            class="button small gooey no-hl"
          >
          <i v-if="project.sourceIcon" :class="project.sourceIcon"></i>
          {{ project.sourceText }}
          </p>
        </div>
      </div>

      <!-- Right side -->
      <div class="card-section-2" v-if="currentMedia">
        <!-- Media -->
        <div class="media-wrapper">
          <button class="nav-button left" @click.stop="prevMedia">&#10094;</button>

          <!-- YouTube video -->
          <iframe
            v-if="isYouTubeLink(currentMedia)"
            :src="getYouTubeEmbedUrl(currentMedia)"
            class="video"
            frameborder="0"
            allowfullscreen
          ></iframe>

          <!-- Image -->
          <div v-else class="image-wrapper">
            <img
              :src="getImagePath(currentMedia)"
              :alt="project.title"
              @click="showModal = true"
            />
            <button class="nav-button expand-button" @click.stop="showModal = true">⤢</button>
          </div>

          <button class="nav-button right" @click.stop="nextMedia">&#10095;</button>
        </div>

        <!-- Modal -->
        <transition name="fade">
          <div v-if="showModal" class="modal-backdrop" @click.self="showModal = false">
            <div class="modal-content">
              <button class="nav-button left nav-larger" @click.stop="prevMedia">&#10094;</button>
              <img
                v-if="currentMedia && !isYouTubeLink(currentMedia)"
                :src="getImagePath(currentMedia)"
                :alt="project.title"
              />
              <button class="nav-button right nav-larger" @click.stop="nextMedia">&#10095;</button>
              <button class="nav-button modal-close" @click="showModal = false">✕</button>
            </div>
          </div>
        </transition>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'

const props = defineProps({
  project: Object
})

const currentIndex = ref(0)
const currentMedia = computed(() => props.project.images?.[currentIndex.value] ?? null)

const tagColors = {
  'ASP.NET': '#512bd4',
  'Azure': '#008bd8',
  'Batchfile': '#c1f12e',
  'Bootstrap': '#8d0bfd',
  'C#': '#178600',
  'CSS': '#0093d2',
  'Decompilation': '#808080',
  'Entity Framework': '#40ccf4',
  'Firebase': '#ff9100',
  'Formatting': '#808080',
  'Function Hooking': '#808080',
  'Ghidra': '#e1251b',
  'HTML': '#eb3e00',
  'JavaScript': '#fbd725',
  'jQuery': '#0773b4',
  'Notepad++ Script': '#90e873',
  'Plugin': '#808080',
  'Python': '#3572a5',
  'React': '#61dafb',
  'Rust': '#dea584',
  'SCSS': '#cf6c9c',
  'SQL': '#dc7630',
  'Serializer': '#808080',
  'Tailwind': '#3ebff8',
  'toml': '#808080',
  'Tutorial': '#808080',
  'TypeScript': '#377cc8',
  'VSCode Extension': '#007acc',
  'Vue': '#47ba87',
  'Vuetify': '#7bc6ff',
  'Winforms': '#008bd8'
}

function getImagePath(filename) {
  return new URL(`/src/assets/${filename}`, import.meta.url).href
}

function isYouTubeLink(link) {
  return link.includes('youtube.com') || link.includes('youtu.be')
}

function getYouTubeEmbedUrl(link) {
  const videoId = link.includes('youtu.be')
    ? link.split('/').pop()
    : new URL(link).searchParams.get('v')
  const separator = videoId.includes('?') ? '&' : '?'
  return `https://www.youtube.com/embed/${videoId}${separator}controls=0&fs=1&rel=0&showinfo=0&modestbranding=1`
}

function nextMedia() {
  if (!props.project.images?.length) return
  currentIndex.value = (currentIndex.value + 1) % props.project.images.length
}

watch(() => props.project.title, () => {
  currentIndex.value = 0
})

// Modal
const showModal = ref(false)

function prevMedia() {
  if (!props.project.images?.length) return
  currentIndex.value = (currentIndex.value - 1 + props.project.images.length) % props.project.images.length
}

function handleKeydown(e) {
  if (!showModal.value) return
  if (e.key === 'ArrowRight') {
    nextMedia()
  } else if (e.key === 'ArrowLeft') {
    prevMedia()
  } else if (e.key === 'Escape') {
    showModal.value = false
  }
}

watch(showModal, value => {
  if (value) {
    document.addEventListener('keydown', handleKeydown)
    document.body.style.overflow = 'hidden'
  } else {
    document.removeEventListener('keydown', handleKeydown)
    document.body.style.overflow = ''
  }
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
/* Card */
.project-card {
  padding: 1.5rem;
  width: 66%;
}

/* Card alignment */
.align-left {
  margin-left: 0;
  margin-right: auto;
}

.align-center-left, .align-center-right {
  margin-left: auto;
  margin-right: auto;
}

.align-right {
  margin-left: auto;
  margin-right: 0;
}

/* Other card styles */
h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #f4f4f4;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
}

.card-body {
  display: flex;
}

.align-right .card-body, .align-center-right .card-body {
  flex-direction: row-reverse;
}

.links i {
  margin-right: 0.25rem;
}

/* Tags */
.tags {
  margin-top: 0.5rem;
}

.tag {
  display: inline-block;
  color: #121212;
  border-radius: 3px;
  padding: 0.2rem 0.6rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.85rem;
  font-weight: bold;
}

/* Images & videos */
.media-wrapper {
  margin: 1rem;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  max-width: 100%;
  box-shadow: 0px 0px 30px 0px rgba(0,0,0,1.0);
}

.media-wrapper img,
.media-wrapper iframe {
  max-width: 300px;
  max-height: 400px;
  object-fit: cover;
  border-radius: 6px;
  transition: opacity 0.3s ease;
}

.video {
  aspect-ratio: 16/9;
  border-radius: 6px;
  min-width: 260px;
}

/* Modal */
.image-wrapper {
  position: relative;
  display: inline-block;
}

.nav-button {
  position: absolute;
  background-color: transparent;
  filter: drop-shadow(0px 0px 4px #000000C0);
  color: white;
  border: none;
  outline: none;
  font-size: 2rem;
  padding: 0 0.5rem;
  cursor: pointer;
  align-self: center;
  z-index: 1;

  transition: transform 200ms ease-out;
}

.nav-button.left {
  left: 0;
  margin-left: -2rem;
}

.nav-button.right {
  right: 0;
  margin-right: -2rem;
}

.nav-button:hover {
  transform: scale(1.3);
}

.nav-button:active {
  transform: scale(1.8);
}

.expand-button {
  bottom: 5px;
  right: 5px;
  font-size: 1.5rem;
}

/* Modal Styles */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(18, 18, 18, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}

.modal-content {
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  box-sizing: border-box;
}

.modal-content img {
  position: fixed;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 10px;
}

.modal-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 3rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  z-index: 2;
}

.modal-close {
  top: 0;
  right: 0;
  font-size: 3rem;
}

.nav-larger {
  font-size: 4rem;
}

.nav-larger.left {
  margin-left: -4rem;
}

.nav-larger.right {
  margin-right: -4rem;
}

/* Fade animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
