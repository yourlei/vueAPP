<template>
  <div>
    <!-- layout -->
    <lay-out :tab-type="tabTtile"></lay-out>
    <div class="container">
      <section class="model-list">
        <router-link tag="li" :to="{'name': 'zxks', query: {tab: 'lx'}}" class="model-item">
          <a href=""><img src="../assets/images/exam/lx.png" alt="练习模式"></a>
        </router-link>
        <router-link tag="li" :to="{'name': 'zxks', query: {tab: 'cg'}}" class="model-item">
          <a href=""><img src="../assets/images/exam/cg.png" alt="闯关模式"></a>
        </router-link>
        <router-link tag="li" :to="{'name': 'zxks', query: {tab: 'ks'}}" class="model-item">
          <a href=""><img src="../assets/images/exam/ks.png" alt="考试模式"></a>
        </router-link>
    </section>
    </div>
  </div>
</template>
<script>
  require('../assets/scss/reset.scss')
  export default {
    data: function () {
      return {
        tabTtile: '在线考试'
      }
    },
    mounted: function () {
    },
    components: {
      layOut: require('../components/layout.vue')
    }
  }
</script>
<style lang="scss" scoped>
.container {
  padding-top: 2.5rem; 
}
.model-list {
  padding: 2rem .8rem;
  text-align: center;
  a {
    display: inline-block;
    margin: .5rem 0;
    height: 100%;
  }
  @media (max-width: 768px) {  
    a {
      width: 100%;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
}
</style>
