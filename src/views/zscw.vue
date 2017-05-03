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
              <router-link :to="{name: 'paper', params: {id: detail.id}}">
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
  import Vue from 'vue'
  import vueResource from 'vue-resource'
  Vue.use(vueResource)

  require('../assets/scss/reset.scss')
  export default {
    name: 'list',
    data: function () {
      return {
        lenssonList: [],
        tabTitle: '知识重温',
        index: {},
        searchKey: {
          page: 1,
          limit: 20,
          mdrender: true
        }
      }
    },
    methods: {
      // 获取课程数据
      initList: function () {
        this.$http.get('/static/data/app.json').then(function (res) {
          this.lenssonList = res.body.lensson.zscw
        }, function (err) {
          console.log(err)
        })
      },
      getList: function () {
        // this.lenssonList = this.lenssonData.zxks
        // if (this.searchKey.tab === 'exam') {
        //   this.lenssonList = this.lenssonData.zxcs
        // } else if (this.searchKey.tab === 'analysis') {
        //   this.lenssonList = this.lenssonData.zscj
        // } else {
        //   this.lenssonList = this.lenssonData.zscw
        // }
        // console.log(this.lenssonList)
      },
      // update tab title
      getTitle: function (tab) {
        let str = ''
        console.log('===' + tab)
        switch (tab) {
          case 'zscw':
            str = '知识重温'
            break
          case 'exam':
            str = '在线考试'
            break
          case 'analysis':
            str = '知识串讲'
            break
        }
        return str
      },
      /*
      　　点击课程时显示章节
      */
      slide: function (item) {
        item.isSlide = !item.isSlide
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        if (window.sessionStorage) {
          console.log(window.sessionStorage)
        }
        this.initList()
        console.log('init....')
        // console.log(_this.lenssonList)
      })
    },
    watch: {
      // 切换页面
      '$route' (to, from) {
        // 如果是当前页面切换分类的情况
        if (to.query && to.query.tab) {
          this.searchKey.tab = to.query.tab
          this.tabs = []
          this.index = {}
        }
        // if (to.fullPath === '/list') {
        //   this.searchKey.tab = 'zscw'
        // }
        // console.log(to)
        // this.searchKey.page = 1
        // console.log(this.searchKey.tab === 'zscw')
        // this.getList()
        // 隐藏导航栏
        // this.$refs.head.show = false
      }
    },
    components: {
      layOut: require('../components/layout')
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
