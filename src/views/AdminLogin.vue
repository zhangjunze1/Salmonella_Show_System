<template>
  <div class="login login-page">
    <div class="login-content">
      <div class="login-box clear" style="font-size: 0;">
        <div class="login login-page">
          <div class="login-wrap" id="login-wrap">
            <div class="item-login clear">

              <!--        右半部分-->
              <div class="login-content password-login" id="password-login">
                <p class="login-til">后台管理系统</p>
                <el-form :model="loginForm" :rules="loginRules" style="margin-top: 46px" ref="loginForm" label- width="0px" class="login_form">
                  <el-form-item prop="name">
                    <el-input v-model="loginForm.name" placeholder="请输入账户" prefix-icon="el-icon-user-solid"></el-input>
                  </el-form-item>
                  <el-form-item prop="password">
                    <el-input type="password" v-model="loginForm.password" placeholder="请输入登录密码" prefix-icon="el-icon-lock"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <div class="remember-wrap" style="margin-top: 19px;">
                      <div class="link-box">
                        <a class="link" target="_blank" @click="back">返回</a>
                        <a class="link" style="margin-left: 40px" target="_blank" @click="toAdmin">详情概述</a>
                      </div>
                    </div>
                  </el-form-item>
                  <el-form-item  >
                    <el-button class="login-btn" @click="submitForm()">登录</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        name: '',
        password: '',
        verifyCode: ''
      },
      loginRules: {
        name: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { min: 4, max: 9, message: '账号格式不正确', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 1, max: 16, message: '长度在 1 到 16 个字符', trigger: 'blur' }
        ],
        verifyCode: [
          { required: true, message: '请输入计算结果', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    back () {
      this.$router.push('/login')
    },
    submitForm () {
      this.$root.ADMIN.id = 1
      this.$root.ADMIN.name = 'admin'
      this.$router.push('/adminMain')
    }
  }
}
</script>

<style scoped>

.login-page {
  min-height: 100%;
  position: relative;
}

.login-page .login-content {
  height: 400px;
}

.login-page .login-content .login-box {
  width: 800px;
  margin-left: -400px;
}

.login-page .login-content .login-box {
  margin-top: -260px;
}

.login-page .login-content .login-box {
  position: absolute;
  left: 50%;
  margin-left: -220px;
  top: 50%;
  margin-top: -200px;
  width: 540px;
  height: 400px;
  display: block;
  box-shadow: 0 5px 30px rgba(51,51,51,0.25);
}
.login-wrap {
  margin: 0 auto;
  text-align: center;
  font-size: 0;
  font-size: 0;
  position: relative;
}

.login-wrap:after {
  content: '';
  position: absolute;
  z-index: 12;
  left: 100%;
  top: 60px;
  bottom: 60px;
  width: 1px;
  background: #e1e1e1;
  margin-left: -1px;
}
.login-wrap .item-login {
  width: 300px;
}

.item-login {
  display: inline-block;
  *display: inline;
  *zoom: 1;
  vertical-align: middle;
}
.clear {
  *zoom: 1;
}
.clear :after{
  content: '\20';
  display: block;
  height: 0;
  clear: both;
}

.login-wrap .login-content {
  padding: 20px 50px 0 50px;
  position: relative;
}
.login-wrap .mobile-login, .login-wrap .code-login {
  display: inline-block;
  font-size: 14px;
  float: left;
  width: 300px;
}

.login-wrap .login-content .login-til {
  font-size: 24px;
  line-height: 42px;
  color: #333;
  margin-top: 15px;
  margin-bottom: -15px;
}
.login-wrap .code-login .normal-wrap .code-wrap {
  width: 201px;
  height: 201px;
  margin: 0 auto;
  margin-top: 30px;
  border: 1px solid #e0e0e0;
  position: relative;
}

.login-wrap .link-box .link {
  margin-left: 5px;
}

.login-wrap .link {
  color: #2685E3;
}

.login-wrap .code-login .tip-text {
  color: #333;
  line-height: 36px;
  margin-top: 10px;
  font-size: 13px!important;
}

.login-wrap .login-content {
  padding: 20px 50px 0 50px;
  position: relative;
}

.login-wrap .password-login,
.login-wrap .code-login {
  display: inline-block;
  font-size: 14px;
  float: left;
  width: 300px;
}

.login-wrap .login-content .login-til {
  font-size: 24px;
  line-height: 42px;
  color: #333;
  margin-top: 15px;
  margin-bottom: -15px;
}

.login-wrap .remember-wrap {
  text-align: left;
  height: 18px;
  line-height: 0px;
  margin-top: 19px;
  font-size: 12px;
  color: #6b6b6b;
}

.login-wrap .login-btn {
  *display: inline;
  *zoom: 1;
  display: block;
  width: 200px;
  height: 42px;
  background: #ff0042;
  border-radius: 27px;
  color: #fff;
  font-size: 18px;
  line-height: 16px;
  text-align: center;
  position: absolute;
  top: 0px;
}
</style>
