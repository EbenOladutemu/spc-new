<template>
  <div>
    <h3>Edit the User {{$route.params.id}}</h3>
    <input type="text" autofocus="true" class="form-control" style="width: 25%">
    <p>
      Your location is <b>{{$route.query.locale}}</b> with latitude: <b>{{$route.query.lat}}</b> and longitude: <b>{{$route.query.lon}}</b>
    </p>
    <button class="btn btn-info" @click="goBack">Go back</button>
    <hr>
    <button class="btn btn-success" @click="editConfirmed">Confirm Edit</button>
    <!-- <a href="#jump">Go down</a> -->
    <div style="height: 600px"></div>
    <div id="jump">Jump here</div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      confirmed: false
    }
  },
  methods:{
    goBack(){
      window.history.back()
    },
    editConfirmed(){
      if (confirm('Confirm this changes?')){
        this.confirmed = true
      }
      else this.confirmed
    }
  },
  beforeRouteLeave(to, from, next){
    if (this.confirmed) {
      next();
    }
    else {
      if (confirm('You have unsaved changes. Are you sure you want to leave?')){
        next();
      } 
      else next (false);
    }
  }
}
</script>