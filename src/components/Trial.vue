<template>
  <div>
    <title>Trial</title>
    <p>Elereke doughnut</p>
    <button class="btn btn-secondary" @click="goHome">Go Home</button>
  </div>
</template>

<script>
  export default {
    methods:{
      goHome(){
        this.$router.push({name: 'home'})
      }
    }
  }
</script>