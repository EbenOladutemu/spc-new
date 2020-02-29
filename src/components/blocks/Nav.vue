<template>
  <header id="header">
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
          <li class="active">
            <router-link to="#header">Home</router-link>
          </li>
          <li class="drop-down"><router-link to="">Church</router-link>
            <ul>
              <li><router-link to="#">About Us</router-link></li>
              <li><router-link to="#">Our Mission</router-link></li>
              <li><router-link to="#">Our Vision</router-link></li>
              <li><router-link to="#">Leadership</router-link></li>
            </ul>
          </li>
          <li><router-link to="#about">Departments</router-link></li>
          <li><router-link to="/sermon">Sermon</router-link></li>
          <li><router-link to="#portfolio">Gallery</router-link></li>
          <li><router-link to="#team">Donate</router-link></li>
          <li><router-link to="#contact">Contact Us</router-link></li>

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
.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-exact-active{
  color: #e04407!important;
}

.active-drop:active{
  color: #e04407!important
}

.img-size{
  width: 60px;
  margin-top: -5px!important;
}
</style>