<template>
  <div>
    <div class="page"></div>
    <div class="wrap">
      <form method="post" action="/szcw" class="form"
            v-on:submit.prevent="onSubmit">
        <label>
        	<input type="password" name="current" placeholder="当前密码"
                 v-model="formData.oldPasswd">
        </label>
        <label>
          <input type="password"
                 name="newPasswd1"
                 placeholder="新密码"
                 v-model="formData.newPasswd1">
        </label>
        <label>
          <input type="password"
                 name="newPasswd2"
                 placeholder="新密码确认"
                 v-model="formData.newPasswd2">
        </label>
        <label>
          <input type="submit" name="" value="确认">
        </label>
      </form>
      <div class="tipInfo" ref='tip'>
        <p v-text="tipInfo"></p>
      </div>

      <!-- <transition name="fade">
        <p v-if="isPass">hello</p>
      </transition> -->
    </div>
  </div> 	
</template>

<script>
  export default {
    data: function () {
      return {
        formData: {
          newPasswd1: '',
          newPasswd2: ''
        },
        isPass: false,
        tipInfo: ''
      }
    },
    methods: {
      onSubmit: function () {
        let self = this
        // if (event) {
        //   event.preventDefault()
        // }
        if (!this.formData.oldPasswd || !this.formData.newPasswd1 || !this.formData.newPasswd2) {
          self.tipInfo = '密码不能为空'
          this.fateOUt()
          this.isPass = true
          return false
        }
        if (this.formData.newPasswd1.length < 6 || this.formData.newPasswd2.length < 6) {
          self.tipInfo = '密码不能少于6个字符'
          this.fateOUt()
          return false
        }
        if (this.formData.newPasswd1 !== this.formData.newPasswd2) {
          self.tipInfo = '输入的新密码不一致'
          this.fateOUt()
          return false
        }
        return true
      },
      fateOUt: function () {
        let self = this
        this.$refs.tip.style.opacity = 1
        setTimeout(function () {
          self.$refs.tip.style.opacity = 0
        }, 1500)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('../assets/images/common/beijing.png') top center no-repeat;
    background-size: contain;
    z-index: 0;
  }
  .wrap {
    position: relative;
    width: 100%;
    height: 100%;
    padding-top: 19rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .form {

      label {
        display: flex;
      }
      input {
        line-height: 100%;
        margin: .4rem 0;
        padding: .7rem .3rem;
        border-radius: .4rem;
        font-size: 16px;
        outline: none;
        border: 0;
      }
      input[type='submit'] {
        width: 198px;
        margin-top: .5rem;
        color: #FFF;
        letter-spacing: 2px;
        background-color: #F66;
      }
    }
    .tipInfo {
      width: 11rem;
      height: 48px;
      display: flex;
      align-items: center;
      line-height: 100%;
      padding: 0 1rem;
      color: #FFF;
      text-align: center;
      border-radius: 8px 8px;
      opacity: 0;
      background-color: rgba(0, 0, 0, .4);
      transition: all .3s ease-out-in;

      p {
        width: 100%;
        line-height: 100%;
      }
    }
  }
</style>
