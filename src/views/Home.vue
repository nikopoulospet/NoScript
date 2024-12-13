<template>
  <div class="container">
    <header>
      <h1>Home Page</h1>
      <br>
    </header>

    <main>
      <section class="articles">
        <router-link 
          v-for="article in articles" 
          :key="article.id"
          :to="article.url"
          class="article-link"
        >
          <ArticleCard 
            :title="article.title"
            :summary="article.summary"
            :date="article.date"
          />
        </router-link>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import ArticleCard from '@/components/ArticleCard.vue' 
import { articles } from '@/stores/articles'
</script>