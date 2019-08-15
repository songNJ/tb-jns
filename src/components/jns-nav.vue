<template>
  <div class="jns-nav">
    <div class="nav-main-list" v-show="isMain">
      <ul class="nav-main">
        <li
          v-for="(item, index) in navTypeList"
          :key="index"
          :class="current(item.navType)"
          @click="change(item.navType)"
        >
          {{item.typeName}}
          <i class="bottom-icon" v-if="value===item.navType"></i>
        </li>
      </ul>

      <div class="more-icon">
        <img
          src="https://img.alicdn.com/tfs/TB18vFaXGmWBuNjy1XaXXXCbXXa-44-44.png"
          alt
          @click="isMain=false"
        />
      </div>
    </div>

    <div class="nav-all-list" v-show="!isMain">
      <ul class="nav-all">
        <li v-for="(item, index) in navTypeListAll" :key="index" @click="change(item.navType)">
          {{item.typeName}}
          <img
            v-if="index===5"
            src="https://img.alicdn.com/tfs/TB1qJ0cXKuSBuNjy1XcXXcYjFXa-44-44.png"
            alt
            @click="isMain=true"
          />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: ['value'],
  computed: {
    navTypeListAll () {
      let a = [...this.navTypeList]
      a.splice(5, 0, { navType: '' })
      console.log(a)
      return a
    }
  },
  data () {
    return {
      isCurrent: '',
      isMain: true,
      navTypeList: [
        {
          navType: 'index',
          typeName: '主页'
        },
        {
          navType: 'tv',
          typeName: '剧集'
        },
        {
          navType: 'movie',
          typeName: '电影'
        },
        {
          navType: 'member',
          typeName: '会员'
        },
        {
          navType: 'Variety',
          typeName: '综艺'
        },
        {
          navType: 'music',
          typeName: '音乐'
        },
        {
          navType: 'comic',
          typeName: '动漫'
        },
        {
          navType: 'juvenile',
          typeName: '少儿'
        },
        {
          navType: 'funny',
          typeName: '搞笑'
        },
        {
          navType: 'Variety',
          typeName: '综艺'
        },
        {
          navType: 'music',
          typeName: '音乐'
        },
        {
          navType: 'comic',
          typeName: '动漫'
        },
        {
          navType: 'juvenile',
          typeName: '少儿'
        },
        {
          navType: 'funny',
          typeName: '搞笑'
        }
      ]
    }
  },
  methods: {
    change (value) {
      if (value !== '') {
        this.$emit('change', value)
      }
    },
    current (value) {
      return value === this.value ? 'current' : ''
    }
  }
}
</script>
<style lang="less">
.jns-nav {
  background-color:#fff;

  img {
    width: 22px;
    align-self: flex-start;
  }

  .nav-main-list {
    position: relative;
    display: flex;
    box-sizing: border-box;
    padding: 14px 0 10px 0;

    .nav-main {
      width: 80%;
      box-sizing: border-box;
      display: flex;
      margin-left: 15px;
      overflow-x: scroll;
      -webkit-overflow-scrolling: touch;
      font-size: 16px;
      &::-webkit-scrollbar-track {
        //    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.1);
        background-color: transparent;
      }

      &::-webkit-scrollbar {
        background-color: transparent;
      }

      &::-webkit-scrollbar-thumb {
        //    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: transparent;
      }
      li {
        position: relative;
        flex-shrink: 0;
        width: 32px;
        height: 25px;
        position: relative;
        margin-right: 30px;
        white-space: nowrap;

        .bottom-icon {
          position: absolute;
          width: 19px;
          height: 2px;
          background: #2692ff;
          bottom: 0;
          left: 50%;
          margin-left: -9.5px;
        }
      }

      .current {
        color: #2692ff;
      }

      &::-webkit-scrollbar {
        display: none;
      }
    }

    .more-icon {
      flex: 1;
      display: flex;
      justify-content: center;
      box-sizing: border-box;
      padding-right: 8px;
    }

    &::after {
      display: block;
      content: "";
      position: absolute;
      width: 16%;
      height: 100%;
      right: 48px;
      bottom: 0;
      pointer-events: none;
      background-image: linear-gradient(
        -90deg,
        #fff 0,
        rgba(255, 255, 255, 0.9) 30%,
        rgba(255, 255, 255, 0) 100%
      );
    }
  }

  .nav-all-list {
    box-sizing: border-box;
    display: flex;
    padding: 14px 0 0 0;

    .nav-all {
      display: flex;
      flex-wrap: wrap;
      margin-right: 0;
      padding-bottom: 0;
      font-size: 16px;
      text-align: center;

      li {
        margin: 0 15px;
        flex-shrink: 0;
        width: 32px;
        height: 39px;
        white-space: nowrap;
      }
    }
  }
}
</style>
