<template>
  <div class="footerWarp">
    <a target="_blank" href='https://adc.fzu.edu.cn' style="color:white;text-decoration:none;">©福州大学数字中国研究院</a>
    <div class="item">
      <i>经度:</i><span>{{ itemProperty.lon }}</span>
    </div>
    <div class="item">
      <i>纬度:</i><span>{{ itemProperty.lat }}</span>
    </div>
    <div class="item">
      <i>海拔:</i><span>{{ itemProperty.hei }}米</span>
    </div>
    <div class="item">
      <i>朝向:</i><span>{{ itemProperty.head }}度</span>
    </div>
    <div class="item">
      <i>俯仰:</i><span>{{ itemProperty.pitch }}度</span>
    </div>
    <div class="item">
      <i>视高:</i><span>{{ itemProperty.camerahei }}米</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemProperty: {
        lon: 118.111,
        lat: 27.3243,
        alt: 0,
        dir: 350,
        angle: -50,
        sceneAlt: 3000,
      },
    }
  },
  mounted() {},
  computed: {
    onItemProperty() {
      return this.$store.state.footerProperty
    },
  },
  watch: {
    onItemProperty(value) {
      this.itemProperty = value
    },
  },
}
</script>
<style lang="less" scoped>
.footerWarp {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-end;
  position: absolute;
  bottom: 25px;
  left: 170px;
  width: 90%;
  height: 25px;
  color: #fff;
  font-size: 14px;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  .item {
    margin-right: 25px;
    i {
      font-style: normal;
      padding-right: 5px;
    }
  }
}
a{
  position: absolute;
  left: 25px;
}
</style>