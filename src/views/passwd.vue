<template>
  <div>
    <div class="page"></div>
    <div class="form">
      <form method="" action="">
        <label>
        	<input type="password" name="current" placeholder="当前密码">
        </label>
        <label>
          <input type="password" name="newPasswd1" placeholder="新密码">
        </label>
        <label>
          <input type="password" name="newPasswd2" placeholder="新密码确认">
        </label>
        <label>
          <input type="submit" name="" value="确认">
        </label>
      </form>
    </div>
  </div> 	
</template>

<script>
  
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
  .form {
  	position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  	z-index: 1;

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
</style>
