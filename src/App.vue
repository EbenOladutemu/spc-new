
<template>
  <div>
    <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    
  </div>
</template>

<script>

export default {
  components:{
  }
}
</script>

<style>
  .fade-enter{
		opacity: 0;
	}
	.fade-enter-active{
    transition: opacity 1s;
	}
  .fade-leave{
		/* opacity: 1 */
	}
	.fade-leave-active{
    transition: opacity .5s;
    opacity: 0;
	}
</style>
