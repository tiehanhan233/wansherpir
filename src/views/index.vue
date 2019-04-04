<template>
<!-- 我在这里写了一个信息，通过路由他会渲染到home页面下 -->
    <el-container>
        <el-aside width="200px" style="border:1px;">
            <el-row class="tac">
                <el-col style="width:100%!important" :span="12">
                    <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @select="changeRoute"
                    @open="handleOpen"
                    @close="handleClose" style="">
                        <div style="" class="logo"></div>
                        <span :key="index" v-for="(menu,index) in menus">
                            <el-submenu v-if="menu.children" :index="index.toString()">
                                    <template slot="title">
                                        <i :class="menu.icon"></i>
                                        <span>{{menu.name}}</span>
                                    </template>
                                    <el-menu-item-group>
                                        <el-menu-item :key="_index" v-for="(child,_index) in menu.children" :index="`${index}-${_index}`">
                                            <i :class="child.icon"></i>
                                            <span slot="title">{{child.name}}</span>
                                        </el-menu-item>
                                    </el-menu-item-group>
                            </el-submenu>
                            <el-menu-item :index="index.toString()" v-else>
                                <i :class="menu.icon"></i>
                                <span slot="title">{{menu.name}}</span>
                            </el-menu-item>
                        </span>
                    </el-menu>
                </el-col>
            </el-row>
        </el-aside>
        <el-container>
            <el-header style="height:56px;">
                <ul>
                    <li >xxx欢迎登录</li>
                    <li >帮助</li>
                    <li >退出</li>
                </ul>
            </el-header>
            <el-main>
                <router-view style='width:100%;height:100%'></router-view>
            </el-main>
            <!-- <el-footer style=""></el-footer> -->
        </el-container>
    </el-container>
</template>

<script>
export default {
    name: 'index',
    data(){
        return {
            menus:[
                {name:"商家管理",url:"/",icon:"eliconcaidan3"},
                {name:"餐桌管理",icon:"eliconTIFFANYSROOM_huaban1",children:[
                    {name:"餐桌概况",url:'/overview',icon:"eliconcanting"},
                    {name:"餐桌管理",url:'/tables',icon:"eliconcanju1"},
                    {name:"排队信息",url:'/queue',icon:"eliconcanyin"}
                ]},
                {name:"订单管理",icon:"elicondingdan1",children:[
                     {name:"当前订单",url:'/order',icon:"elicondingdan6"},
                     {name:"排队订单",url:'/queueorder',icon:"eliconweibiaoti-_huabanfuben"}
                ]},
                {name:"菜品管理",url:"/dish",icon:"eliconyongcanqu1"},
            ]
        }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      changeRoute(index){
          let menu = this.menus[index];
          if (menu){
            this.$router.push({path: `/home/index${menu.url}`})
          }
          else {
              index = index.split('-');
              menu = this.menus[index[0]].children[index[1]]
              this.$router.push({path: `/home/index${menu.url}`})
          }
      }
    }
}
</script>

<style scoped>
    .logo{
        background: url('') center center no-repeat;
    }
    .el-header, .el-footer {
        background-color: rgb(121, 142, 173);
        color: rgb(255, 255, 255);
        text-align: center;
        line-height: 60px;
    }
    
    .el-aside {
        color: rgb(255, 255, 255);
        text-align: center;
        line-height: 200px;
    }
    
    .el-main {
        background-color: rgb(244, 248, 248);
        color: rgb(102, 102, 102);
        text-align: center;
   
        width: 100%;
        height:100%;
        margin:0;
        padding:0;
    }
    
    body > .el-container {
        margin-bottom: 40px;
    }
    
    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }
    
    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
    .el-header ul{
        height: 56px;
        line-height: 56px;
        display: inline-block;
        margin-top: 0px;
        float:right;
    }
    .el-header ul li{
        width: 90px;
        height:56px;
        display:inline-block;
        list-style:none;
        line-height:1;
        font-family: "Microsoft YaHei";
        font-size: 15px;
    }
</style>


