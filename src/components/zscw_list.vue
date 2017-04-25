<template>
	<div class="zscw-list">
	  <!-- lesson list -->
    <div class="lesson-group">
      <div class="weui-cells">
        <div class="weui-cell">
          <div class="weui-cell__hd"><img src="../assets/images/index/plus_sign.png" class="sign"></div>
          <div class="weui-cell__bd">
            <p>Java编程</p>
          </div>
          <div class="weui-cell__ft">
            <img src="../assets/images/index/pen.png" alt="">
          </div>
        </div>
      </div>
      <div class="lensson-progress">
        <div class="progress-bar">
          <div class="progress-innerbar"></div>
        </div>
        <div class="counter">20/20</div>
      </div>
      <div class="childItems">
        <div class="weui-cells">
          <a href='./zscw_detail.html' class="weui-cell">
            <div class="weui-cell__hd"><img src="../assets/images/index/circle.png"></div>
            <div class="weui-cell__bd">
               <p>第一章 Java编程</p>
            </div>
            <div class="weui-cell__ft">
              <img src="../assets/images/index/pen.png" alt="">
            </div>
          </a>
        </div>
        <div class="lensson-progress">
          <div class="progress-bar">
            <div class="progress-innerbar"></div>
          </div>
          <div class="counter">20/20</div>
        </div>
        <div class="weui-cells">
          <a href='./zscw_detail.html' class="weui-cell">
            <div class="weui-cell__hd"><img src="../assets/images/index/circle.png"></div>
            <div class="weui-cell__bd">
               <p>第一章 Java编程</p>
            </div>
            <div class="weui-cell__ft">
              <img src="../assets/images/index/pen.png" alt="">
            </div>
          </a>
        </div>
        <div class="lensson-progress">
          <div class="progress-bar">
            <div class="progress-innerbar"></div>
          </div>
          <div class="counter">20/20</div>
        </div>
        <div class="weui-cells">
          <a href='./zscw_detail.html' class="weui-cell">
            <div class="weui-cell__hd"><img src="../assets/images/index/circle.png"></div>
            <div class="weui-cell__bd">
               <p>第一章 Java编程</p>
            </div>
            <div class="weui-cell__ft">
              <img src="../assets/images/index/pen.png" alt="">
            </div>
          </a>
        </div>
        <div class="lensson-progress">
          <div class="progress-bar">
            <div class="progress-innerbar"></div>
          </div>
          <div class="counter">20/20</div>
        </div>
      </div>
    </div>
	</div>
</template>

<script>
  export default {
    name: 'zscwList'
  }
</script>

<style lang="scss">
// variable
$white: #FFF;
$skyblue: #12b7f5;

// weui style
.weui-cells {background-color: transparent;}

.lesson-group {
  // padding-top: .5rem;
  // padding-bottom: 1rem;
  border-bottom: 1px solid #8e8e8e;
  overflow: hidden;
  .weui-cells {
    cursor: pointer;

    &:before, &:after {border: 1px solid transparent;}
  }
  .weui-cell__bd {
    padding-left: 1rem;
  }
  .childItems {
    padding-top: 1rem;
    display: none;
    background-color: $white;
    // height: 0;
    a {
      text-decoration: none;
      color: #000;
    }
  }
  .lensson-progress {
    flex: 1;
    align-items: center;
    white-space: nowrap;
    visibility: hidden;
    .progress-bar { 
      float: left;
      width: 50%;
      height: 3px;
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      flex: 1;
      margin-top: 8px;
      margin-left: 4rem;
      background-color: #8e8e8e;
    }
    .progress-innerbar {
      width: 50%;
      height: 100%;
      background-color: $skyblue;
    }
    .counter {
      width: 10%;
      display: flex;
      padding-left: 1rem;
    }
  }
}
</style>
