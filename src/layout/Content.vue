<template>
  <main class="main">
    <div class="container">
      <SuggestManga :images="images" />
      <div class="row">
        <MangaLeft :images="images" />
        <RightSideBar :images="images" />
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import SuggestManga from '@/components/SuggestManga.vue'
import MangaLeft from '@/components/MangaLeft.vue'
import RightSideBar from '@/components/RightSideBar.vue'
import { onMounted, ref } from 'vue'
import { getMangaHome } from '@/services/manga/manga'

const images = ref([])
const fetchMangeHOme = async () => {
  const data = await getMangaHome()
  console.log('gethomene', data)

  images.value = data.data.data.items
}
onMounted(fetchMangeHOme)
</script>
