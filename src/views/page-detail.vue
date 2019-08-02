<template>
  <div class="page-detail">
    <Search></Search>
    <div class="video" style="width:100%;">
      <video src="../assets/video/画.mp4" controls="controls"></video>
    </div>
    <div class="main-value">
      <div class="title-box">
        <div class="title-main">
          <div class="title-icon">vip</div>

          <p class="title">长安十二时辰</p>

          <div class="intro-flag" @click="dealIcon">
            <p>简介</p>
            <img :class="isDown" src="../assets/image/down.png" style="width:12px;margin-left:8px;transition: transform .4s;" alt="">
          </div>
        </div>

        <div class="desc">
          <p>都市 爱情 更新至35集</p>
        </div>
      </div>

      <div v-if="showDetail" class="intro-detail">
        <div class="intro-title">
          <p class="director">导演：曹盾</p>
          <p class="actor">主演：雷佳音,易烊千玺,周一围,芦芳生,热依扎,王鹤润,杰曼·翰苏,韩童生,李媛,余皑磊,艾如,蔡鹭,赵魏,冯嘉怡,吕凉,吴晓亮,徐璐,高叶,王思思,曲栅栅</p>
        </div>
        <p class="intro-value">
          张小敬出身军伍，后受任为主管侦缉逮捕的官差“不良人”，长期协调维护地方安全工作，但却遭陷害被关押于狱中。负责长安城治安的靖安司发现了混入城内的可疑人员，由于张小敬对事发地点人事与地理的熟悉，靖安司特例委派张小敬戴罪立功、侦破此案。经过张小敬的一番调查，发现敌人的阴谋是为了在上元节晚上的集会中制造混乱。距离上元节花灯大会只剩下短短的几个时辰了，张小敬必须在上元节花灯大会前抓住搞破坏的刺客。在调查与追捕中张小敬还发现靖安司中竟然有敌人的内应，在一次次的斗智斗勇中，张小敬终于在最后关头揭穿了背后主谋，阻止了破坏的发生，解救了长安城里的黎民百姓。
        </p>
      </div>

      <div class="sharebox">
        <div class="remark">
          <img class="remark-icon" src="https://gw.alicdn.com/tfs/TB1bExvGFzqK1RjSZSgXXcpAVXa-144-144.png"  alt="">
        </div>
        <div class="share"></div>
      </div>
    </div>
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
      isDown: '',
      showDetail: false
    }
  },
  methods: {
    dealIcon () {
      this.isDown = this.isDown === '' ? 'flag-icon' : ''
      this.showDetail = !this.showDetail
    }
  },
  created () {
  }
}
</script>

<style lang="less">
.page-detail {
  .video {
    display: flex;
  }
  video {
    width:100%;
    height:210.94px;
  }

  .main-value {
    box-sizing: border-box;
    padding: 15px 0;

    .title-box {
      border-bottom: 1px solid #f5f5f5;
      box-sizing: border-box;
      padding: 0 10px;
    }

    .title-main {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
    }

    .title-icon {
      font-size: 11px;
      line-height: 16px;
      text-align: center;
      color: #fff;
      background: #f92253;
      padding: 0 4px;
      border-radius: 3px;
      font-weight: 700;
      white-space: nowrap;
    }

    .title {
      height: 22px;
      background: 0;
      padding: 1px 4px;
      color: #333;
      font-size: 18px;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-weight: 700;
      font-family: "Microsoft YaHei",SimHei,helvetica,arial,verdana,tahoma,sans-serif;
    }
    .intro-flag {
      margin-left: auto;
      color: #333;
      display: flex;
      align-items: center;
      white-space: nowrap;
      font-size: 12px;
      font-weight: normal;
    }
    .desc {
      color: #666;
      font-size: 12px;
      margin-bottom: 12px;
      white-space: nowrap;
      line-height: 20px;
    }
    .flag-icon {
      transform: rotate(180deg);
    }
    .intro-detail {
      font-size: 14px;
      color: #999;
    }
    .intro-title {
      box-sizing: border-box;
      padding:15px 15px 0 10px;
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      line-height: 20px;
    }
    .director {
      margin-right: 25px;
    }
    .actor {
      width: 100%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .intro-value {
      box-sizing: border-box;
      padding: 15px 0 10px 10px;
      display: flex;
      letter-spacing: .3px;
      line-height: 23px;
    }
    .remark {

    }
    .remark-icon {
      width: 24px;
    }
  }
}
</style>
