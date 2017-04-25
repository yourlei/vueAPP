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
  import Vue from 'vue'
  import vueResource from 'vue-resource'
  Vue.use(vueResource)

  export default {
    data: function () {
      return {
        questionList: [],
        isShow: false,
        currentNumber: 0
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        this.getList()
      })
    },
    methods: {
      getList: function () {
        this.$http.get('/static/data/questions.json').then(function (res) {
          let params = this.$route.params.id
          // according $route params id load json data
          this.questionList = res.body.questions[params]
          this.initData()
        }, function (err) {
          console.log(err)
        })
      },
      initData: function () {
        // for (let i = 0; i < this.questionList.length; i++) {
        //   if (typeof this.questionList[i].actived === 'undefined') {
        //     this.questionList[i].actived = false
        //   }
        // }
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
<style lang="scss" scoped>
$skyblue: #12b7f5;

.container {
  padding-top: 3rem;
  padding-bottom: 3rem;
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

  .btn {
    position: absolute;
    left: 2rem;
  }
  .title {
    display: inline-block;
  }
}
.wrap {
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  overflow: hidden;
  
  .list-item {
    width: 100%;
    display: none;
    &.actived {
      display: inline-block;
    }
    .numberID {
      width: 3rem;
      height: 3rem;
      padding: .2rem .3rem;
      font-size: 2rem;
      color: $skyblue;
    }
    .question {
      font-size: 1.2rem;
      font-weight: 400;
      letter-spacing: 1px;
    }
    .answer {
      margin-top: 5px;
      font-size: 1.2rem;
      letter-spacing: 1px;
    }
  }
}
.paper {
  position: relative;
  
  .preview-box {
    position: fixed;
    bottom: 70px;
    left: 50%;
    width: 50%;
    padding: 1rem .5rem;
    text-align: center;
    transform: translateX(-50%);
    border-radius: 5px 5px;
    opacity: 0;
    transition: all .3s ease-in-out;
    background-color: rgba(185, 156, 156, 0.8);
    &.show {
      opacity: 1;
    }
    .inner {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;

      span {
        display: inline-flex;
        width: 2.5rem;
        height: 2.5rem;
        padding: 5px;
        margin: 5px;
        align-items: center;
        justify-content: center;
        background-color: #FFF;
        cursor: pointer;
      }
    }
    .triangle {
      position: absolute;
      display: inline-block;
      height: 0;
      width: 18px;
      text-indent: 9999px;
      transform: translate(-50%, 15px);
      border-top: 18px solid rgba(185, 156, 156, 0.8);
      border-right: 18px solid transparent;
      border-bottom: 18px solid transparent;
      border-left: 18px solid transparent;
    }
  }
  @media (min-width: 768px) {
    .preview-box {
      width: 320px;
      height: auto;
    }
  }
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 48px;
    padding: 10px 0;
    background-color: #FFF;
  }
  .tab-group {
    display: flex;
    align-items: center;
    justify-content: space-around;
    line-height: 100%;
    span {
      display: inline-flex;

      cursor: pointer;
    }
  }
}
</style>