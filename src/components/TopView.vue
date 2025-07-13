<template>
  <div :id="id">
    <ul class="list-unstyled">
      <li class="clearfix" v-for="(item, index) in images" :key="index">
        <span class="txt-rank fn-order pos1">{{ index + 1 }}</span>
        <div class="t-item comic-item" data-id="10785">
          <a class="thumb" :title="item.name" :href="`/nettruyen/truyen-tranh/${item.slug}`">
            <img
              class="lazy image-thumb"
              onerror="this.onerror=null; this.src='/assets/images/thumb-default.jpg';"
              :src="`https://otruyenapi.com/uploads/comics/${item.thumb_url}`"
              :data-original="`https://otruyenapi.com/uploads/comics/${item.thumb_url}`"
              :alt="item.name"
              referrerpolicy="origin"
            />
          </a>
          <h3 class="title">
            <a :href="`/nettruyen/truyen-tranh/${item.slug}`">{{ item.name }}</a>
          </h3>
          <p class="chapter top">
            <a data-id="1022" :href="`/nettruyen/truyen-tranh/${item.slug}`" title="Chapter 998">{{
              item.status
            }}</a>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import type { TManga } from '@/services/manga/manga'

defineProps<{
  images: TManga[]
  id: string
}>()
</script>
