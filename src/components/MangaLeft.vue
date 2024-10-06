<template>
  <div id="ctl00_divCenter" class="center-side col-md-8">
    <div class="Module Module-163">
      <div class="ModuleContent">
        <div class="items">
          <div class="relative">
            <h1 class="page-title">
              NetTruyen - Truyện tranh online <i class="fa fa-angle-right"></i>
            </h1>
            <div style="margin-bottom: 5px" class="text_link_iwin_club"></div>
            <a class="filter-icon" href="./tim-truyen">
              <i class="fa fa-filter"></i>
            </a>
          </div>
          <div class="row">
            <div class="item" v-for="item of images" :key="item">
              <figure class="clearfix">
                <div class="image">
                  <a title="Truyện tranh Toàn Cầu Cao Võ" :href="`/truyen-tranh/${item.slug}`">
                    <img
                      :src="`https://otruyenapi.com/uploads/comics/${item.thumb_url}`"
                      class="lazy image-thumb"
                      onerror="this.onerror=null; this.src='/assets/images/thumb-default.jpg';"
                      data-original="https://ddntcthcd.com/nettruyen/thumb/toan-cau-cao-vo.jpg"
                      alt="Truyện tranh Toàn Cầu Cao Võ"
                      referrerpolicy="origin"
                    />
                  </a>
                  <span class="icon icon-hot"></span>
                  <div class="view clearfix">
                    <span class="pull-left">
                      <i class="fa fa-eye"></i> 5M <i class="fa fa-comment"></i> 1,788,046
                      <i class="fa fa-heart"></i> 2,245,868
                    </span>
                  </div>
                </div>
                <figcaption>
                  <h3>
                    <a
                      class="jtip"
                      data-jtip="#truyen-tranh-9579"
                      :href="`/truyen-tranh/${item.slug}`"
                    >
                      {{ item.name }}
                    </a>
                  </h3>
                  <ul class="comic-item" data-id="9579">
                    <li class="chapter clearfix">
                      <a data-id="279" :href="`/truyen-tranh/${item.slug}`" title="Chapter 279">
                        Chapter {{ item.chaptersLatest[0].chapter_name }}
                      </a>
                      <i class="time">{{ formatDistance(new Date(item.updatedAt), new Date()) }}</i>
                    </li>
                  </ul>
                </figcaption>
              </figure>
              <div class="box_tootip" style="display: none" id="truyen-tranh-9579">
                <div class="box_li">
                  <div class="title">Toàn Cầu Cao Võ</div>
                  <div class="clearfix">
                    <div class="box_img">
                      <a title="Toàn Cầu Cao Võ" :href="`/truyen-tranh/${item.slug}`">
                        <img
                          class="img_a image-thumb"
                          onerror="this.onerror=null; this.src='/assets/images/thumb-default.jpg';"
                          src="https://kcgsbok.com/nettruyen/thumb/toan-cau-cao-vo.jpg"
                          data-original="https://ddntcthcd.com/nettruyen/thumb/toan-cau-cao-vo.jpg"
                          alt="Toàn Cầu Cao Võ"
                          referrerpolicy="origin"
                        />
                      </a>
                    </div>
                    <div class="message_main">
                      <p><label>Tên khác:</label></p>
                      <p><label>Thể loại:</label>Manhua,Adventure,Action,Martial Arts,Truyện Màu</p>
                      <p><label>Tình trạng:</label>Đang tiến hành</p>
                      <p><label>Lượt xem:</label> 5M</p>
                      <p><label>Bình luận:</label> 1,788,046</p>
                      <p><label>Theo dõi:</label> 2,245,868</p>
                      <p><label>Ngày cập nhật:</label>11 giờ trước</p>
                    </div>
                  </div>
                  <div class="box_text">
                    Trùng sinh chỉ là đi hướng đỉnh phong bắt đầu. Địa quật xâm lấn, võ đạo quật
                    khởi.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="ctl00_mainContent_ctl00_divPager" class="pagination-outter">
          <ul class="pagination" role="navigation">
            <li class="page-item disabled" aria-disabled="true" aria-label="« Previous">
              <span class="page-link" aria-hidden="true">‹</span>
            </li>
            <li class="page-item active" aria-current="page">
              <span class="page-link">1</span>
            </li>
            <li class="page-item">
              <a class="page-link" href=".?page=2">2</a>
            </li>
            <li class="page-item">
              <a class="page-link" href=".?page=3">3</a>
            </li>
            <li class="page-item">
              <a class="page-link" href=".?page=4">4</a>
            </li>
            <li class="page-item">
              <a class="page-link" href=".?page=5">5</a>
            </li>
            <li class="page-item">
              <a class="page-link" href=".?page=6">6</a>
            </li>
            <li class="page-item">
              <a class="page-link" href=".?page=7">7</a>
            </li>
            <li class="page-item">
              <a class="page-link" href=".?page=8">8</a>
            </li>
            <li class="page-item disabled" aria-disabled="true">
              <span class="page-link">...</span>
            </li>
            <li class="page-item">
              <a class="page-link" href=".?page=567">567</a>
            </li>
            <li class="page-item">
              <a class="page-link" href=".?page=568">568</a>
            </li>
            <li class="page-item">
              <a class="page-link" href=".?page=2" rel="next" aria-label="Next »">›</a>
            </li>
          </ul>
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
