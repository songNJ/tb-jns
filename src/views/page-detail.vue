<template>
  <div class="page-detail">
    <Search></Search>
    <div class="video" style="width:100%;">
      <!-- <video src="../assets/video/画.mp4" controls="controls"></video> -->
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

      <div v-show="showDetail" class="intro-detail">
        <div class="intro-title">
          <p class="director">导演：曹盾</p>
          <p class="actor">主演：雷佳音,易烊千玺,周一围,芦芳生,热依扎,王鹤润,杰曼·翰苏,韩童生,李媛,余皑磊,艾如,蔡鹭,赵魏,冯嘉怡,吕凉,吴晓亮,徐璐,高叶,王思思,曲栅栅</p>
        </div>
        <p class="intro-value">
          张小敬出身军伍，后受任为主管侦缉逮捕的官差“不良人”，长期协调维护地方安全工作，但却遭陷害被关押于狱中。负责长安城治安的靖安司发现了混入城内的可疑人员，由于张小敬对事发地点人事与地理的熟悉，靖安司特例委派张小敬戴罪立功、侦破此案。经过张小敬的一番调查，发现敌人的阴谋是为了在上元节晚上的集会中制造混乱。距离上元节花灯大会只剩下短短的几个时辰了，张小敬必须在上元节花灯大会前抓住搞破坏的刺客。在调查与追捕中张小敬还发现靖安司中竟然有敌人的内应，在一次次的斗智斗勇中，张小敬终于在最后关头揭穿了背后主谋，阻止了破坏的发生，解救了长安城里的黎民百姓。
        </p>
      </div>

      <div class="share-box">
        <div class="remark-flag">
          <img class="remark-icon" src="https://gw.alicdn.com/tfs/TB1bExvGFzqK1RjSZSgXXcpAVXa-144-144.png"  alt="">
          <span>2.1万热评</span>
        </div>
        <div class="share">
          <img src="https://gw.alicdn.com/tfs/TB1dmtxGQzoK1RjSZFlXXai4VXa-72-72.png" class="download">
          <img src="https://gw.alicdn.com/tfs/TB166VwGFzqK1RjSZFoXXbfcXXa-72-72.png" alt="" class="share-icon">
        </div>
      </div>
    </div>

    <div class="selector">
      <p class="select-title">选集</p>
      <ul class="select-list">
        <li v-for="index in 56" :key="index">
          {{index}}
        </li>
      </ul>
    </div>

    <div class="remark-box">
      <div class="remark-title">
        评论
      </div>
      <div class="remark-inp">
        <div class="inp-icon"></div>
        <div v-show="!showInp" class="show-inp" @click="showInp=true">已有54444条评论，快来说说你的感想吧</div>
        <div v-show="showInp" class="inp-form">
          <div class="inp-text">
            <textarea v-model="remarkValue" name="" id="" ></textarea>
          </div>
          <div class="inp-action">
            <span class="inp-warn">{{remarkValue.length}} / 300</span>
            <div class="remark-action">
              <button class="remark-cancle" @click="remarkValue='';showInp=false">取消</button>
              <button :disabled="remarkValue.length===0||remarkValue.length>300" class="remark-submit">发送</button>
            </div>
          </div>
        </div>
      </div>

      <div class="remark-detail">
        <ul class="detail-list">
          <li class="detail-item">
            <div class="user-icon"></div>
            <div class="detail-body">
              <div class="detail-top">
                <p class="username">
                  优酷用户
                </p>
                <div class="is-support">
                  <div class="support">
                    <i></i>
                    <span>8291</span>
                  </div>
                  <div class="not-support">
                    <i></i>
                    <span>243</span>
                  </div>
                </div>
              </div>
              <div class="detail-center">
                <span class="detail-date">2019年08月03日</span>
              </div>
              <div class="detail-bottom">
                <p>
                  【观影知识点】——十二时辰 十二时辰相当于24小时，每个时辰等于2小时。顺序为：子(zǐ)、丑(chǒu)、寅(yín)、卯(mǎo)、辰(chén)、巳(sì)、午(wǔ)、未(wèi)、申(shēn)、酉(yǒu)、戌(xū)、亥(hài)
                </p>
              </div>
            </div>
          </li>
        </ul>

        <div class="detail-more">
          <p>
            <span>点击获取全部评论</span>
            <img src="https://gw.alicdn.com/tfs/TB1Ryc7GCzqK1RjSZFjXXblCFXa-72-72.png" alt="" class="openAppImg">
          </p>

        </div>
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
      showDetail: false,
      showInp: false,
      remarkValue: ''
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
    border-bottom: 1px solid #f5f5f5;
    .title-box {
      // border-bottom: 1px solid #f5f5f5;
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
      border-top: 1px solid #f5f5f5;
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

    .share-box {
      box-sizing: border-box;
      padding: 0 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .remark-flag {
      display: flex;
      align-items: center;
      font: 12px/20px "Microsoft YaHei",SimHei,helvetica,arial,verdana,tahoma,sans-serif;
      color: #333;
    }
    .remark-icon {
      width: 24px;
      margin-right: 3px;
    }
    .share {
      display: flex;
      align-items: center;
    }
    .download {
      width: 24px;
      margin-right: 25px;
    }
    .share-icon {
      width: 24px;
    }
  }
  .selector {
    border-bottom: 1px solid #f5f5f5;
  }
  .select-title {
    box-sizing: border-box;
    padding:12px 10px;
    font-size: 16px;
    font-weight: 700;
    color: #333;
  }
  .select-list {
    box-sizing: border-box;
    padding: 3px 0 0 10px;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling:touch;

    li {
      white-space: nowrap;
      flex-shrink: 0;
      width: 57px;
      height: 57px;
      margin: 0 15px 20px 0;
      line-height: 57px;
      text-align: center;
      border-radius: 4px;
      font-size: 14px;
      color: #333;
      background: #f5f5f5;
    }
  }
  .remark-box {
    .remark-title {
      box-sizing: border-box;
      padding:15px 12px;
      font-size: 16px;
      color:rgb(0,0,0)
    }
    .remark-inp {
      box-sizing: border-box;
      padding: 0 12px 15px;
      display: flex;
      border-bottom: 1px solid #f5f5f5;
    }
    .inp-icon {
      flex:none;
      width: 35px;
      height: 35px;
      border-radius: 35px;
      overflow: hidden;
      background: url(//css.ykimg.com/youku/dist/img/comments/mobile/i_3YQLoSU.png);
      background-size: 100px;
      margin-right: 10px;
    }
    .show-inp {
      box-sizing: border-box;
      flex:1;
      border: 1px solid #e3e3e3;
      height: 35px;
      padding: 0 15px;
      line-height: 35px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      background: #f5f5f5;
      border-radius: 50px;
      font-size: 12px;
      color: #ccc;
      text-align: center;
    }
    .inp-form {
      flex: 1;
    }
    .inp-text {
      width: 100%;
      height: 76px;
      padding: 8px;
      border-radius: 8px;
      background: #f7f7f7;
      font-size: 13px;
      box-sizing: border-box;
      border: 1px solid #e3e3e3;
      textarea {
        background: #f7f7f7;
        width: 100%;
        border: 0;
        height: 60px;
        padding: 0;
        color: #333;
        resize: none;
        outline: 0;
      }
    }
    .inp-action {
      width: 100%;
      margin-top: 6px;
      display:flex;
      justify-content: space-between;
      align-items: center;

      .inp-warn {
        color: #999;
        font-size: 16px;
      }

      .remark-action {
        font-size: 13.6px;
      }

      .remark-cancle {
        width: 62px;
        height: 30px;
        line-height: 30px;
        background: #fff;
        border: 1px solid #aaa;
        text-align: center;
        border-radius: 32px;
        color: #aaa!important;
      }
      .remark-submit {
        width: 62px;
        height: 30px;
        line-height: 30px;
        background: #218aff;
        color: #fff;
        border: none;
        text-align: center;
        border-radius: 32px;

        &:disabled{
          background: #dbdbdb;
        }
      }
    }
  }
  .remark-detail {
    .detail-list {
      border-bottom: 1px solid #f5f5f5;
    }
    .detail-item {
      box-sizing: border-box;
      padding:10px 12px;
      display: flex;
    }
    .user-icon {
      flex:none;
      width: 35px;
      height: 35px;
      border-radius: 35px;
      overflow: hidden;
      background: url(//css.ykimg.com/youku/dist/img/comments/mobile/i_3YQLoSU.png);
      background-size: 100px;
      margin-right: 10px;
    }
    .detail-top {
      display: flex;
      justify-content: space-between;
      height: 20px;
      line-height: 20px;
      font-size: 13px;
    }
    .is-support {
      display: flex;
      color: #999;
    }
    .support {
      padding: 0 5px;
      background-image: url(https://css.ykimg.com/youku/dist/img/comments/mobile/i_3YQLoSU.png);
    }
    .not-support {
      padding: 0 5px;
    }
    .username {
      color: #2692ff;
    }
    .detail-center {
      font-family: sans-serif;
      font-size: 13px;
      height: 20px;
      line-height: 20px;
      color: #ccc;
    }
    .detail-bottom {
      box-sizing: border-box;
      padding:9px 0 3px 0;
      line-height: 22px;
      color:#333;
      font-size: 13px;
      word-break: break-word;
    }
    .detail-more {
      box-sizing: border-box;
      padding: 15px 32px;
      p {
        background: #f5f5f5;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        font-size: 13px;
        color: #000;

      }
      img {
        width: 12px;
        height: 12px;
        margin-left: 10.5px;
      }
    }
  }
}
</style>
