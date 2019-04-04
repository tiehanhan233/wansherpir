<template>
  <el-container >
    <div style='width:100%' v-if="!loggedin">
      <el-header>商家管理后台</el-header>
      <el-main >
        <div class="loginbox">
          <el-input v-model="username" placeholder="请输入账号"></el-input>
          <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
          <div class="loginbox-2">
            <!-- 这里通过v-model将input的内容绑定到Input -->
            <el-button class="primary" plain id="register" @click="btn(1)">注册</el-button>
            <el-button class="primary" plain id="loginButton" @click="btn(2)">登录</el-button>
          </div>
        </div>
      </el-main>
      <!-- <el-footer class="footer"></el-footer> -->
    </div>
    <div style="width:100%;height:100%" v-else>
      <router-view/>
    </div>

  </el-container>
</template>

<script>
// @ is an alias to /src
// export default {
//   // name: 'home',
//   // components: {
//   //   HelloWorld
//   // }
// };
export default {
  data() {
    return {
      username: "",
      password: "",
      loggedin:false,
    };
  },
  mounted(){
      //这个方法是这个组件加载完成的时候执行的,
      //现在的情况是 加载完成请求服务器看看自己是否登录了.
      this.$axios
        .get('/ht/validate')
        .then(res=>{
          const {data} = res;
          if (data&&data.code==0){
            //已登录,恢复登录状态
            this.loggedin = true;
          }
          else {
            console.log('未登录')
          }
        })
        .catch(e=>{
          console.log('验证登录状态失败!')
        })
  },
  methods: {
    btn(action) {
      //点击触发
      //判断点了什么按钮
      action = action ==1 ? 'register' : 'login';
      //发起请求
      this.$axios
        .post("/ht/account", {
            username: this.username,
            password: this.password,
            action
        })
        .then(res => {
          //请求成功
          //从http返回中拿出JSON
          let {data} = res;
          //根据文档得知code===0的时候是成功
          if (data&&data.code==0){
            //成功的逻辑
            this.loggedin = true;
            
            this.$router.push({path: "/home/index"})
          }
          else {
            //失败的逻辑
            
          }
        })
        .catch(function(error) {
          // 请求失败

        });
    }
  },
  toRegister() {}
};
</script>


<style lang="less">
.loginbox {
  width: 200px;
  margin: 150px auto;
  input{
    margin-bottom:10px
  }
}
.loginbox-2 {
  width: 200px;
}
#loginButton {
  float: right;
}
#register{
  float: left;
}
.el-header,
.el-footer {
  background-color: rgb(121, 142, 173);
  color: rgb(255, 255, 255);
  text-align: center;
  line-height: 60px;
}
body > .el-container {
  height: 500px;
  margin-bottom: 40px;
}
#loginInput {
  width: 200px;
}
#pwdInput {
  width: 200px;
  margin-top: 10px;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #2c2c2c;
}
.bg-purple {
  background: #2c2c2c;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.footer{
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>

