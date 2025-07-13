<template>
  <div id="ctl00_divRight" class="right-side col-md-4 cmszone">
    <div class="my-banner-desktop-sm text-center"></div>
    <div class="comics-followed-block Module Module-172"><div class="ModuleContent"></div></div>
    <div class="comic-wrap Module Module-168">
      <div class="ModuleContent">
        <div class="box-tab box darkBox">
          <ul class="tab-nav clearfix">
            <li>
              <a
                title="BXH truyện tranh theo tháng"
                class="tab-link"
                data-target="topMonth"
                :class="{ active: topView == TOP.MONTH }"
                @click="changeTopView(TOP.MONTH)"
                >Top Tháng</a
              >
            </li>
            <li>
              <a
                title="BXH truyện tranh theo tuần"
                class="tab-link"
                data-target="topWeek"
                :class="{ active: topView == TOP.WEEK }"
                @click="changeTopView(TOP.WEEK)"
                >Top Tuần</a
              >
            </li>
            <li>
              <a
                title="BXH truyện tranh theo ngày"
                class="tab-link"
                data-target="topDay"
                :class="{ active: topView == TOP.DAY }"
                @click="changeTopView(TOP.DAY)"
                >Top Ngày</a
              >
            </li>
          </ul>
          <div class="tab-pane">
            <top-view :images="images" id="topMonth" v-if="topView == TOP.MONTH" />
            <top-view :images="images" id="topWeek" v-if="topView == TOP.WEEK" />
            <top-view :images="images" id="topDay" v-if="topView == TOP.DAY" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { TManga } from '@/services/manga/manga'
import TopView from './TopView.vue'
import { ref } from 'vue'
defineProps<{
  images: TManga[]
}>()

const topView = ref<number>(1)

const changeTopView = (type: number) => {
  topView.value = type
}

enum TOP {
  MONTH = 1,
  WEEK = 2,
  DAY = 3
}
</script>
