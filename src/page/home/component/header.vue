<template>
  <div class="header-wrapper">
    <div class="header-left"><div class="iconfont iconback"></div></div>
    <div class="header-input"><span class="iconfont iconsearch"></span>输入城市/景点/游玩主题</div>
    <div class="header-right">城市<span class="iconfont icontriangle-down arrow-icon"></span></div>
  </div>
</template>

<script>
export default {
  name: 'homeHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~@assets/style/varibles.styl'
  .header-wrapper
    background :$bgColor
    color : #ffffff
    display:flex
    // width:100%
    line-height:.86rem
    .header-left
      width:.64rem
      float left
      text-align center
      font-size .4rem
    .header-input
      flex:1;
      background  #ffffff
      border-radius .1rem
      margin-top .12rem
      margin-left .1rem
      padding-left .12rem
      height .62rem
      color #cccccc
      line-height .62rem
    .header-right
      width:1.24rem
      float: right
      text-align center
      .arrow-icon
        font-size .15rem
        margin-left .05rem
</style>
