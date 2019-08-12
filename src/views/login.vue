<template>
  <div class="login">
    <div class="nav">
      <van-icon name="arrow-left" @click="$router.go(-1)"></van-icon>
      <p>账号登录</p>
    </div>

    <div class="content">
      <ul>
        <li>
          <label for="username">
            <input v-model="username" name="username" type="text" placeholder="用户名" />
          </label>
          <van-icon name="cross" size="2" style="margin-right:20px;"></van-icon>
        </li>
        <li>
          <label for="password">
            <input v-model="password" name="password" type="password" placeholder="动态密码" />
          </label>
          <button class="get-password-button">获取动态密码</button>
        </li>
      </ul>
      <button class="login-button" @click="login">登录</button>
      <div>或</div>
      <button class="login-button">账号登录</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      let params = {
        username: this.username,
        password: this.password
      }
      this.$store.dispatch('toLogin', params).then(resp => {

      })
    }
  }
}
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
      margin-bottom: 10px;
      padding-left: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    input {
      border: none;
      width: 100%;
      // height: 100%;
      line-height: 44px;
      font-size: 13px;
      // padding: 10px 0;
    }

    div {
      height: 44px;
      width: 300px;
      margin-bottom: 10px;
      font-size: 16px;
      line-height: 44px;
      text-align: center;
      color: #969799;
    }

    .get-password-button {
      border: none;
      background: #ffffff;
      font-size: 13px;
      margin-right: 20px;
    }

    .login-button {
      height: 44px;
      width: 300px;
      border: 1px solid #e9e9e9;
      border-radius: 44px;
      margin-bottom: 10px;
      font-size: 16px;
      background-color: rgb(28, 132, 218);
      color: #ffffff;
    }
  }
}
</style>
