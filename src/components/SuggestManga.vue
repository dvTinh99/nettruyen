<template>
  <div id="ctl00_divAlt1" class="altcontent1 cmszone">
    <div class="top-comics Module Module-183">
      <div class="ModuleContent">
        <h2 class="page-title">NetTruyen đề cử <i class="fa fa-angle-right"></i></h2>
        <div class="items-slide">
          <carousel :items-to-show="5">
            <slide v-for="item in images" :key="item">
              <div class="item">
                <a :href="`/truyen-tranh/${item.slug}`">
                  <img
                    class="lazy image-thumb"
                    onerror="this.onerror=null; this.src='/assets/images/thumb-default.jpg';"
                    :src="`https://otruyenapi.com/uploads/comics/${item.thumb_url}`"
                    data-original="https://ddntcthcd.com/nettruyen/thumb/vo-dich-don-ngo.jpg"
                    alt="Vô Địch Đốn Ngộ"
                    referrerpolicy="origin"
                  />
                </a>
                <div class="slide-caption">
                  <h3>
                    <a :href="`/truyen-tranh/${item.slug}`" title="Vô Địch Đốn Ngộ">
                      {{ item }}
                    </a>
                  </h3>
                  <a :href="`/truyen-tranh/${item.slug}`" title="Chapter 316">
                    Chapter {{ item?.chaptersLatest && item?.chaptersLatest[0]?.chapter_name }}
                  </a>
                  <span class="time"
                    ><i class="fa fa-clock-o"></i>
                    {{ formatDistance(new Date(item.updatedAt), new Date()) }}
                  </span>
                </div>
              </div>
            </slide>
            <template #addons>
              <navigation />
              <!-- <pagination /> -->
            </template>
          </carousel>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { getMangaHome } from '@/services/manga/manga'
import { onMounted, ref } from 'vue'
import { formatDistance } from 'date-fns'

const images = ref([])
const fetchMangeHOme = async () => {
  const data = await getMangaHome()
  images.value = data.data.data.items
}
onMounted(fetchMangeHOme)
</script>
