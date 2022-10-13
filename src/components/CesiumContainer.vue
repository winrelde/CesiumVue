<template>
  <div class="mainWarp">
      <div id="cesiumContainer" class="fullSize"></div>
  </div>
</template>

<script>
import * as CesiumUtils from '../utils/CesiumUtils'
export default {
  data() {
    return {}
  },
  mounted() {
    this.$nextTick(() => {
      CesiumUtils.initViewer('cesiumContainer')
    })
  },
}
</script>
<style lang="less" scoped>
.mainWarp{
  top: 0;
  left: 0;
  border: none;
  width: 100%;
  height: 100%;
  position: absolute;
}
.fullSize {
  top: 0;
  left: 0;
  border: none;
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>
