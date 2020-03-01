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
          <li>
            <router-link to="#header" active-class="active" exact>Home</router-link>
          </li>
          <li class="drop-down"><router-link to="">Church</router-link>
            <ul>
              <li><router-link to="/church/about" active-class="active">About Us</router-link></li>
              <li><router-link to="/church/mission" active-class="active">Our Mission</router-link></li>
              <li><router-link to="/church/vision" active-class="active">Our Vision</router-link></li>
              <li><router-link to="/church/leadership" active-class="active">Leadership</router-link></li>
            </ul>
          </li>
          <li><router-link to="/department" active-class="active">Departments</router-link></li>
          <li><router-link to="/sermon" active-class="active">Sermon</router-link></li>
          <li><router-link to="/gallery" active-class="active">Gallery</router-link></li>
          <li><router-link to="/donate" active-class="active">Donate</router-link></li>
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