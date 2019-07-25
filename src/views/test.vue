<template>
  <div class="test">
    <Swipe></Swipe>
    <Item></Item>
  </div>
</template>
<script>
import Swipe from '@/components/jns-swipe'
import Item from '@/components/jns-item'
export default {
  components: {
    Swipe,
    Item
  }
}
</script>
<style lang="less">
.test {
  height: calc(100vh - 94px);
  overflow: auto;
}
</style>
