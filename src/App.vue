<template>
  <div class="app" :class="{ 'dark-mode': isDarkMode }">
    <nav class="navbar">
      <div class="nav-content">
        <div class="nav-brand">
          <h1>NoScript</h1>
        </div>
        <div class="nav-links">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/about" class="nav-link">About</router-link>
          <router-link to="/roadmap" class="nav-link">Roadmap</router-link>
          <button class="theme-toggle" @click="toggleDarkMode">
            {{ isDarkMode ? '☀️' : '🌙' }}
          </button>
        </div>
      </div>
    </nav>

    <main class="main-content">
      <div class="reader-content">
        <div class="content-padding">
          <router-view></router-view>
        </div>
      </div>
    </main>

    <footer class="footer">
      <div class="footer-content">
        <p>contact: peter@nikopoulos.net</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const isDarkMode = ref<boolean>(false)

const toggleDarkMode = (): void => {
  isDarkMode.value = !isDarkMode.value
}

onMounted((): void => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    isDarkMode.value = savedTheme === 'dark'
  } else {
    isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
})

watch(isDarkMode, (newValue: boolean): void => {
  localStorage.setItem('theme', newValue ? 'dark' : 'light')
})
</script>