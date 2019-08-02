<template>
  <div class="head">
    <!-- 头部 -->
    <div class="search">
      <!-- logo -->
      <img class="logo" src="../assets/image/logo.png" alt="logo" @click="$router.push({name:'index'})">
      <!-- 无输入框头部 -->
      <div class="right" v-if="!myIsShow">
        <div class="search-box" @click="searchBox">
          <van-icon class-prefix="search-icon" name="extra" />
        </div>

        <div class="his-box">
          <van-icon class-prefix="his-icon" name="extra" />
        </div>

        <div class="self-box" @click="$router.push({name:'login'})">
          <img src="https://img.alicdn.com/tfs/TB10zdbXL5TBuNjSspmXXaDRVXa-44-44.png" alt="">
        </div>
      </div>
      <!-- 输入框头部 -->
      <div class="right-all" v-if="myIsShow">
        <div class="search-inp">
          <input type="search"
          ref="search"
          v-focus="focusState"
          v-model="searchValue"
          @input="query"
          @focus="isShowWrap"
          @search="search">

          <van-icon v-if="searchValue" class-prefix="clear-icon" name="extra" @click="clearValue"/>
        </div>
        <p v-show="searchValue" @click="search">搜索</p>
        <p v-show="!searchValue" @click="myIsShow=false;myShowWrap=false">取消</p>
      </div>
    </div>

    <div class="search-wrap" v-show="myShowWrap">
      <!-- 模糊搜索推荐列表 -->
      <ul class="suggest" v-show="searchValue">
        <li class="suggest-list" v-for="(item, index) in suggestList" :key="index" @click="chooseItem(item.name)">
          {{item.name}}
        </li>
      </ul>
      <!-- 历史记录及热门推荐 -->
      <div class="record" v-show="!searchValue">
        <div class="his-tip" v-if="hisList.length">
          <div class="his-left">
            <i class="tip-icon"></i>
            搜索历史
          </div>

          <div class="his-right" @click="clearHis">
            清除记录
          </div>

        </div>

        <ul class="history">
          <div class="title"></div>
          <li class="his-list" v-for="(item, index) in hisList" :key="index" @click="chooseItem(item)">
            {{item}}
          </li>
        </ul>

        <div class="hot-tip">
          <i class="tip-icon"></i>
          大家都在搜
        </div>

        <ul class="hot-search">
          <li class="hot-list" v-for="(item, index) in hotList" :key="index" @click="chooseItem(item.name)">
            <i class="hot-icon">{{index+1}}</i>

            <p class="hot-title">{{item.name}}</p>
          </li>
        </ul>
      </div>

      <div class="search-close" @click="myShowWrap=false">
        关闭
      </div>
    </div>
  </div>
</template>
<script>
export default {
  directives: {
    focus: {
      inserted: function (el, binding) {
        if (binding.value) {
          el.focus()
        }
      }
    }
  },
  props: {
    value: String,
    isShow: {
      type: Boolean,
      default: false
    },
    showWrap: {
      type: Boolean,
      default: false
    }
  },
  model: {
    prop: 'value',
    event: 'input'
  },
  data () {
    return {
      myIsShow: this.isShow,
      myShowWrap: this.showWrap,
      focusState: false,
      searchValue: this.value,
      hisList: JSON.parse(localStorage.getItem('hisList') || '[]'),
      hotList: [
        {
          name: '长安十二时辰'
        },
        {
          name: '长安十二时辰'
        },
        {
          name: '长安十二时辰'
        },
        {
          name: '长安十二时辰'
        },
        {
          name: '长安十二时辰'
        }
      ],
      suggestList: []
    }
  },
  // isShow及showWrap双向绑定
  watch: {
    isShow (val) {
      this.myIsShow = val
    }
  },
  methods: {
    /**
     * 搜索框input事件，用以实现父组件v-model
     * @method query
     * @param {Event} event 搜索框input事件
     */
    query (event) {
      this.$emit('input', event.target.value)
      this.suggestList = []
      if (event.target.value) {
        this.getHisList(event.target.value)
      } else {
        this.myShowWrap = true
      }
    },
    /**
     * 模糊搜索功能，input事件触发
     * @method getHisList
     * @param {String} value input事件返回的value
     */
    getHisList (value) {
      const params = {
        searchValue: value
      }
      this.myShowWrap = false
      this.$Http.getHisList(params).then(resp => {
        this.suggestList = resp.list
        if (this.suggestList.length) {
          this.myShowWrap = true
        }
      })
    },
    /**
     * 搜索事件方法
     * @method search
     */
    search () {
      this.myShowWrap = false
      // 判空
      if (!this.searchValue) {
        this.myIsShow = false
        return
      }
      this.$emit('search', this.searchValue)
      this.$router.push({
        name: 'search',
        query: { searchValue: this.searchValue }
      })
      this.saveHis()
    },
    /**
     * 点击搜索时将记录存入浏览器localstorage
     * @method saveHis
     */
    saveHis () {
      if (!localStorage.getItem('hisList')) {
        localStorage.setItem('hisList', JSON.stringify([]))
      }
      this.hisList = JSON.parse(localStorage.getItem('hisList') || '[]')
      // 去重
      this.hisList = this.hisList.filter(item => {
        if (item !== this.searchValue) {
          return item
        }
      })
      // 将搜索的值提升到最前
      this.hisList.unshift(this.searchValue)
      // 保持长度为6
      if (this.hisList.length > 6) {
        this.hisList = this.hisList.slice(0, 6)
      }
      localStorage.setItem('hisList', JSON.stringify(this.hisList))
    },
    /**
     * 选择热门推荐或历史记录时执行搜索
     * @method chooseItem
     * @param {String} value 选择的历史记录或热门推荐剧名
     */
    chooseItem (value) {
      this.searchValue = value
      this.search()
    },
    /**
     * 清除历史记录方法
     * @method clearHis
     */
    clearHis () {
      this.hisList = []
      localStorage.removeItem('hisList')
    },
    searchBox () {
      this.focusState = true
      this.myIsShow = true
    },
    clearValue () {
      this.searchValue = ''
      this.$refs.search.focus()
    },
    isShowWrap () {
      if (this.searchValue) {
        if (this.suggestList.length) {
          this.myShowWrap = true
        }
      } else {
        this.myShowWrap = true
      }
    }
  }
}
</script>
<style lang="less" scope>
.head {
  height: 44px;

  @font-face {
    font-family: 'iconfont';
    src: url('../assets/ttf/iconfont.ttf') format('truetype');
  }

  .search-icon {
    display: flex;
    font-family: "iconfont";
    font-style: normal;
    font-weight: normal;
    line-height: 1;
    color: rgb(64,64,64);
  }

  .search-icon-extra::before {
    font-size:23px;
    content: "\e83a";
  }

  .his-icon {
    display: flex;
    font-family: "iconfont";
    font-style: normal;
    font-weight: normal;
    line-height: 1;
    color: rgb(64,64,64);
  }

  .his-icon-extra::before {
    font-size:24px;
    content: "\e83b";
  }
  .clear-icon {
    display: flex;
    position: absolute;
    top:50%;
    margin-top: -11px;
    right: 3px;
    font-family: "iconfont";
    font-style: normal;
    font-weight: normal;
    line-height: 1;
    color: rgb(200,200,200);
  }

  .clear-icon-extra::before {
    font-size:22px;
    content: "\e607";
  }

  .search{
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    // align-items: center;
    height: 44px;
    padding: 0 15px;

    .logo {
      width: 84px;
      align-self:center;
    }
  }

  .right {
    margin-right: -10px;
    display: flex;

    img {
      width: 22px;
    }

    div {
      padding:0 10px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .right-all {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    .search-inp {
      flex:1;
      display: flex;
      align-items: center;
      position: relative;
    }

    input {
      box-sizing: border-box;
      border:0;
      width: 100%;
      height: 30px;
      flex:1;
      margin-left: 15px;
      border-radius: 100px;
      font-family: "Microsoft YaHei",SimHei,helvetica,arial,verdana,tahoma,sans-serif;
      font-size: 14px;
      background: rgba(0,0,0,.06);
      padding-left: 30px;
      padding-right: 27px;
      outline: 0;
      background:url("../assets/image/search.png") 6px 6px no-repeat;
      background-size:17px;
      background-color: rgba(0,0,0,.06)
    }

    input[type=search]::-webkit-search-cancel-button{
      -webkit-appearance: none;
    }

    p {
      margin-left: 15px;
      font-size: 16px;
      white-space:nowrap;
    }
  }

  .search-wrap {
    position: relative;
    z-index: 999 !important;
    box-sizing: border-box;
    background-color: rgba(255,255,255,1);

    .his-tip {
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 44px;
      padding: 10px;
    }

    .his-left {
      display: flex;
      align-items: center;
      line-height: 24px;
      font-size: 14px;
      font-style: normal;
      color: #909090;
    }

    .his-right {
      color: #e72916;
      font-size: 13px;
    }

    .history {
      display: flex;
      flex-wrap:wrap ;
      width: 100%;
    }

    .his-list {
      box-sizing: border-box;
      padding-left: 10px;
      flex: 1;
      flex-basis:45%;
      color: #222;
      font-size: 14px;
      height: 29px;
      line-height: 29px;
    }

    .hot-tip {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      width: 100%;
      height: 44px;
      padding: 10px;
      line-height: 24px;
      font-size: 14px;
      font-style: normal;
      color: #909090;
    }

    .tip-icon {
      display: block;
      margin-right: 5px;
      width: 3px;
      height: 12px;
      background-color: #3593e3;
    }

    .suggest-list {
      box-sizing: border-box;
      padding: 10px;
      height: 44px;
      font-size: 14px;
      color: #222;
      display: flex;
      align-items: center;
    }
    .hot-list {
      box-sizing: border-box;
      height: 44px;
      padding: 10px;
      display: flex;
      align-items: center;

      &:nth-child(1) .hot-icon {
        background-color: #ff3c3c;
      }
      &:nth-child(2) .hot-icon {
        background-color: #ff733c;
      }
      &:nth-child(3) .hot-icon {
        background-color: #ffa63c;
      }
    }

    .hot-icon {
      margin-right: 10px;
      width: 13px;
      height: 100%;
      background: #ccc;
      color: #fff;
      font-style: normal;
      font-family: Arial;
      font-size: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .hot-title {
      font-size: 14px;
      color: #222;
    }

    .search-close {
      width: 100%;
      height: 44px;
      line-height: 44px;
      background: #f5f5f5;
      text-align: center;
      color: #222;
      font-size: 15px;
    }
  }
}
</style>

<style lang="less">
.van-search {
  padding: 0;
}
</style>
