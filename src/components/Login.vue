<template>
  <div id="loginWarp">
    <div id="title">
      <span>CesiumVue框架</span>
    </div>
    <div id="loginBox">
      <h3>登录</h3>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px">
        <el-form-item label="" prop="userName" style="margin-top:40px;">
          <el-row>
            <el-col :span='2'>
              <i class="el-icon-user"></i>
            </el-col>
            <el-col :span='22'>
              <el-input class="inps" placeholder='用户名' v-model="ruleForm.username"></el-input>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="" prop="passWord">
          <el-row>
            <el-col :span='2'>
              <i class="el-icon-edit-outline"></i>
            </el-col>
            <el-col :span='22'>
              <el-input class="inps" placeholder='密码' v-model="ruleForm.password" show-password></el-input>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item style="margin-top:55px;">
          <el-button type="primary" round class="submitBtn" @click="submitForm('ruleForm')">登录</el-button>
          <el-button type="primary" round class="submitBtn" @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    let validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账户'))
      } else {
        callback()
      }
    }
    let validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        username: 'admin',
        password: 'admin',
      },
      rules: {
        username: [{ validator: validatePass, trigger: 'blur' }],
        password: [{ validator: validatePass2, trigger: 'blur' }],
      },
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const loading = this.$loading({
            lock: true,
            text: '登录中......',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)',
          })
          window.sessionStorage.setItem('token', this.$data.ruleForm.username)
          setTimeout(() => {
            loading.close()
            this.$router.push({ name: 'Home' })
          }, 2000)
        } else {
          this.$message.error('账户与密码不能为空!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
  },
}
</script>

<style lang="less" scoped>
#loginWarp {
  width: 100vw;
  padding: 0;
  margin: 0;
  height: 100vh;
  font-size: 16px;
  background-repeat: no-repeat;
  background-position: left top;
  background-color: #242645;
  color: #fff;
  font-family: "Source Sans Pro";
  background-size: 100%;
  background-image: url("../assets/cloud.jpg");
  position: relative;
  #title {
    width: 500px;
    position: absolute;
    top: 100px;
    left: 0;
    right: 500px;
    bottom: 0;
    margin: auto;
    span {
      color: white;
      font-size: 36px;
      font-weight: bold;
    }
  }
  #loginBox {
    width: 240px;
    height: 280px;
    position: absolute;
    top: 0;
    left: 1100px;
    right: 0;
    bottom: 0;
    margin: auto;
    padding: 50px 40px 40px 40px;
    box-shadow: -15px 15px 15px rgba(6, 17, 47, 0.7);
    opacity: 1;
    background: linear-gradient(
      230deg,
      rgba(21, 134, 168, 0) 0%,
      rgb(211, 168, 29) 100%
    );
    /deep/ .inps input {
      border: none;
      color: #fff;
      background-color: transparent;
      font-size: 12px;
    }
    .submitBtn {
      background-color: transparent;
      color: rgb(17, 136, 228);
      width: 100px;
    }
    .iconfont {
      color: rgb(242, 248, 250);
    }
    
  }
}
</style>
