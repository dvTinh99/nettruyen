<template>
  <header class="header" id="header">
    <div class="navbar">
      <div class="container">
        <div class="navbar-header">
          <div class="navbar-brand">
            <a class="logo" title="Truyện tranh online" :href="API_URL">
              <img alt="Logo NetTruyen" :src="`${API_URL}/images/logo-nettruyen.png`" />
            </a>
          </div>
          <div class="navbar-form navbar-left hidden-xs search-box comicsearchbox">
            <div class="input-group">
              <input
                type="text"
                class="searchinput form-control"
                placeholder="Tìm truyện..."
                autocomplete="off"
                value=""
              />
              <div class="input-group-btn">
                <input type="submit" value="" class="searchbutton btn btn-default" />
              </div>
            </div>
          </div>
          <i class="fa fa-lightbulb-o toggle-dark"></i>
          <div class="notifications">
            <a href="/Secure/Login.aspx" title="Thông báo"><i class="fa fa-comment"></i></a>
          </div>
          <button type="button" class="search-button-icon visible-xs" aria-label="Search">
            <i class="fa fa-search"></i>
          </button>
          <button type="button" class="navbar-toggle" aria-label="Menu">
            <i class="fa fa-bars"></i>
          </button>
        </div>
        <ul class="nav-account list-inline hidden-xs pull-right">
          <li class="dropdown">
            <a
              data-toggle="dropdown"
              class="user-menu fn-userbox dropdown-toggle"
              href="javascript:void(0)"
              ><i class="fa fa-user"></i> <span>Tài khoản</span> <i class="fa fa-caret-down"></i
            ></a>
            <ul class="dropdown-menu">
              <li class="login-link">
                <a rel="nofollow" href="/Secure/Login.aspx"><i class="fa fa-user"></i> Đăng nhập</a>
              </li>
              <li class="register-link">
                <a rel="nofollow" href="/Secure/Register.aspx"
                  ><i class="fa fa-pencil-square-o"></i> Đăng ký</a
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </header>
  <HeaderNavbar />
</template>
<script setup lang="ts">
import HeaderNavbar from './HeaderNavbar.vue'
const API_URL = import.meta.env.VITE_API_URL
</script>
