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
                          href="./tim-truyen/drama-103"
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
                    <a href="./truyen-tranh/ta-hoc-tram-than-trong-benh-vien-tam-than">
                      <span itemprop="name">Ta Học Trảm Thần Trong Bệnh Viện Tâm Thần</span>
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
                      href="./truyen-tranh/ta-hoc-tram-than-trong-benh-vien-tam-than/chuong-0"
                    >
                      Đọc từ đầu</a
                    >
                    <a
                      class="btn btn-warning mrb5"
                      href="./truyen-tranh/ta-hoc-tram-than-trong-benh-vien-tam-than/chuong-153"
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
                <i class="fa fa-file-text-o"> </i> Nội dung truyện Ta Học Trảm Thần Trong Bệnh Viện
                Tâm Thần trên NetTruyen
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
                      <a
                        href="./truyen-tranh/ta-hoc-tram-than-trong-benh-vien-tam-than/chuong-153"
                        data-id="153"
                        >Chapter {{ chapter.chapter_name }}</a
                      >
                    </div>
                    <div class="col-xs-4 no-wrap small text-center">2 ngày trước</div>
                  </li>
                </ul>
              </nav>
            </div>
          </article>
          <ul class="nav nav-tabs main-tab lazy-module" data-type="facebook">
            <li class="active">
              <a data-toggle="tab" href="#nt_comments">
                <i class="fa fa-comments"></i> NetTruyen (<span class="comment-count"></span>)
              </a>
            </li>
            <li>
              <a data-toggle="tab" href="#fb_comments">
                <i class="fa fa-facebook-official"></i> Facebook (<span
                  class="fb-comments-count fb_comments_count_zero fb_iframe_widget fb_iframe_widget_fluid_desktop"
                  data-href="https://nettruyenx.com/ta-hoc-tram-than-trong-benh-vien-tam-than"
                  fb-xfbml-state="rendered"
                  fb-iframe-plugin-query="app_id=614071474159716&amp;container_width=0&amp;count=true&amp;height=100&amp;href=https%3A%2F%2Fnettruyenx.com%2Fta-hoc-tram-than-trong-benh-vien-tam-than&amp;locale=en_US&amp;sdk=joey&amp;version=v16.0&amp;width=550"
                  ><span style="vertical-align: top; width: 0px; height: 0px; overflow: hidden"
                    ><iframe
                      name="fb18a6f9c01599134"
                      width="550px"
                      height="100px"
                      data-testid="fb:comments Facebook Social Plugin"
                      title="fb:comments Facebook Social Plugin"
                      frameborder="0"
                      allowtransparency="true"
                      allowfullscreen="true"
                      scrolling="no"
                      allow="encrypted-media"
                      src="https://www.facebook.com/v16.0/plugins/comments.php?app_id=614071474159716&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dfd72ac72447154ca8%26domain%3Dnettruyenviet.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fnettruyenviet.com%252Ff26507235520113b1%26relation%3Dparent.parent&amp;container_width=0&amp;count=true&amp;height=100&amp;href=https%3A%2F%2Fnettruyenx.com%2Fta-hoc-tram-than-trong-benh-vien-tam-than&amp;locale=en_US&amp;sdk=joey&amp;version=v16.0&amp;width=550"
                      style="border: none; visibility: visible; width: 0px; height: 0px"
                    ></iframe></span></span
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
                  data-href="https://nettruyenco.vn/ta-hoc-tram-than-trong-benh-vien-tam-than"
                  fb-xfbml-state="rendered"
                  fb-iframe-plugin-query="app_id=614071474159716&amp;color_scheme=light&amp;container_width=0&amp;height=100&amp;href=https%3A%2F%2Fnettruyenco.vn%2Fta-hoc-tram-than-trong-benh-vien-tam-than&amp;locale=en_US&amp;numposts=5&amp;sdk=joey&amp;version=v16.0&amp;width="
                  style="width: 100%"
                >
                  <span style="vertical-align: bottom; width: 100%; height: 0px"
                    ><iframe
                      name="f8f86ccdc5c864363"
                      width="1000px"
                      height="100px"
                      data-testid="fb:comments Facebook Social Plugin"
                      title="fb:comments Facebook Social Plugin"
                      frameborder="0"
                      allowtransparency="true"
                      allowfullscreen="true"
                      scrolling="no"
                      allow="encrypted-media"
                      src="https://www.facebook.com/v16.0/plugins/comments.php?app_id=614071474159716&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df875bc129a64c6dc9%26domain%3Dnettruyenviet.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fnettruyenviet.com%252Ff26507235520113b1%26relation%3Dparent.parent&amp;color_scheme=light&amp;container_width=0&amp;height=100&amp;href=https%3A%2F%2Fnettruyenco.vn%2Fta-hoc-tram-than-trong-benh-vien-tam-than&amp;locale=en_US&amp;numposts=5&amp;sdk=joey&amp;version=v16.0&amp;width="
                      class=""
                      style="border: none; visibility: visible; width: 100%; height: 0px"
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
                  Mời bạn thảo luận, vui lòng không spam, share link kiếm tiền, thiếu lành mạnh,...
                  để tránh bị khóa tài khoản
                </div>
                <div id="comment_form"></div>
                <div class="mrt10 mrb5">
                  <span class="sort-comments comment-action"> <i class="icons"></i>Mới nhất </span>
                </div>
                <div class="comment-list hidden"></div>
                <div class="comment-list comment-default">
                  <div class="item clearfix" id="comment_3259">
                    <figure class="avatar avatar-wrap">
                      <img
                        onerror="this.onerror=null; this.src='/assets/images/anonymous.png';"
                        src="./assets/images/avatar-comment-default.jpg"
                        alt="Culi Nettruyen"
                        class="lazy"
                        data-original="./assets/images/avatar-comment-default.jpg"
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
        <RightSideBar />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'
import RightSideBar from '@/components/RightSideBar.vue'

import { getMangaBySlug, type TManga } from '@/services/manga/manga'
import { onMounted, ref } from 'vue'
const route = useRoute()
const manga = ref<TManga>({})
const breadcrumb = ref()
const fetchMangaBySlug = async () => {
  const data = await getMangaBySlug(route.params.slug as string)
  manga.value = data.data.data.item as any
  breadcrumb.value = data.data.data.breadCrumb
}

onMounted(fetchMangaBySlug)
</script>
