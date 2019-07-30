<template>
  <div class="login">
    <div class="nav">
      <van-icon name="arrow-left" @click="$router.go(-1)"></van-icon>
      <p>快捷登录</p>
    </div>

    <div class="content">
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less">
.login {
  .nav {
    height: 50px;
    display: flex;
    justify-content: center;
    position: relative;
    align-items: center;
    font-size: 18px;
    text-align: center;

    .van-icon {
      position: absolute;
      left: 10px;
      color: #969799 !important;
      font-size: 24px;
    }

    p {
      // margin: 0 auto;
    }
  }

  .content {
    margin-top: 25px;
    box-sizing: border-box;
    padding: 0 10%;

    li {
      height: 44px;
      border: 1px solid #e9e9e9;
      border-radius: 44px;
    }
  }
}
</style>
