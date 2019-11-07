<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
import homeHeader from './component/header'
import homeSwiper from './component/swiper'

export default {
  name: 'home',
  components: {
    homeHeader,
    homeSwiper
  }
}
</script>

<style>

</style>
