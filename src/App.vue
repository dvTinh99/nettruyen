<template>
  <Header />
  <HeaderAds />
  <RouterView />
  <Footer />
</template>
<script setup lang="ts">
import Header from '@/layout/Header.vue'
import Footer from '@/layout/Footer.vue'
import HeaderAds from '@/components/HeaderAds.vue'
</script>
