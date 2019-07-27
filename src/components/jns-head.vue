<template>
  <div class="head">
    <div class="search">
      <img src="../assets/image/logo.png" alt="">
      <input type="search"
      v-model="searchValue"
        @focus="isSearch=true"
        @input="query"
        @search="search">
      <p @click="search">搜索</p>
    </div>

    <div class="search-record" v-show="isSearch">
      <ul class="suggest" v-show="searchValue">
        <li class="suggest-list" v-for="(item, index) in suggestList" :key="index" @click="chooseItem(item.name)">
          {{item.name}}
        </li>
      </ul>

      <div class="record" v-show="!searchValue">
        <div class="his-tip">
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
          <li class="his-list" v-for="(item, index) in hisList" :key="index">
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

      <div class="search-close" @click="isSearch=false">
        关闭
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: String
  },
  model: {
    prop: 'value',
    event: 'input'
  },
  data () {
    return {
      searchValue: this.value,
      isSearch: false,
      hisList: [1, 2, 3, 4, 5, 6],
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
      suggestList: [
        {
          name: '杀破狼'
        },
        {
          name: '杀破狼'
        },
        {
          name: '杀破狼'
        }
      ]
    }
  },
  methods: {
    query (event) {
      this.$emit('input', event.target.value)
    },
    search () {
      this.isSearch = false
      this.$emit('search', this.searchValue)
    },
    saveHis () {
      let hisList = localStorage.getItem('hisList')
      localStorage.setItem('hisList', this.hisList)
    },
    chooseItem (value) {
      this.searchValue = value
      this.isSearch = false
      this.$emit('search', this.searchValue)
    },
    clearHis () {
      this.hisList = []
    }
  }
}
</script>
<style lang="less" scope>
.head {
  height: 44px;
  .search{
    box-sizing: border-box;
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 15px;

    img {
      width: 84px;
    }

    input {
      box-sizing: border-box;
      border:0;
      // width: 100%;
      flex:1;
      height: 30px;
      margin-left: 15px;
      border-radius: 100px;
      font-family: "Microsoft YaHei",SimHei,helvetica,arial,verdana,tahoma,sans-serif;
      font-size: 14px;
      background: rgba(0,0,0,.06);
      text-indent: 30px;
      outline: 0;
      background:url("../assets/image/search.png") 6px 6px no-repeat;
      background-size:17px;
      background-color: rgba(0,0,0,.06)
    }

    input[type="search"]::-webkit-search-cancel-button{
      margin-right: 10px;
    }

    p {
      margin-left: 15px;
      font-size: 16px;
    }
  }

  .search-record {
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
