<template>
  <div>
    <!-- layout -->
    <lay-out :tab-type="tabTitle"></lay-out>
    <div class="container">
      <section class="list">
        <li class="list-item">
          <div class="date-info">
            <span>Apr 19</span>
            <span>2016</span>
            <img src="../assets/images/common/7.png" class="status-btn">
          </div>
          <div class="lensson-info">
            <h5 class="title">Java 程序设计</h5>
            <p class="content">
              <span>课程简介：</span>
              java 在大数据及云计算上的应用</p>
            <div class="buy">
              <button class="btn">已购买</button>
              <span class="price">￥: 219</span>
            </div>
          </div>
        </li>
        <li class="list-item">
          <div class="date-info">
            <span>Apr 19</span>
            <span>2016</span>
            <img src="../assets/images/common/8.png" class="status-btn">
          </div>
          <div class="lensson-info">
            <h5 class="title">Java 程序设计</h5>
            <p class="content">
              <span>课程简介：</span>
              java 在大数据及云计算上的应用</p>
            <div class="buy">
              <button class="btn">购买</button>
              <span class="price">￥: 219</span>
            </div>
          </div>
        </li>
        <li class="list-item">
          <div class="date-info">
            <span>Apr 19</span>
            <span>2016</span>
            <img src="../assets/images/common/8.png" class="status-btn">
          </div>
          <div class="lensson-info">
            <h5 class="title">Java 程序设计</h5>
            <p class="content">
              <span>课程简介：</span>
              java 在大数据及云计算上的应用</p>
            <div class="buy">
              <button class="btn">购买</button>
              <span class="price">￥: 219</span>
            </div>
          </div>
        </li>
    </section>
    </div>
  </div>
</template>
<script>
  require('../assets/scss/reset.scss')
  export default {
    data: function () {
      return {
        tabTitle: '知识串讲'
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
$skyblue: #12b7f5;

.container {
  padding-top: 2.5rem; 
}
.list {
  width: 100%;
  padding: 1rem 0;

  &-item {
    display: flex;
    flex-flow: row nowrap;
    margin-bottom: .8rem;
    padding: .5rem .8rem;
    color: #FFF;
    background-color: $skyblue;
    overflow: hidden;

    .date-info {
      position: relative;
      width: 30%;
      font-size: 1.2rem;
      text-align: center;
      &:after {
        position: absolute;
        top: -.5rem;
        right: 10px;
        content: 'line';
        text-indent: -9999px;
        display: inline-block;
        height: 120%;
        width: 1px;
        background-color: #FFF;
        z-index: 0;
      }
      span {
        display: block;
      }
      .status-btn {
        position: absolute;
        bottom: 30px;
        right: -7px;
        z-index: 1;
      }
    }

    .lensson-info {
      width: 70%;
      padding-left: .5rem;
      .title {
        padding: 5px 0;
      }
      .content {
        padding-bottom: 5px;
      }
    }
    .buy {
      display: flex;
      justify-content: space-between;

      .btn {
        width: 80px;
        height: 28px;
        color: $skyblue;
        border-radius: 25px;
        border: 0;
        background-color: #FFF;
        cursor: pointer;
      }
      .price {
        font-weight: 700;
      }
    }
  }

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
