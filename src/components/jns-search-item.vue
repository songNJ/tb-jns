<template>
  <div class="jns-search-item">
    <div class="item-left">
      <img class="item-img" :src="imgUrl" :alt="itemData.name">

      <div class="item-content">
        <div class="item-name">{{itemData.name}}</div>

        <div class="item-label">
          <span v-if="itemData.type">{{itemData.type}}</span>
          <span v-if="itemData.year">{{itemData.year}}</span>
          <span v-if="itemData.actor">{{itemData.actor}}</span>
        </div>

        <div class="item-desc">{{itemData.desc}}</div>
      </div>
    </div>

    <div class="item-right">
      {{itemData.score}}
    </div>
  </div>
</template>
<script>
export default {
  props: ['itemData'],
  data () {
    return {
      imgUrl: ''
    }
  },
  mounted () {
    this.imgUrl = this.itemData.imgUrl
  }
}
</script>
<style lang="less">
.jns-search-item {
  background-color:#fff;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eaeaea;

  .item-left {
    display: flex;
  }

  .item-img {
    width:60px;
    height: 90px;
  }

  .item-content {
    max-width: 200px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-left: 10px;
  }

  .item-name {
    font-size: 16px;
    color: #222;
    font-weight: normal;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .item-label {
    color: #999;
    font-size: 12px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    span {
      margin-right: 5px;
    }
  }

  .item-desc {
    font-size: 12px;
    color: #f60;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .item-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #fc4f1e;
    font-size: 16px;
  }
}
</style>
