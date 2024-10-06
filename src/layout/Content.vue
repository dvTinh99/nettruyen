<template>
  <main class="main">
    <div class="container">
      <SuggestManga />
      <div class="row">
        <MangaLeft />
        <RightSideBar />
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import SuggestManga from '@/components/SuggestManga.vue'
import MangaLeft from '@/components/MangaLeft.vue'
import RightSideBar from '@/components/RightSideBar.vue'
</script>
