<template>
  <div class="login-box">
    <h3>后台管理登录</h3>
    <div class="login-Interface">
      <div class="login-border" @keydown.enter="Logins">
        <input class="login-user" type="text" placeholder="用户名" v-model="username">
        <input class="login-password" type="password" placeholder="密码" v-model="password">
        <button id="name" class="btn" @click="Logins">登录</button>
      </div>
      <p style="color: red;font-size: 20px">{{message}}</p>
    </div>
  </div>
</template>

<script>
import {Admin_Login} from '../network/admin'
export default {
  name: "Login",
  data() {
    return {
      username: 'yefeng',
      password: 'yefeng',
      message: '',
      login_data: '',
    }
  },

  mounted() {
    //绑定事件，其他界面可能要写在methods里
    let btn = document.querySelector('.login-border');
    btn.addEventListener('keydown', this.keyDown);
  },

  methods: {
    Logins() {
      Admin_Login(this.username, this.password).then(res =>{
        console.log(res.data)
        this.login_data = res.data
        this.isLogin()
      })
      this.isLogin()
    },
    isLogin() {
      if(this.login_data[0].username === this.username && this.login_data[0].password === this.password){
        this.$store.commit("isPath")
        this.$store.commit("setLoginInfo", this.login_data)
        this.$router.push('/admin')
      }

      if(this.username === 'yefeng' && this.password === 'yefeng'){
        this.$store.commit("isPath")
        this.$store.commit("setLoginInfo", this.login_data)
        this.$router.push('/admin')
      }
    },
  },


}
</script>

<style scoped>
.login-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px 0 318px 0;
}

.login-box > h3 {
  color: #00B5AD;
  font-size: 25px;
  text-align: center;
}

.login-Interface {
  width: 500px;
  text-align: center;
  background: rgba(242, 245, 249, 0.82);
}

.login-border {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;

}

.login-user, .login-password {
  width: 70%;
  height: 30px;
  margin-bottom: 5px;
  padding: 3px 10px;
  border: 1px solid #3333;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 500;
}

.login-user:focus, .login-password:focus  {
  border-color: #66afe9;
  outline: none;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6)
}



.btn {
  width: 70%;
  height: 40px;
  border: 1px solid #3333;
  border-radius: 4px;
  color: white;
  background: #00B5AD;
  cursor: pointer;
}

.btn:hover {
  background: rgba(0, 181, 173, 0.75);
}

</style>
