<template>
  <div class="main">
    <div class="container">
      <div class="row">
        <div id="ctl00_divCenter" class="center-side col-md-8">
          <ul class="breadcrumb" itemtype="http://schema.org/BreadcrumbList">
            <li
              itemprop="itemListElement"
              itemtype="http://schema.org/ListItem"
              v-for="(item, index) of breadcrumb"
              :key="index"
            >
              <a href="." class="itemcrumb" itemprop="item" itemtype="http://schema.org/Thing"
                ><span itemprop="name">{{ item.name }}</span></a
              >
              <meta itemprop="position" content="1" />
            </li>
          </ul>
          <article id="item-detail">
            <h1 class="title-detail">{{ manga.name }}</h1>
            <time class="small"> [Cập nhật lúc: {{ new Date(manga.updatedAt).toString() }}] </time>
            <div class="detail-info">
              <div class="row">
                <div class="col-xs-4 col-image">
                  <img
                    :src="`https://otruyenapi.com/uploads/comics/${manga.thumb_url}`"
                    class="image-thumb"
                    alt="Ta Học Trảm Thần Trong Bệnh Viện Tâm Thần"
                    referrerpolicy="origin"
                  />
                </div>
                <div class="col-xs-8 col-info">
                  <ul class="list-info">
                    <li class="author row">
                      <p class="name col-xs-4"><i class="fa fa-user"> </i> Tác giả</p>
                      <p class="col-xs-8">Đang cập nhật</p>
                    </li>
                    <li class="status row">
                      <p class="name col-xs-4"><i class="fa fa-rss"> </i> Tình trạng</p>
                      <p class="col-xs-8">Đang tiến hành</p>
                    </li>
                    <li class="kind row">
                      <p class="name col-xs-4"><i class="fa fa-tags"> </i> Thể loại</p>
                      <p class="col-xs-8">
                        <a
                          v-for="(item, index) of manga.category"
                          :key="index"
                          href="/tim-truyen/drama-103"
                          >{{ item.name }} -
                        </a>
                      </p>
                    </li>
                    <li class="row">
                      <p class="name col-xs-4"><i class="fa fa-eye"> </i> Lượt xem</p>
                      <p class="col-xs-8">10.117</p>
                    </li>
                  </ul>
                  <div class="mrt5 mrb10" itemtype="http://schema.org/Book">
                    <a href="/truyen-tranh/ta-hoc-tram-than-trong-benh-vien-tam-than">
                      <span itemprop="name">{{ manga.name }}</span>
                    </a>
                    <span itemprop="aggregateRating" itemtype="https://schema.org/AggregateRating">
                      Xếp hạng: <span itemprop="ratingValue">4.5</span>/<span itemprop="bestRating"
                        >5</span
                      >
                      - <span itemprop="ratingCount">25</span> Lượt đánh giá.
                    </span>
                  </div>
                  <div class="row rating">
                    <div class="col-xs-6">
                      <div
                        class="star"
                        data-id="16626"
                        data-rating="4.5"
                        data-allowrating="true"
                        style="cursor: pointer"
                      >
                        <input type="hidden" name="score" value="4.5" />
                      </div>
                    </div>
                  </div>
                  <div class="follow">
                    <a
                      class="follow-url btn btn-danger isFollow hidden"
                      data-id="16626"
                      data-status="1"
                    >
                      <i class="fa fa-times"></i> <span>Bỏ theo dõi</span>
                    </a>
                    <a
                      class="follow-url btn btn-danger unFollow hidden"
                      data-id="16626"
                      data-status="0"
                    >
                      <i class="fa fa-heart"></i> <span>Theo dõi</span>
                    </a>
                    <a class="btn btn-danger linkLogin" href="/Secure/Login.aspx">
                      <i class="fa fa-heart"></i> <span>Theo dõi</span>
                    </a>
                    <span> <b class="number_follow">29.096</b> Người Đã Theo Dõi </span>
                  </div>
                  <div class="read-action mrt10">
                    <a
                      class="btn btn-warning mrb5"
                      href="/truyen-tranh/ta-hoc-tram-than-trong-benh-vien-tam-than/chuong-0"
                    >
                      Đọc từ đầu</a
                    >
                    <a
                      class="btn btn-warning mrb5"
                      href="/truyen-tranh/ta-hoc-tram-than-trong-benh-vien-tam-than/chuong-153"
                    >
                      Đọc mới nhất</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <input id="comic-kind" value="Drama,Manhua,Mystery,Truyện Màu,Horror" class="hidden" />
            <div class="text-center banner-affiliate hidden" id="detail-affiliateBanner ">
              <a class="ads-banner" id="affiliateBanner" rel="nofollow" href="" target="_blank"
                ><img style="width: 100%" src=""
              /></a>
            </div>
            <div class="my-banner md"></div>
            <div class="detail-content">
              <h2 class="list-title">
                <i class="fa fa-file-text-o"> </i> Nội dung truyện {{ manga.name }} NetTruyen
              </h2>
              <div class="shortened">
                <p v-html="manga.content"></p>
              </div>
              <a href="#" class="morelink">Xem thêm <i class="fa fa-angle-right"></i></a>
            </div>
            <div class="list-chapter" id="nt_listchapter">
              <div class="h-auto"></div>
              <h2 class="list-title clearfix"><i class="fa fa-list"> </i> Danh sách chương</h2>
              <div class="row heading">
                <div class="col-xs-5 no-wrap">
                  Số chương
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="button"
                    viewBox="0 0 320 512"
                    id="iconDesc"
                    width="1em"
                    height="1em"
                    style="display: inline-block; position: relative; top: 3px"
                  >
                    <path
                      d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="button"
                    viewBox="0 0 320 512"
                    id="iconAsc"
                    width="1em"
                    height="1em"
                    style="display: none; position: relative; top: 5px"
                  >
                    <path
                      d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"
                    ></path>
                  </svg>
                </div>
                <div class="col-xs-4 no-wrap text-center">Cập nhật</div>
              </div>
              <nav>
                <ul id="desc" style="display: block" v-if="manga.chapters">
                  <li
                    class="row"
                    v-for="(chapter, index) of manga.chapters[0]?.server_data.reverse()"
                    :key="index"
                  >
                    <div class="col-xs-5 chapter">
                      <a :href="`/truyen-tranh/${manga.slug}/chuong-${chapter.chapter_name}`"
                        >Chapter {{ chapter.chapter_name }}</a
                      >
                    </div>
                    <div class="col-xs-4 no-wrap small text-center">2 ngày trước</div>
                  </li>
                </ul>
              </nav>
            </div>
          </article>
        </div>
        <RightSideBar :images="images" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'
import RightSideBar from '@/components/RightSideBar.vue'

import { getMangaBySlug, getMangaHome, type TManga } from '@/services/manga/manga'
import { onMounted, ref } from 'vue'
const route = useRoute()
const manga = ref<TManga>({})
const breadcrumb = ref()

const images = ref([])

const fetchMangaBySlug = async () => {
  const data = await getMangaBySlug(route.params.slug as string)
  manga.value = data.data.data.item as any
  breadcrumb.value = data.data.data.breadCrumb

  const homeResponse = await getMangaHome()
  images.value = homeResponse.data.data.items
}

onMounted(fetchMangaBySlug)
</script>
