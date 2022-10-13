<template>
  <div class="homeWrap">
    <CesiumContainer />
    <About />
    <Top />
    <Footer/>
  </div>
</template>

<script>
import CesiumContainer from '../components/CesiumContainer' //视图模块
import About from '../views/About' //关于
import Top from '../components/Top' //功能模块
import Footer from '../components/Footer' //服务中心窗口

export default {
  name: 'Home',
  components: {
    CesiumContainer,
    About,
    Top,
    Footer,
  },
  data() {
    return {
    }
  },
}
</script>
<style></style>
