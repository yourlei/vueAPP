<template>
  <div class="paper ">
  	<header class="topbar">
  	  <router-link :to="{name: 'zscw'}">
        <img src="../assets/images/common/fanhui.png" class="btn">
      </router-link>
  		<span class="title">知识重温</span>
  	</header>
  	<main class="container">
      <ul class="wrap">
        <li class="list-item" 
            v-for="(item, index) in questionList"
            :class="{'actived' : item.actived}">
          <h5>
            <span class="numberID">{{ index | round }}</span>
            <span class="question">{{ item.title }}</span>
          </h5>
          <div class="answer">
            {{ item.answer }}
          </div>
        </li>
      </ul>
  	</main>
    <div class="preview-box" :class="{show : isShow}">
      <div class="inner">
        <span v-for="(item, index) in questionList"
              :class="currentNumber === index ? 'actived' : ''"
              @click="showTarget(item, index)">
          {{ index | round }}
        </span>
      </div>
      <span class="triangle">icon</span>
    </div>
  	<div class="footer">
  		<div class="tab-group">
        <span class="pre-btn"
              @click="pre2next(-1)">
          <img src="../assets/images/common/pre.png">
        </span>  
        <span class="end-btn"
              @click="showPreviewbox">
          <img src="../assets/images/common/xuanti.png">
        </span>
        <span class="next-btn"
              @click="pre2next(1)">
          <img src="../assets/images/common/next.png">
        </span>
      </div>
  	</div>
  </div>
</template>
<script>
  require('../assets/scss/reset.scss')
  require('../assets/scss/paper.scss')
  import Vue from 'vue'
  import vueResource from 'vue-resource'
  Vue.use(vueResource)

  export default {
    data: function () {
      return {
        questionList: [],
        isShow: false,
        currentNumber: 0,
        count: 0
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        this.getList()
        console.log(this.count++)
      })
    },
    methods: {
      getList: function () {
        this.$http.get('/static/data/questions.json').then(function (res) {
          let tab = this.$route.fullPath.split('\/')[1]
          let params = this.$route.params.id
          // according $route params id load json data
          this.questionList = (res.body.questions[tab])[params]
          console.log(this.$route)
          // console.log(tab)
          this.initData()
        }, function (err) {
          console.log(err)
        })
      },
      initData: function () {
        if (this.questionList) {
          this.questionList[0].actived = true
        }
      },
      showPreviewbox: function () {
        this.isShow = !this.isShow
      },
      pre2next: function (num) {
        if (num === -1 && (this.currentNumber !== 0)) {
          this.currentNumber -= 1
        }
        if (num === 1 && this.currentNumber < this.questionList.length - 1) {
          this.currentNumber += 1
        }
        for (let i in this.questionList) {
          this.questionList[i].actived = false
        }

        this.questionList[this.currentNumber].actived = true
      },
      showTarget: function (item, index) {
        for (let i in this.questionList) {
          this.questionList[i].actived = false
        }
        item.actived = true
        this.currentNumber = index
      }
    },
    filters: {
      round: function (val) {
        if (val < 10) {
          val = '0' + (++val)
        }
        return val
      }
    }
  }
</script>