<!-- eslint-disable no-constant-condition -->

<template>
  <div>
    <h3>User Details</h3>
    <p>Welcome, User {{$route.params.id}}</p>
    <router-link tag="button" 
      :to="link" 
      class="btn btn-success">Edit User
    </router-link>
    <button class="btn btn-info ml-3" @click="goBack">Go back</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      link: { 
        name: 'userEdit', 
        params: {
          id: this.$route.params.id
        }, 
        query:{
          locale: 'en', lat: '95.6', lon: '49'
        }, 
        hash: '#jump' 
      }
    }
  },
   beforeRouteEnter(to, from, next) { //this is a method not a function like the other 3 instances
    //console.log('Component guard')
    // eslint-disable-next-line no-constant-condition
    if(true) {
      next();
    }
    else {
      console.log('Component guard');
      next(false)
    }
  },
  methods:{
    goBack(){
      window.history.back()
    }
  }
}
</script>