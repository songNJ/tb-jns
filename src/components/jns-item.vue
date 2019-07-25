<template>
  <div class="jns-item">
    <div class="item-nav">
      <div class="nav-left">电视剧</div>
      <div class="nav-right">更多</div>
    </div>

    <ul class="item-content">
      <li class="item-main" v-for="item in 6" :key="item">
        <div class="item-img">
          <img src="//liangcang-material.alicdn.com/prod/upload/dfae1d60c49642e79c1267b373486649.gif?x-oss-process=image/resize,w_750/format,webp/interlace,1" alt="">
          <div class="img-icon">独播</div>
          <div class="img-desc">更新至29集</div>
          <!-- <div class="img-score">9.0</div> -->
        </div>

        <div class="item-title">长安十二时辰</div>
        <div class="item-desc">雷佳音千玺守护长安</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less">
.jns-item {
  .item-nav {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 44px;
    font-size:15px;
    font-weight: 500;
    padding: 0 10px;
  }

  .item-content {
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .item-main {
    display: flex;
    flex-direction: column;
  }

  .item-img {
    box-sizing: border-box;
    position: relative;

    img{
      width:123px;
      height: 184px;
      outline: none;
      vertical-align: top;
    }

    .img-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      font-size: 11px;
      right: 5px;
      top: 10px;
      color: #fff;
      border-radius: 2px;
      text-align: center;
      padding: 0 3px;
      height: 16px;
      background-color: rgba(249,34,83,.9);
    }

    .img-desc {
      position: absolute;
      bottom: 10px;
      right: 5px;
      font-size: 11px;
      color: #fff;
      text-align: right;
      line-height: 11px;
    }

    .img-score {
      position: absolute;
      bottom: 10px;
      right: 5px;
      font-size: 11px;
      color: rgb(255, 102, 0);
      text-align: right;
      line-height: 11px;
    }
  }

  .item-title {
    padding-left: 9px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    // z-index: 99;
    font-size: 15px;
    color: #000;
    margin-top: 10px;
    height: 25px;
    line-height: 25px;
  }
  .item-desc {
    font-size: 13px;
    color: #999;
    margin-bottom: 20px;
    padding-left: 9px;
    width: 110px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    // z-index: 99;
  }
}
</style>
