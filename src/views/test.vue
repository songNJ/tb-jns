<template>
  <div class="test">
    <Swipe :autoplay="1500">
      <SwipeItem v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
        .
      </SwipeItem>
    </Swipe>
  </div>
</template>
<script>
import {Lazyload, Swipe, SwipeItem} from 'vant'
export default {
  components: {
    Lazyload,
    Swipe,
    SwipeItem

  },
  data () {
    return {
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ]
    }
  }
}
</script>

<style lang="less">
.test {
  img{
    width: 100%;
    height:188px;
  }
}
</style>
