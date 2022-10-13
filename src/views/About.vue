<template>
  <div class="aboutWrap" v-if="this.$store.state.isShowAbout">
    <h2>CesiumVue框架</h2>
    <div class="detailInfo">
      <div class="item">
        <span class="name">版本号：</span><span class="value">V1.0</span>
      </div>
      <div class="item">
        <span class="name">开发者：</span><span class="value">XXX</span>
      </div>
      <div class="item">
        <span class="name">开发技术：</span><span class="value">Cesium+Vue技术栈</span>
      </div>
      <div class="item">
        <span class="name">更新日期：</span><span class="value">2021-12-01</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
}
</script>
<style lang="less" scoped>
.aboutWrap {
  position: absolute;
  top: 35%;
  left: 50%;
  width: 420px;
  height: 200px;
  transform: translate(-50%, -50%);
  color: #fff;
  font-weight: 700;
  background-color: rgba(4, 83, 139, 0.7);
  border: 1px solid rgb(244, 247, 248);
  border-radius: 15px;
  z-index: 9999;
  .detailInfo {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .item {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      margin-top: 5px;
      .name {
        flex: 0.3;
        padding-left: 60px;
        text-align: left;
      }
      .value {
        flex: 0.7;
        padding: 0;
        text-align: center;
      }
    }
  }
}
</style>
