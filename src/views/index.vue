<template>
  <div class="index">
    <Search @search="search" v-model="searchValue"></Search>
    <Nav :value="value" @change="change"></Nav>
    <van-list>
      <Swipe></Swipe>
      <van-notice-bar color="#1989fa" background="#ecf9ff" mode="closeable" left-icon="volume-o">通知内容</van-notice-bar>
      <Item></Item>
    </van-list>
  </div>
</template>
<script>
import Search from '@/components/jns-head'
import Swipe from '@/components/jns-swipe'
import Item from '@/components/jns-item'
import Nav from '@/components/jns-nav'
export default {
  components: {
    Swipe,
    Item,
    Search,
    Nav
  },
  data () {
    return {
      value: 'index',
      searchValue: ''
    }
  },
  methods: {
    search () {
      this.$router.push({
        name: 'search',
        query: { searchValue: this.searchValue }
      })
    },
    change (value) {
      alert(value)
    }
  }
}
</script>
<style lang="less">
.index {
  .van-list {
    height: calc(100vh - 94px);
    overflow: auto;
    -webkit-overflow-scrolling:touch;
  }
}
</style>
