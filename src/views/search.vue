<template>
  <div class="search">
    <Search
      v-model="searchValue"
      :isShow="isShow"
      @search="search">
    </Search>
    <van-list v-model="loading" :finished="finished" finished-text="-- 已加载完全部数据 --" @load="onLoad">
      <SearchItem
        v-for="(item, index) in searchData"
        :key="index"
        :itemData="item">
      </SearchItem>
    </van-list>
  </div>
</template>
<script>
import Search from '@/components/jns-head'
import SearchItem from '@/components/jns-search-item'
export default {
  components: {
    Search,
    SearchItem
  },
  data () {
    return {
      isShow: false,
      loading: false,
      finished: false,
      pageNo: 1,
      pageSize: 10,
      searchValue: this.$route.query.searchValue,
      searchData: [],
      searchList: [
        {
          imgUrl: 'https://r1.ykimg.com/050E00005D14B9EC1B7691A7F0024651',
          name: '长安十二时辰',
          // type: '电视剧',
          year: '2019',
          actor: '易烊千玺/雷佳音11111111111111111111111111111111111111111111',
          desc: '更新至32集',
          score: '9.9'
        },
        {
          imgUrl: 'https://r1.ykimg.com/050E00005D14B9EC1B7691A7F0024651',
          name: '长安十二时辰',
          type: '电视剧',
          year: '2019',
          actor: '易烊千玺/雷佳音',
          desc: '更新至32集'
        },
        {
          imgUrl: 'https://r1.ykimg.com/050E00005D14B9EC1B7691A7F0024651',
          name: '长安十二时辰',
          type: '电视剧',
          year: '2019',
          actor: '易烊千玺/雷佳音',
          desc: '更新至32集'
        },
        {
          imgUrl: 'https://r1.ykimg.com/050E00005D14B9EC1B7691A7F0024651',
          name: '长安十二时辰',
          type: '电视剧',
          year: '2019',
          actor: '易烊千玺/雷佳音',
          desc: '更新至32集'
        },
        {
          imgUrl: 'https://r1.ykimg.com/050E00005D14B9EC1B7691A7F0024651',
          name: '长安十二时辰',
          type: '电视剧',
          year: '2019',
          actor: '易烊千玺/雷佳音',
          desc: '更新至32集'
        },
        {
          imgUrl: 'https://r1.ykimg.com/050E00005D14B9EC1B7691A7F0024651',
          name: '长安十二时辰',
          type: '电视剧',
          year: '2019',
          actor: '易烊千玺/雷佳音',
          desc: '更新至32集'
        },
        {
          imgUrl: 'https://r1.ykimg.com/050E00005D14B9EC1B7691A7F0024651',
          name: '长安十二时辰',
          type: '电视剧',
          year: '2019',
          actor: '易烊千玺/雷佳音',
          desc: '更新至32集'
        }
      ]
    }
  },
  methods: {
    querySearchListFn () {
      const params = {
        pageNo: this.pageNo,
        pageSize: this.pageSize,
        searchValue: this.searchValue
      }
      this.loading = true
      this.$Http.querySearchList(params).then(resp => {
        this.searchData.push(...resp.searchData)
        this.loading = false
        if (this.searchData.length >= 50) {
          this.finished = true
          return
        }
        this.pageNo++
      })
    },
    search () {
      this.pageNo = 1
      this.finished = false
      this.searchData = []
      this.querySearchListFn()
    },
    onLoad () {
      this.querySearchListFn()
    }
  },
  mounted () {
    if (this.searchValue) {
      this.isShow = true
    }
  }
}
</script>
<style lang="less">
.search {
  .van-list {
    height: calc(100vh - 45px);
    overflow: auto;
  }
}
</style>
