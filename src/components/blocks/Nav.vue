<template>
  <header id="header" class="sticky-top navbar">
    <div class="container d-flex">

      <div class="logo mr-auto">
        <!-- Uncomment below if you prefer to use text -->
        <!-- <h1 class="text-light">
          <router-link to="index.html"><span>SPC</span></router-link>
        </h1> -->
        <router-link to="/">
          <img src="./../../assets/img/spc-logo.jpg" alt="" class="img-fluid img-size">
        </router-link>
      </div>

      <nav class="nav-menu d-none d-lg-block">
        <ul>
          <li>
            <router-link to="/" active-class="active" exact>Home</router-link>
          </li>
          <li class="drop-down"><router-link to="#">Church</router-link>
            <ul>
              <li><router-link to="/church/about-us" active-class="active">About Us</router-link></li>
              <li><router-link to="/church/mission-vision" active-class="active">Our Mission & Vision</router-link></li>
              <li><router-link to="/church/leadership" active-class="active">Leadership</router-link></li>
              <li><router-link to="/church/worship-times" active-class="active">Worship Times</router-link></li>
            </ul>
          </li>
          <li><router-link to="/departments" active-class="active">Departments</router-link></li>
          <li><router-link to="/sermon" active-class="active">Sermon</router-link></li>
          <li><router-link to="https://spc-another.netlify.com/gallery" active-class="active">Gallery</router-link></li>
          <li><router-link to="#" active-class="active">Donate</router-link></li>
          <li><router-link to="/contact" active-class="active">Contact Us</router-link></li>

        </ul>
      </nav>

    </div>
  </header>
</template>

<script>
export default {
  data(){
    return{
      activedrop: 'active-drop'
    }
  }
}
</script>

<style scoped>
.active{
  color: #4cbba9!important;
}

.img-size{
  width: 60px;
  margin-top: -5px!important;
}
</style>