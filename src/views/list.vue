<template>
	<div>
		<lay-out :tab-type="tabTitle"></lay-out>
		<div class="container">
      <ul class="lenssons-group">
        <li class="lensson-item"
            v-for="item in lenssonList">
          <div class="lensson-title" 
               @click="slide(item)">
            <img src="../assets/images/index/plus_sign.png">
            <p>{{ item.name }}</p> 
          </div>
          <ul class="lensson-detail" :class="{'slide' : item.isSlide}">
            <li class="lensson-chapter"
                v-for="detail in item.chapters">
              <router-link :to="{name: 'zxcspaper', params: {id: detail.id}}">
                <img src="../assets/images/index/minus_sign.png">
                <p>{{ detail.name }}</p>
                <div class="progress-bar">
                  <span class="line"></span>
                  <span>
                    <i class="completed">{{ detail.completed }}</i>
                    <i>/</i>
                    <i class="toatl">{{ detail.totals　}} </i>
                  </span>
                </div>
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
	</div>
</template>
<script>
  require('../assets/scss/reset.scss')
  import Vue from 'vue'
  import vueResource from 'vue-resource'
  Vue.use(vueResource)
  export default {
    data: function () {
      return {
        lenssonList: [],
        tabTitle: ''
      }
    },
    methods: {
      getList: function () {
        let _this = this
        let _route = _this.$route
        this.$http.get('/static/data/app.json').then(function(res) {
          if (_route.path === '/zxcs/list') {
            if (_route.query.model === 'lx') {
              _this.lenssonList = res.body.lensson.zxcs.lx
            }
            if (_route.query.model === 'cg') {
              _this.lenssonList = res.body.lensson.zxcs.cg
            }
          }
          console.log(_this.lenssonList)
        }, function(err) {
          console.log(err)
        })
      },
      slide: function (item) {
        item.isSlide = !item.isSlide
      }
    },
    mounted: function () {
      let self = this
      console.log(this.$route)
      self.$nextTick(function () {
        if (self.$route.query.model === 'lx') {
          self.tabTitle = '练习模式'
        }
        if (self.$route.query.model === 'cg') {
          self.tabTitle = '闯关模式'
        }
      })
      self.getList()
    },
    watch: {
      // tabTtile:
    },
    components: {
      layOut: require('../components/layout.vue')
    }
  }
</script>
<style lang="scss" scoped>
  $white: #FFF;
$skyblue: #12b7f5;

.container {
  padding-top: 2.5rem; 
}
.lenssons-group {
  padding: .5rem .8rem;
  
  .lensson-item {
    width: 100%;
    overflow: hidden;
    &:after {
      content: 'line';
      width: 110%;
      height: 0;
      display: inline-block;
      text-indent: -9999px;
      border-bottom: 1px solid #555;
      margin-left: -0.8rem;
    }
  }
  .lensson-detail {  
    height: 0;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-30px);
    transition: all .3s ease-in-out;
  }
  .slide {
    opacity: 1;
    height: 100%;
    padding-bottom: 1rem;
    visibility: visible;
    transform: translateY(0);
  }
  .lensson-title,
  {
    display: flex;
    padding: 1rem 0;
    line-height: 100%;
    img, p {
      padding-top: 5px;
      padding-bottom: 5px;
      display: inline-flex;
    }
    p {
      width: 100%;
      padding-left: 1rem;
      font-size: 1.4rem;
      background: url('../assets/images/common/pen.png') right center no-repeat;
      background-size: auto;
      cursor: pointer;
    }
  }
  .lensson-chapter {
    position: relative;
    display: flex;
    align-items: center;

    a {
      display: flex;
      width: 100%;
      line-height: 100%;
      padding: .5rem 0 1rem;
      margin: .6rem 0;
    }
    img {
      display: inline-flex
    }

    p {
      display: inline-flex;
      width: 100%;
      padding-left: 1rem;
      font-size: 1.3rem;
      color: #000;
      background: url('../assets/images/common/pen.png') right center no-repeat;
      background-size: contain;
      cursor: ponter;
    }
    .progress-bar {
      position: absolute;
      left: 2rem;
      top: 3rem;
      width: 100%;
      color: #555;
    }
    span.line {
      position: relative;
      top: -5px;
      width: 60%;
      display: inline-block;
      height: 0;
      border: 2px solid #CCC;
  
      &:after {
        content: 'bj';
        position: absolute;
        top: -1px;
        left: -2px;
        width: 50%;
        display: inline-block;
        height: 0;
        text-indent: -9999px;
        border: 2px solid $skyblue;
      }
    }
  }
}
</style>