
<template>
  <div id="app">
    <Head></Head>

    <van-tabbar>
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>

    <router-view />
  </div>

</template>

<script>
import Head from '@/components/jns-head'
export default {
  name: 'App',
  components: {
    Head
  }
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
}
ul,li{
  list-style: none;
}
</style>
