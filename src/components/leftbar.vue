<template>
  <div class="leftBar">
    <div class="left-bar" :class="{'show' : isShow}">
      <div class="left-bar-content">
        <div>
          <img src="../assets/images/floatBar/bg.png" alt="photo" class="left-bar-content__photo">
        </div>
        <div class="weui-panel weui-panel_access">
          <div class="weui-cells">
            <div class="weui-cell">
              <div class="weui-cell__hd"><img src="../assets/images/floatBar/touxiang.png"></div>
             <div class="weui-cell__bd">
               <p id="username">姓名: {{ User.username }}</p>
             </div>
            </div>
            <div class="weui-cell">
              <div class="weui-cell__hd"><img src="../assets/images/floatBar/account_icon.png"></div>
              <div class="weui-cell__bd">
                <p id="userID">账号: {{ User.accountID }}</p>
              </div>
            </div>
            <router-link to="/resetpasswd" class="weui-cell weui-cell_access">
              <div class="weui-cell__hd"><img src="../assets/images/floatBar/pen.png">
              </div>
              <div class="weui-cell__bd">
                <p>修改密码</p>
              </div>
              <span class="weui-cell__ft"></span>
            </router-link>
            <a class="weui-cell weui-cell_access" href="javascript:;">
              <div class="weui-cell__hd"><img src="../assets/images/floatBar/notepad.png"></div>
              <div class="weui-cell__bd">
                <p>历史记录</p>
              </div>
              <span class="weui-cell__ft"></span>
            </a>
            <a class="weui-cell weui-cell_access" href="javascript:;">
              <div class="weui-cell__hd">
              　　<img src="../assets/images/floatBar/turnoff.png">
              </div>
              <div class="weui-cell__bd">
              　　<p>注销登录</p>
              </div>
              <span class="weui-cell__ft"></span>
            </a>
          </div>	 
        </div>
       <!--  <div class="left-bar-content__backIcon" v-on:click="toggle()">
        　 <img src="../assets/images/floatBar/fanhui.png" alt="返回">
        </div> -->
     </div>
    </div>
  </div>
</template>

<!-- script -->
<script>
  let userInfo = {
    username: 'leiyu',
    accountID: 123456
  }
  export default {
    name: 'leftbar',
    data: function () {
      return {
        User: userInfo
      }
    },
    props: ['isShow'],
    methods: {
      toggle: function (e) {
        // console.log(this.$refs.mask)
        // this.isShow = !this.isShow
      }
    }
  }
</script>

<!-- style -->
<style lang="scss" scoped>
// color
$white: white;
$deepbalck: rgba(0, 0, 0, .5);
$width: 270px;

.fixed {
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
}
.leftBar {
  width: $width;
  overflow: hidden;
}
.left-bar {
	@extend .fixed;
	width: $width;
	background-color: $white;
	transform: translateX(-110%);
	transition: all .5s ease-in-out;
	visibility: hidden;
	z-index: 999;
	// opacity: 0; 
  
  &.show {
    visibility: visible;
    transform: translateX(0);
  }
	&-content {
		@extend .fixed;
		width: 100%;
		background-color: $white;
		z-index: 9;
	}
	&-content__photo {
		width: 100%;
		height: auto;
    background-size: contain;
	}
}
/*
 * weui style
 */

// hide border line
.weui-panel:after, 
.weui-panel:before,
.weui-cells:after,
.weui-cells:before,
.weui-cell:after,
.weui-cell:before {
	display: none;
	border: 0;
}
.weui-cell__bd {
	line-height: 100%;
	padding-left: 1rem;
	margin-top: -8px;
}
</style>
