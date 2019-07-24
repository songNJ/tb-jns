<template>
  <div class="jns-swipe">
    <van-swipe :autoplay="2000">
      <van-swipe-item
        v-for="(img, index) in swipeList"
        :key="index">
        <img v-lazy="img.imgUrl" />
        <div class="swipe-content">
          <p class="swipe-title">{{img.name}}</p>
          <p class="swipe-value">{{img.descript}}</p>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  data () {
    return {
      swipeList: [
        {
          name: '九州缥缈录',
          descript: '姬野受伤，羽然落泪',
          imgUrl: 'http://liangcang-material.alicdn.com/prod/upload/4255e49ac7434e6f8568eadfe49b9889.jpg?x-oss-process=image/resize,w_1242/format,webp/interlace,1',
          url: ''
        },
        {
          name: '请赐我一双翅膀',
          descript: '全城通缉，鞠敬伟出逃',
          imgUrl: 'http://liangcang-material.alicdn.com/prod/upload/8f38b6098e0240b59906e5aeb0946ad4.jpg?x-oss-process=image/resize,w_1242/format,webp/interlace,1',
          url: ''
        }
      ]
    }
  }
}
</script>

<style lang="less">
.jns-swipe {
  img{
    width: 100%;
    height:188px;
  }
  .van-swipe {
    height: 188px;
    position: relative;
  }
  .swipe-content {
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 20px;
    left: 15px;
    color: #fff;
    z-index: 99;
  }
  .swipe-title {
    // width: 3.2rem;
    // white-space: nowrap;
    // overflow: hidden;
    // text-overflow: ellipsis;
    font-size: 18px;
    line-height: 1.5;
  }
  .swipe-value {
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    line-height: 1.5;

  }
}
</style>
