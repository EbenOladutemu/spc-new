<template>
  <div>
    <h1>The User Page</h1>
    <hr>
    <transition name="shutter" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.shutter-enter-active{
  animation: shutter-in .5s ease-out forwards;
}
.shutter-leave-active{
  animation: shutter-out .5s ease-out forwards;
  position: absolute;
}
.shutter-move{
  transition: transform 1s;
}
@keyframes shutter-in {
  from{
    transform: rotateX(90deg)
  }
  to{
    transform: translateY(0)
  }
}
@keyframes shutter-out {
  from{
    transform: translateY(0)
  }
  to{
    transform: rotateY(-90deg)
  }
}
</style>