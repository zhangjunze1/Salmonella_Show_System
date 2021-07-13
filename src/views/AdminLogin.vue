<template>
  <div class="home">
    <div class="home-container">
      <div>
        <h1 class="blog-title animated zoomIn" style="margin-top: 50px">
          后台管理系统
        </h1>
      </div>
      <div class="login_box1" style="margin-top: 50px">
        <!--头像-->
        <div class="avatar_box">
          <img src="../assets/img/dna1.png" class="avatar_img">
        </div>
        <!--表单-->
        <el-form :model="loginForm" :rules="loginRules" ref="loginForm" label- width="0px" class="login_form">
          <el-form-item prop="number">
            <el-input v-model="loginForm.number" placeholder="请输入账户" prefix-icon="el-icon-user-solid"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model="loginForm.password" placeholder="请输入登录密码" prefix-icon="el-icon-lock"></el-input>
          </el-form-item>
          <el-form-item class="login_btn">
            <el-button type="warning" @click="back">返回</el-button>
            <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
            <el-button @click="resetForm('loginForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'adminlogin',
  components: {},
  data () {
    return {
      // vedioCanPlay: false,
      loginForm: {
        number: '',
        password: '',
        verifyCode: ''
      },
      loginRules: {
        number: [
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
      },
      vedioCanPlay: false,
      fixStyle: ''
    }
  },
  created () {
  },
  methods: {
    back () {
      this.$router.back()
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    submitForm () {
      this.$router.push('/adminMain')
    }
    // canplay () {
    //   this.vedioCanPlay = true
    // }
  },
  mounted: function () {
    // window.onresize = () => {
    //   const windowWidth = document.body.clientWidth
    //   const windowHeight = document.body.clientHeight
    //   const windowAspectRatio = windowHeight / windowWidth
    //   let videoWidth
    //   let videoHeight
    //   if (windowAspectRatio < 0.5625) {
    //     videoWidth = windowWidth
    //     videoHeight = videoWidth * 0.5625
    //     this.fixStyle = {
    //       height: windowWidth * 0.5625 + 'px',
    //       width: windowWidth + 'px',
    //       'margin-bottom': (windowHeight - videoHeight) / 2 + 'px',
    //       'margin-left': 'initial'
    //     }
    //   } else {
    //     videoHeight = windowHeight
    //     videoWidth = videoHeight / 0.5625
    //     this.fixStyle = {
    //       height: windowHeight + 'px',
    //       width: windowHeight / 0.5625 + 'px',
    //       'margin-left': (windowWidth - videoWidth) / 2 + 'px',
    //       'margin-bottom': 'initial'
    //     }
    //   }
    // }
    // window.onresize()
  }
}
</script>
<style>

.home-container {
  position: absolute;
  top: 0px;
  left: 0;
  right: 0;
  height: 100vh;
  background: url("../assets/img/dna-1903875.jpg") center center /
    cover no-repeat;
  background-color: #49b1f5;
  background-attachment: fixed;
  text-align: center;
  color: #fff !important;
  animation: header-effect 1s !important;
}
.home-login {
  margin-top: 43vh;
  line-height: 1.5;
  color: #eee;
}

.text,
.textt {
  font-size: 1.5rem;
  color: #fff;
}

.inner-container {
  animation: myMove 5s linear infinite;
  animation-fill-mode: forwards;
}
/*文字无缝滚动*/
@keyframes myMove {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-150px);
  }
}

.textBox {
  width: 100%;
  height: 40px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  text-align: center;
}

.login_box1 {
  width: 450px;
  height: 270px;
  background-color: unset;
  border-radius: 3px;
  border-width: 100px;
  border: solid #FFFFFF;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
}
.login_form {
  position: absolute;
  bottom: 0px;
  width: 100%;
  padding: 0px 20px;
  box-sizing: border-box;
}

.login_btn{
  display: flex;
  justify-content: flex-end;
}

.verifyCode_box {
  display: flex;
}

.verifyCode{
  width: 70%;
  justify-content: left;
}

.verifyCode_img{
  width: 30%;
  height: 45px;
  justify-content: flex-end;
}

.avatar_box{
  width: 130px;
  height: 130px;
  border: 1px solid #EEEEEE;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin: -65px auto;
  background-color: #FFFFFF;
}

.avatar_img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #EEEEEE;
}
</style>
