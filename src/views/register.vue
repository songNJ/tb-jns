<template>
  <div class="register">
    <div class="nav">
      <van-icon name="arrow-left" @click="goLogin"></van-icon>
      <p>注册</p>
    </div>

    <div class="content">
      <ul>
        <li>
          <label for="username" style="width:90% ">
            <input
              name="username"
              type="text"
              maxlength="11"
              placeholder="手机号码"
              v-model="form.phone"
              @input="chenckPhone"
            />
          </label>
          <van-icon v-if="form.phone!==''" name="cross" size="2" style="margin:0 20px;" @click="clear"></van-icon>
        </li>
        <li>
          <label for="password">
            <input
              name="password"
              type="password"
              maxlength="6"
              placeholder="验证码"
              v-model="form.verificationCode"
            />
          </label>
          <button
            :class="{'get-password-button':!disabled,'get-password-button-disable':disabled}"
            :disabled="disabled"
          >获取验证码</button>
        </li>
        <li>
          <label for="username" style="width:100% ">
            <input
              name="username"
              type="password"
              placeholder="密码(6-16位字母、数字和符号)"
              v-model="form.password"
            />
          </label>
        </li>
      </ul>
      <button class="register-button">注册</button>
    </div>

    <div class="footer">
      <div class="loginA">
        <span>已有账号?</span>
        <a href="#" @click="goLogin">立即登录</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      disabled: true,
      form: {
        phone: '',
        verificationCode: '', // 验证码
        password: ''
      }
    }
  },
  methods: {
    // 清除
    clear () {
      this.form.phone = ''
      this.disabled = true
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
    // 跳转到登录页
    goLogin () {
      this.$router.push({ path: '/login' })
    }
  }
}
</script>

<style lang="less" scope>
.register {
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  min-height: 450px;

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

    .register-button {
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

  .footer {
    margin-top: auto;
    width: 100%;
    margin-bottom: 30px;
    .loginA {
      display: block;
      text-align: center;
      font-size: 14px;
    }
  }
}
</style>
