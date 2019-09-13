<template>
  <div class="login">
    <div class="nav">
      <van-icon
        name="arrow-left"
        @click="$router.push({path:'/index'})"
      ></van-icon>
      <p v-show="!show">手机快捷登陆</p>
      <p v-show="show">账号登录</p>
    </div>

    <div
      class="content"
      v-show="show"
    >
      <ul>
        <li>
          <label
            for="username"
            style="width:90% "
          >
            <input
              name="username"
              type="tel"
              maxlength="11"
              placeholder="手机号码"
              v-model="form.username"
              @input="chenckPhone"
            />
          </label>
          <van-icon
            v-show="form.username"
            name="cross"
            size="2"
            style="margin:0 20px;"
            @click="clear"
          ></van-icon>
        </li>
        <li>
          <label for="password">
            <input
              name="password"
              type="password"
              maxlength="6"
              placeholder="动态密码"
              v-model="form.password"
            />
          </label>
          <button
            :class="{'get-password-button':!disabled,'get-password-button-disable':disabled}"
            :disabled="disabled"
          >获取动态密码</button>
        </li>
      </ul>
      <button class="login-button" @click="login(1)">登录</button>
      <div>或</div>
      <button
        class="user-login-button"
        @click="loginClick"
      >账号登录</button>
    </div>

    <div
      class="content"
      v-show="!show"
    >
      <ul>
        <li>
          <label for="username">
            <input
              name="username"
              type="text"
              placeholder="手机/邮箱/优酷土豆账号"
              v-model="form.username"
            />
          </label>
          <van-icon
            v-show="form.username"
            name="cross"
            size="2"
            style="margin-right:20px;"
            @click="clear"
          ></van-icon>
        </li>
        <li>
          <label for="password">
            <input
              name="password"
              type="password"
              maxlength="16"
              placeholder="登录密码"
              v-model="form.password"
            />
          </label>
          <button class="get-password-button">忘记密码</button>
        </li>
      </ul>
      <button
        class="login-button"
        @click="login(2)"
      >登录</button>
      <div>或</div>
      <button
        class="user-login-button"
        @click="loginClick"
      >手机快捷登录</button>
    </div>

    <div class="footer">
      <div class="thrid-login">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
      </div>
      <div class="regist">
        <span>还没有账号?</span>
        <a
          href="#"
          @click="goRegister"
        >立即注册</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 控制手机登陆和快捷登陆的切换
      show: true,
      // 控制获取动态密码按钮是否能点击
      disabled: true,
      form: {}
    }
  },
  methods: {
    login () {
      let params = {
        username: this.username,
        password: this.password
      }
      this.$store.dispatch('toLogin', params).then(resp => {})
    },
    // 登录方式切换
    loginClick () {
      this.show = !this.show
      this.form = {}
    },
    // 清除
    clear () {
      this.form.username = ''
    },
    // 检查电话号码是否符合规范
    chenckPhone () {
      const reg = /^1[3456789]\d{9}$/
      const phone = this.form.phone
      if (reg.test(phone)) {
        console.log(111)

        this.disabled = false
      } else {
        console.log(222)

        this.disabled = true
      }
    },
    // 跳转到注册页
    goRegister () {
      this.$router.push({ path: '/register' })
    }
  }
}
</script>

<style lang="less" scope>
.login {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #fff;

  .nav {
    background-color: #fff;
    flex-shrink: 0;
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
  }

  .content {
    background-color: #fff;
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
      font-size: 14px;
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

    .get-password-button-disable {
      border: none;
      background: #ffffff;
      font-size: 13px;
      margin-right: 20px;
      color: #ccc;
    }

    .login-button {
      height: 44px;
      width: 300px;
      border: 1px solid #e9e9e9;
      border-radius: 44px;
      margin-bottom: 10px;
      font-size: 16px;
      background-color: #2692ff;
      color: #ffffff;
    }

    .user-login-button {
      height: 44px;
      width: 300px;
      border: 1px solid rgb(28, 132, 218);
      border-radius: 44px;
      margin-bottom: 10px;
      font-size: 16px;
      color: rgb(28, 132, 218);
      background-color: #ffffff;
    }
  }

  .footer {
    background-color: #fff;
    margin-top: auto;
    width: 100%;

    .thrid-login {
      width: 80%;
      margin: 0 auto;
      text-align: center;
      display: flex;
      justify-content: space-around;
      // border: 1px solid red;

      span {
        border: 1px solid green;
        width: 40px;
        height: 40px;
        line-height: 40px;
        border-radius: 50%;
      }
    }

    .regist {
      text-align: center;
      font-size: 14px;
      padding-bottom: 50px;
      margin-top: 20px;
    }
  }
}
</style>
