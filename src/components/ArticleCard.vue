<template>
  <article class="article-card">
    <h2>{{ title }}</h2>
    <p>{{ summary }}</p>
    <span class="date">{{ formatDate(date) }}</span>
  </article>
</template>

<script setup lang="ts">
interface Props {
  title: string
  summary: string
  date: string
  url: string
}

defineProps<Props>()

const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style scoped>
.article-card {
  border: 1px solid var(--box-border);
  background-color: var(--bg-secondary);
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.article-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 8px var(--shadow-color);
  background-color: var(--bg-color);
}

.article-card h2 {
  margin-bottom: 0.5rem;
  color: var(--text-color);
}

.article-card p {
  margin-bottom: 0.5rem;
  color: var(--text-secondary);
}

.date {
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
}
</style>