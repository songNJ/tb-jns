
<template>
  <div id="app">
    <!-- <van-tabbar>
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar> -->
    <div class="loading" v-show="loading">
      <van-loading class="icon"/>
    </div>
    <router-view size="100px"/>
  </div>

</template>''

<script>
import { mapState } from 'vuex'
export default {
  name: 'App',
  computed: {
    loading () {
      return this.$store.state.app.loading
    }
  },
  mounted () {
    console.log(this.loading)
  }
}
</script>
<style lang="less">
#app {
  width: 100%;
  height: 100vh;
  background-color:#f4f4f4;
  overflow: hidden;

  .loading {
    position: fixed;
    top: 180px;
    left: 50%;
    margin-left: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 160px;
    background: rgba(0, 0, 0, 0.75);
    border-radius: 4px;
    z-index: 999999;

    .van-loading__spinner {
      width: 80px;
      height: 80px;
    }
  }
}
*{
  margin: 0;
  padding: 0;
}
ul,li{
  list-style: none;
}
</style>
