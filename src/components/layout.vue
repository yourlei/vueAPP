<template>
  <div>
    <left-bar :is-show="show"></left-bar>
    <!-- header -->
    <div class="topbar" :class="{'show' : show}">
      <img src="../assets/images/index/user.png" alt="用户头像" class="avatar" 
        @click="showBar">
      <!-- title -->
      <span v-text="tabType"></span>
    </div>
    <div class="page-cover" 
           :class="{'show': show}" 
           @click="showBar"></div>
    <!-- footer -->
    <div class="weui-tabbar" :class="{'show' : show}">
      <router-link :to="{'name': 'zscw'}" exact class="weui-tabbar__item weui-bar__item--on">
        <div class="weui-tabbar__icon">
          <img src="../assets/images/index/zscw_b.png" alt=""
               v-if="tabType === '知识重温'">
          <img src="../assets/images/index/zscw.png" alt=""
               v-else>    
        </div>
        <p class="weui-tabbar__label">知识重温</p>
      </router-link>
      <router-link :to="{'name': 'zxks'}" class="weui-tabbar__item">
        <div class="weui-tabbar__icon">
          <img src="../assets/images/index/zxcs_b.png" alt=""
               v-if="tabType === '在线测试' || tabType === '练习模式' || tabType === '闯关模式' ">
          <img v-else src="../assets/images/index/zxcs.png" alt="">
        </div>
        <p class="weui-tabbar__label">在线测试</p>
      </router-link>
      <router-link :to="{'name': 'zscj'}" class="weui-tabbar__item">
        <div class="weui-tabbar__icon">
          <img src="../assets/images/index/zscj_b.png" alt=""
               v-if="tabType === '知识串讲'">
          <img v-else src="../assets/images/index/zscj.png" alt="">
        </div>
        <p class="weui-tabbar__label">知识串讲</p>
      </router-link>
    </div>
  </div>
</template>

<script>
  import leftBar from './leftbar.vue'
  export default {
    name: 'layout',
    data: function () {
      return {
        show: false
      }
    },
    props: ['tabType'],
    methods: {
      showBar: function () {
        this.show = !this.show
        console.log(this.tabType)
      }
    },
    mounted: function () {
      console.log('Hi,welcome you.')
      console.group('begin')
      console.log('/*')
      console.log(' * i am leiyu')
      console.log(' * my github: https://github.com/yourlei')
      console.log(' * by leiyu 2017-04-29')
      console.log(' */')
      console.groupEnd('end')
    },
    components: {
      leftBar
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.page-cover {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .45);
  transform: translateX(-100%);
  transition: all .5s ease-in-out;
  visibility: hidden;
  z-index: 501;
}
.show {
  visibility: visible;
  transform: translateX(270px);
}
.topbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: .6rem 0;
  color: white;
  text-align: center;
  transition: all .5s ease-in-out;
  background-color: #12b7f5;
  z-index: 9;

  .avatar {
    position: absolute;
    left: 2rem;
  }
  .title {
    display: inline-block;
  }
}
.weui-tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  transition: all .5s ease-in-out;
}
</style>
