<template>
  <nav class="main-nav hidden-xs" id="mainNav" style="z-index: 999999999">
    <div class="inner">
      <div class="container">
        <div class="Module Module-144">
          <div class="ModuleContent">
            <ul class="nav navbar-nav main-menu">
              <li class="active">
                <a target="_self" href=".">
                  <i class="fa fa-home hidden-xs"> </i> <span class="visible-xs">Trang chủ</span>
                </a>
              </li>
              <li class="">
                <a target="_self" href="./truyen-tranh-hot">Hot</a>
              </li>
              <li class="">
                <a target="_self" href="./truyen-tranh-hot">THEO DOI</a>
              </li>
              <li class="">
                <a target="_self" href="./truyen-tranh-hot">LICH SU</a>
              </li>

              <li class="dropdown">
                <a
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-expanded="false"
                  target="_self"
                  href="./tim-truyen"
                >
                  Thể loại <i class="fa fa-caret-down"></i>
                </a>
                <ul class="dropdown-menu megamenu">
                  <li>
                    <div class="clearfix">
                      <div class="col-sm-3" v-for="(item, index) of categories" :key="index">
                        <ul class="nav">
                          <li v-for="(ele, index) of item" :key="index">
                            <a
                              data-title="Truyện có nội dung xảy ra ở thời cổ đại phong kiến."
                              :href="`./tim-truyen/${ele.slug}`"
                              target="_self"
                            >
                              <p>{{ ele.name }}</p>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li class="dropdown">
                <a
                  rel="nofollow"
                  href="#"
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-expanded="false"
                  >Xếp hạng <i class="fa fa-sort"></i
                ></a>
                <div class="dropdown-menu navbar-dropdown">
                  <a rel="nofollow" href="./tim-truyen?status=-1&amp;sort=10">
                    <i class="fa fa-eye"></i> Top all</a
                  >
                  <a href="./tim-truyen?status=2&amp;sort=30">
                    <strong><i class="fa fa-signal"></i> Truyện full</strong></a
                  >
                  <a rel="nofollow" href="./tim-truyen?status=-1&amp;sort=11">
                    <i class="fa fa-eye"></i> Top tháng</a
                  >
                  <a rel="nofollow" href="./tim-truyen?status=-1&amp;sort=20">
                    <i class="fa fa-thumbs-o-up"></i> Yêu Thích</a
                  >
                  <a rel="nofollow" href="./tim-truyen?status=-1&amp;sort=12">
                    <i class="fa fa-eye"></i> Top tuần</a
                  >
                  <a href="./tim-truyen"> <i class="fa fa fa-refresh"></i> Mới cập nhật</a>
                  <a rel="nofollow" href="./tim-truyen?status=-1&amp;sort=13">
                    <i class="fa fa-eye"></i> Top ngày</a
                  >
                  <a rel="nofollow" href="./tim-truyen?status=-1&amp;sort=15">
                    <i class="fa fa-cloud-upload"></i> Truyện mới</a
                  >
                  <a rel="nofollow" href="./tim-truyen?status=-1&amp;sort=19">
                    <i class="fa fa-eye"></i> Top Follow</a
                  >
                  <a rel="nofollow" href="./tim-truyen?status=-1&amp;sort=30">
                    <i class="fa fa-list"></i> Số chapter</a
                  >
                </div>
              </li>
              <li class="">
                <a target="_self" href="./truyen-tranh-hot">TIM TRUYEN</a>
              </li>
              <li class="">
                <a target="_self" href="./truyen-tranh-hot">CON GAI</a>
              </li>
              <li class="">
                <a target="_self" href="./truyen-tranh-hot">CON TRAI</a>
              </li>
              <li class="">
                <a target="_self" href="./truyen-tranh-hot">FANPAGE</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getCategories } from '@/services/categories/category.ts'

const categories = ref(undefined)

const fetchCategory = async () => {
  const data = await getCategories()
  categories.value = chunkArray(data.data.data.items, 20)
}

function chunkArray(array, size) {
  const result = []
  for (let i = 0; i < array.length; i += size) {
    const chunk = array.slice(i, i + size)
    result.push(chunk)
  }
  return result
}

onMounted(fetchCategory)
</script>
