<template>
  <div class="personal">
    <Search></Search>
    <div class="user-head">
      <div style="display:flex">
        <img class="user-bgc" src="http://static.youku.com/u/img/mobile/avatar/channel_owner_default_img.jpg" alt="">
      </div>

      <div class="user-info">
        <img class="user-icon" src="https://static.youku.com/lvip/img/avatar/310/33.png">
        <div class="info-more">
          <p class="user-name">
            <span>啦啦啦初夏</span>
            <i class="user-gender"></i>
          </p>
          <p class="user-more">
            <span>永久</span>
          </p>
        </div>
      </div>

      <ul class="tab">
        <li v-for="(item, index) in navList" :key="index" @click="tabValue=index">
          <span :class="{active:tabValue===index}">{{item}}</span>
        </li>
      </ul>
    </div>

    <ul class="content">
      <li>

      </li>
    </ul>
  </div>
</template>
<script>
import Search from '@/components/jns-head'
export default {
  components: {
    Search
  },
  data () {
    return {
      navList: ['评 论', '视 频'],
      tabValue: 0
    }
  }
}
</script>
<style lang="less">
.personal{
  .user-head {
    background-color:#fff;
  }

  .user-bgc {
    height: 140px;
  }

  .user-info {
    position: relative;
    height: 50px;
  }

  .user-icon {
    width: 72px;
    position: absolute;
    top: -35px;
    left: 12px;
  }
  .info-more {
    color: #333333;
    padding-top: 6px;
    margin-left: 96px;
    font-size: 16px;
    .user-name {
      display: flex;
      align-items: center;
      line-height: 1;
    }
    .user-gender {
      margin-left: 3px;
      display: inline-block;
      height: 22px;
      width: 22px;
      background: url(//www.iqiyipic.com/common/fix/h5-aura/space-user-icon.png) no-repeat;
      background-position: -22px 0;
      background-size: auto 22px;
    }
    .user-more {
      color: #b6b8b9;
      font-size: 10px;
      margin-top: 3px;
    }
  }
  .tab {
    display: flex;
    justify-content: center;
    height: 42px;

    li {
      text-align: center;
      height: 42px;
      line-height: 42px;
      vertical-align: middle;
      font-size: 16px;
      letter-spacing: normal;
      word-spacing: normal;
      display: inline-block;
      width: 24.9%;
      color: #666666;
      display: flex;
      justify-content: center;
    }

    span {
      padding: 0 6px;
    }
  }
  .active {
    color:#2fb3ff;
    border-bottom: 2px solid #2fb3ff;
  }
  .content {
    background-color:#fff;
    margin-top: 12px;
  }
}
</style>
