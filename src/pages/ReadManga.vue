<template>
  <div class="container" style="padding-top: 0">
    <div class="row">
      <div id="ctl00_divCenter" class="full-width col-sm-12">
        <div class="reading">
          <div class="container">
            <div class="top">
              <ul class="breadcrumb" itemtype="http://schema.org/BreadcrumbList">
                <li itemprop="itemListElement" itemtype="http://schema.org/ListItem">
                  <a
                    href="https://nettruyenviet.com"
                    class="itemcrumb"
                    itemprop="item"
                    itemtype="http://schema.org/Thing"
                    ><span itemprop="name">Trang chủ</span></a
                  >
                  <meta itemprop="position" content="1" />
                </li>
                <li itemprop="itemListElement" itemtype="http://schema.org/ListItem">
                  <a
                    href="https://nettruyenviet.com/tim-truyen"
                    class="itemcrumb"
                    itemprop="item"
                    itemtype="http://schema.org/Thing"
                    ><span itemprop="name">Thể loại</span></a
                  >
                  <meta itemprop="position" content="2" />
                </li>
                <li itemprop="itemListElement" itemtype="http://schema.org/ListItem">
                  <a
                    href="https://nettruyenviet.com/truyen-tranh/nha-tu-vi-thanh-nien"
                    class="itemcrumb active"
                    itemprop="item"
                    itemtype="http://schema.org/Thing"
                  >
                    <span itemprop="name"> Nhà Tù Vị Thành Niên </span>
                  </a>
                  <meta itemprop="position" content="3" />
                </li>
                <li itemprop="itemListElement" itemtype="http://schema.org/ListItem">
                  <a
                    href="https://nettruyenviet.com/truyen-tranh/nha-tu-vi-thanh-nien/chuong-1"
                    class="itemcrumb active"
                    itemprop="item"
                    itemtype="http://schema.org/Thing"
                  >
                    <span itemprop="name">Chapter {{ chap }}</span>
                  </a>
                  <meta itemprop="position" content="4" />
                </li>
              </ul>
              <h1 class="txt-primary">
                <a href="https://nettruyenviet.com/truyen-tranh/nha-tu-vi-thanh-nien"> {{}} </a>
                <span>{{ manga.name }} - Chapter {{ chap }}</span>
              </h1>
              <i>[Cập nhật lúc: 2024-07-03 10:56:10]</i>
            </div>
            <div class="reading-control">
              <span class="chapter-id hidden" data-id="1" data-cid="24636"></span>
              <div class="mrb5">
                <span class="dot"><span class="ping"></span></span> &nbsp;Nếu không xem được truyện
                vui lòng đổi <a>"SERVER ẢNH"</a> bên dưới
                <div class="mrt10">
                  <a rel="nofollow" data-server="1" class="sv1 btn btn-primary btn-success mrb5"
                    >Server 1</a
                  >
                  <a rel="nofollow" data-server="2" class="sv2 btn btn-primary mrb5">Server 2</a>
                </div>
              </div>
              <div class="mrb10">
                <a rel="nofollow" href="javascript:void(0)" class="alertError btn btn-warning"
                  ><i class="fa fa-exclamation-triangle"></i> Báo lỗi</a
                >
              </div>
              <div class="alert alert-info mrb10 hidden-xs hidden-sm">
                <i class="fa fa-info-circle"></i>
                <em>Sử dụng mũi tên trái (←) hoặc phải (→) để chuyển chapter</em>
              </div>
              <div
                class="chapter-nav"
                id="chapterNav"
                style="z-index: 1000; position: static; top: auto"
              >
                <a class="home" href="/" title="Trang chủ"><i class="fa fa-home"></i></a>
                <a
                  class="home backward"
                  href="https://nettruyenviet.com/truyen-tranh/nha-tu-vi-thanh-nien#nt_listchapter"
                  title="#"
                  ><i class="fa fa-list"></i
                ></a>
                <a class="home changeserver" href="#" title="Đổi server"
                  ><i class="fa fa-undo error"></i><span>1</span></a
                >
                <a
                  href="https://nettruyenviet.com/truyen-tranh/nha-tu-vi-thanh-nien/chuong-1"
                  class="prev a_prev disabled"
                  ><i class="fa fa-chevron-left"></i
                ></a>
                <select
                  name="ctl00$mainContent$ddlSelectChapter"
                  id="ctl00_mainContent_ddlSelectChapter"
                  class="select-chapter"
                  v-if="manga.chapters"
                >
                  <option
                    :value="item.chapter_name"
                    v-for="(item, index) of manga.chapters[0].server_data.reverse()"
                    :key="index"
                    :selected="chap == item.chapter_name"
                  >
                    Chapter - {{ item.chapter_name }}
                  </option>
                </select>
                <a
                  :href="`/truyen-tranh/${route.params.slug}/chuong-${parseInt(chap) + 1}`"
                  class="next a_next"
                  ><i class="fa fa-chevron-right"></i
                ></a>
                <a
                  class="follow-url btn btn-danger isFollow hidden"
                  data-id="24636"
                  data-status="1"
                >
                  <i class="fa fa-times"></i> <span>Bỏ theo dõi</span>
                </a>
                <a
                  class="follow-url btn btn-danger unFollow hidden"
                  data-id="24636"
                  data-status="0"
                >
                  <i class="fa fa-heart"></i> <span>Theo dõi</span>
                </a>
                <a class="btn btn-danger linkLogin" href="/Secure/Login.aspx">
                  <i class="fa fa-heart"></i> <span>Theo dõi</span>
                </a>
              </div>
              <div style="display: none; width: 980px; height: 35.6797px; float: none"></div>
            </div>
          </div>
          <div class="container my-banner lg"></div>
          <div class="reading-detail box_doc">
            <div class="page-chapter" v-for="(item, index) of chapterImages" :key="index">
              <img
                class="lozad"
                loading="lazy"
                :src="`${pathUrl}${item.image_file}`"
                alt="Nhà Tù Vị Thành Niên - Trang 23"
                :data-src="`${pathUrl}${item.image_file}`"
                :data-sv1="`${pathUrl}${item.image_file}`"
                :data-sv2="`${pathUrl}${item.image_file}`"
                referrerpolicy="origin"
                onerror="imgError($(this))"
              />
            </div>
          </div>
          <div class="container my-banner lg"></div>
          <div class="container">
            <div class="top bottom">
              <div class="chapter-nav-bottom text-center" id="chapterNavBottom">
                <a
                  href="https://nettruyenviet.com/truyen-tranh/nha-tu-vi-thanh-nien/chuong-1"
                  class="btn btn-danger prev disabled"
                  ><em class="fa fa-chevron-left"></em> Chap trước</a
                >
                <a
                  href="https://nettruyenviet.com/truyen-tranh/nha-tu-vi-thanh-nien/chuong-2"
                  class="btn btn-danger next"
                  >Chap sau <em class="fa fa-chevron-right"></em
                ></a>
              </div>
              <ul class="breadcrumb" itemtype="http://schema.org/BreadcrumbList">
                <li itemprop="itemListElement" itemtype="http://schema.org/ListItem">
                  <a
                    href="https://nettruyenviet.com"
                    class="itemcrumb"
                    itemprop="item"
                    itemtype="http://schema.org/Thing"
                    ><span itemprop="name">Trang chủ</span></a
                  >
                  <meta itemprop="position" content="1" />
                </li>
                <li itemprop="itemListElement" itemtype="http://schema.org/ListItem">
                  <a
                    href="https://nettruyenviet.com/tim-truyen"
                    class="itemcrumb"
                    itemprop="item"
                    itemtype="http://schema.org/Thing"
                    ><span itemprop="name">Thể loại</span></a
                  >
                  <meta itemprop="position" content="2" />
                </li>
                <li itemprop="itemListElement" itemtype="http://schema.org/ListItem">
                  <a
                    href="https://nettruyenviet.com/truyen-tranh/nha-tu-vi-thanh-nien"
                    class="itemcrumb active"
                    itemprop="item"
                    itemtype="http://schema.org/Thing"
                  >
                    <span itemprop="name"> Nhà Tù Vị Thành Niên </span>
                  </a>
                  <meta itemprop="position" content="3" />
                </li>
                <li itemprop="itemListElement" itemtype="http://schema.org/ListItem">
                  <a
                    href="https://nettruyenviet.com/truyen-tranh/nha-tu-vi-thanh-nien/chuong-1"
                    class="itemcrumb active"
                    itemprop="item"
                    itemtype="http://schema.org/Thing"
                  >
                    <span itemprop="name">Chapter {{ chapter }}</span>
                  </a>
                  <meta itemprop="position" content="4" />
                </li>
              </ul>
              <div class="social hidden"></div>
            </div>
          </div>
          <div class="banner container text-center"></div>
          <div class="container">
            <div class="comment">
              <ul class="nav nav-tabs main-tab lazy-module" data-type="facebook">
                <li class="active">
                  <a data-toggle="tab" href="#nt_comments">
                    <i class="fa fa-comments"></i> NetTruyen (<span class="comment-count"></span>)
                  </a>
                </li>
                <li>
                  <a data-toggle="tab" href="#fb_comments">
                    <i class="fa fa-facebook-official"></i> Facebook (<span
                      class="fb-comments-count fb_comments_count_zero_fluid_desktop"
                      data-href="https://nettruyenco.vn/nha-tu-vi-thanh-nien"
                      fb-xfbml-state="parsed"
                      fb-iframe-plugin-query="app_id=614071474159716&amp;container_width=0&amp;count=true&amp;height=100&amp;href=https%3A%2F%2Fnettruyenco.vn%2Fnha-tu-vi-thanh-nien&amp;locale=en_US&amp;sdk=joey&amp;version=v16.0&amp;width=550"
                      ><span class="fb_comments_count">0</span></span
                    >)
                  </a>
                </li>
              </ul>
              <div class="tab-content">
                <div id="fb_comments" class="tab-pane fade">
                  <div class="comment">
                    <div
                      class="fb-comments fb_iframe_widget fb_iframe_widget_fluid_desktop"
                      data-width="100%"
                      data-numposts="5"
                      data-colorscheme="light"
                      data-href="https://nettruyenco.vn/nha-tu-vi-thanh-nien"
                      fb-xfbml-state="rendered"
                      fb-iframe-plugin-query="app_id=614071474159716&amp;color_scheme=light&amp;container_width=0&amp;height=100&amp;href=https%3A%2F%2Fnettruyenco.vn%2Fnha-tu-vi-thanh-nien&amp;locale=en_US&amp;numposts=5&amp;sdk=joey&amp;version=v16.0&amp;width="
                      style="width: 100%"
                    >
                      <span style="vertical-align: bottom; width: 100%; height: 0px"
                        ><iframe
                          name="ff222db1269a54f86"
                          width="1000px"
                          height="100px"
                          data-testid="fb:comments Facebook Social Plugin"
                          title="fb:comments Facebook Social Plugin"
                          frameborder="0"
                          allowtransparency="true"
                          allowfullscreen="true"
                          scrolling="no"
                          allow="encrypted-media"
                          src="https://www.facebook.com/v16.0/plugins/comments.php?app_id=614071474159716&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df72908b339bd6f456%26domain%3Dnettruyenviet.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fnettruyenviet.com%252Ff75a587d7d92ca402%26relation%3Dparent.parent&amp;color_scheme=light&amp;container_width=0&amp;height=100&amp;href=https%3A%2F%2Fnettruyenco.vn%2Fnha-tu-vi-thanh-nien&amp;locale=en_US&amp;numposts=5&amp;sdk=joey&amp;version=v16.0&amp;width="
                          style="border: none; visibility: visible; width: 100%; height: 0px"
                          class=""
                        ></iframe
                      ></span>
                    </div>
                  </div>
                </div>
                <div id="nt_comments" class="tab-pane fade in active">
                  <div class="mrt5" style="color: red; font-size: 12px; font-style: italic">
                    Bình luận không được tính để tăng cấp độ. Tài khoản không bình luận được là do:
                    avatar nhạy cảm, spam link hoặc chưa đủ cấp độ.
                  </div>
                  <div class="comment-wrapper">
                    <div
                      class="placeholder"
                      onclick="if (!window.__cfRLUnblockHandlers) return false; openComment(this)"
                    >
                      Mời bạn thảo luận, vui lòng không spam, share link kiếm tiền, thiếu lành
                      mạnh,... để tránh bị khóa tài khoản
                    </div>
                    <div id="comment_form"></div>
                    <div class="mrt10 mrb5">
                      <span class="sort-comments comment-action">
                        <i class="icons"></i>Mới nhất
                      </span>
                    </div>
                    <div class="comment-list hidden"></div>
                    <div class="comment-list comment-default">
                      <div class="item clearfix" id="comment_3259">
                        <figure class="avatar avatar-wrap">
                          <img
                            onerror="this.onerror=null; this.src='//st.ntcdntempv3.com/data/siteimages/anonymous.png';"
                            src="https://nettruyenviet.com/assets/images/avatar-comment-default.jpg"
                            alt="Culi Nettruyen"
                            class="lazy"
                            data-original="https://nettruyenviet.com/assets/images/avatar-comment-default.jpg"
                          />
                        </figure>
                        <div class="summary">
                          <i class="fa fa-angle-left fa-arrow"></i>
                          <div class="info">
                            <div class="comment-header">
                              <span class="authorname name-1">CuLi Nettruyen</span>
                              <span class="member level-2">
                                <span data-level="2">Cấp 2</span>
                                <span class="progress-bar" style="width: 0%"></span>
                              </span>
                              <span class="cmchapter"></span>
                            </div>
                            <div class="comment-content">
                              <img
                                src="https://4.bp.blogspot.com/_1Jw2fzSntT0/TdAAqRNO3PI/AAAAAAAABqY/zpZuo37H7LM/s128/7.gif"
                                alt="emo"
                              />
                              Bình luận ở bên dưới, click vào Xem thêm bình luận để xem!
                            </div>
                          </div>
                          <ul class="comment-footer">
                            <li>
                              <span> <i class="fa fa-comment"> </i> Trả lời</span>
                            </li>
                            <li>
                              <span class="vote-up">
                                <i class="fa fa-thumbs-up"> </i>
                                <span class="vote-up-count">0</span>
                              </span>
                            </li>
                            <li class="comment-more-wrap">
                              <span class="more-action">
                                <i class="fa fa-ellipsis-h"> </i>
                              </span>
                              <ul class="comment-more hidden">
                                <li><span>Xóa</span></li>
                              </ul>
                            </li>
                            <li>
                              <abbr title="2024-07-16 11:08:18">
                                <i class="fa fa-clock-o"> </i> 0 phút trước</abbr
                              >
                            </li>
                          </ul>
                          <div id="comment_form_3259"></div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="ctl00_mainContent_divPager"
                      class="pagination-outter commentpager hidden"
                    ></div>
                  </div>
                </div>
              </div>
              <a
                class="view-more join-comment"
                onclick="if (!window.__cfRLUnblockHandlers) return false; joinComment()"
              >
                <i class="fa fa-comments"> </i> Xem thêm bình luận</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { getMangaBySlug, getMangaContent, type TManga } from '@/services/manga/manga'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

let chapter = route.params.chapter as string
const chap = ref<string>(chapter.trim().split('-')[1])
chapter = chapter.trim().split('-')[1]
const pathUrl = ref<string>('')
const chapterImages = ref<string[]>([])

const manga = ref<TManga>({})
const breadcrumb = ref()
const fetchMangaBySlug = async () => {
  const data = await getMangaBySlug(route.params.slug as string)
  const urlChapter = data.data.data.item.chapters[0].server_data[chapter].chapter_api_data

  manga.value = data.data.data.item
  const dataChapter = await getMangaContent(urlChapter)
  const domainCdn = dataChapter.data.data.domain_cdn
  const chapterPath = dataChapter.data.data.item.chapter_path
  pathUrl.value = `${domainCdn}/${chapterPath}/`

  chapterImages.value = dataChapter.data.data.item.chapter_image

  console.log('dataChapter', dataChapter.data.data)
}

onMounted(fetchMangaBySlug)
</script>
