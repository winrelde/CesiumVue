<template>
  <div class="topwarp">
    <el-menu active-text-color="#ffd04b" text-align="left" mode="horizontal" menu-trigger="click" :unique-opened="true">
        <el-menu-item index="1">
          <span slot="title" @click="menu1()">栏1</span>
        </el-menu-item>
        <el-menu-item index="2">
          <span slot="title" @click="menu2()">栏2</span>
        </el-menu-item>
        <el-menu-item index="3">
          <span slot="title" @click="menu3()">栏3</span>
        </el-menu-item>
        <el-submenu index="4">
          <span slot="title">栏4</span>
          <el-menu-item index="4-1" @click="menu41()">栏4-1</el-menu-item>
          <el-menu-item index="4-2" @click="menu42()">栏4-2</el-menu-item>
          <el-menu-item index="4-3" @click="menu43()">栏4-3</el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <span slot="title">系统</span>
          <el-menu-item index="5-1" @click="systemInfo()">关于</el-menu-item>
          <el-menu-item index="5-1" @click="system()">系统</el-menu-item>
        </el-submenu>
      </el-menu>
  </div>
</template>
<script>
// import * as CesiumUtils from '../../utils/CesiumUtils'
export default {
  data() {
    return {
    }
  },
  methods: {
    menu1(){
      console.log('栏1')
    },
    menu2(){
      console.log('栏2')
    },
    menu3(){
      console.log('栏3')
    },
    menu41(){
      console.log('栏4-1')
    },
    menu42(){
      console.log('栏4-2')
    },
    menu43(){
      console.log('栏4-3')
    },
    systemInfo(){
      this.$store.dispatch("setIsShowAbout",true)
      setTimeout(() => {
          this.$store.dispatch("setIsShowAbout",false)
      }, 3000);
    },
    system(){
      let systemPage = this.$router.resolve({name: "System"});
      window.open(systemPage.href, '_blank')
    }
  },
}
</script>
<style lang="less" scoped>
.topwarp {
  display: inline-block;
  position: absolute;
  top: 0px;
  left: 0%;
  width: 550px;
  height: 200px;
  color: #fff;
  border-radius: 5px;
}
/* 水平样式 */
 .el-menu--horizontal>div>.el-submenu {
    float: left;
}
/* 一级菜单的样式 */
.el-menu--horizontal>div>.el-menu-item {
    float: left;
    height: 60px;
    line-height: 60px;
    margin: 0;
    border-bottom: 2px solid transparent;
}
/* 解决下拉三角图标 */
.el-menu--horizontal>div>.el-submenu .el-submenu__icon-arrow {
    position: static;
    vertical-align: middle;
    margin-left: 8px;
    margin-top: -3px;
}
/* 解决无下拉菜单时 不对齐问题 */
.el-menu--horizontal>div>.el-submenu .el-submenu__title {
    height: 60px;
    line-height: 60px;
    border-bottom: 2px solid transparent;
}
</style>
