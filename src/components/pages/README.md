# PAGES

This directory contains your Application Views and Routes.
The framework reads all the `*.vue` files inside this directory and creates the router of your application.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/routing).
<header id="header" class="fixed-top">
    <div class="container">

      <div class="logo float-left">
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <h1 class="text-light"><nuxt-link to="#header"><span>NewBiz</span></nuxt-link></h1> -->
        <nuxt-link to="#portfolio" class="scrollto"><img src="~/assets/img/logo.png" alt="" class="img-fluid"></nuxt-link>
      </div>

      <nav class="main-nav float-right d-none d-lg-block">
        <ul>
          <li class="nav-item"><nuxt-link to="/">Home</nuxt-link></li>
          <li class="drop-down nav-item"><nuxt-link to="#" :class="activedrop">Church</nuxt-link>
            <ul>
              <li><nuxt-link to="/church/about">About Us</nuxt-link></li>
              <li><nuxt-link to="/church/vision">Our Vision</nuxt-link></li>
              <li><nuxt-link to="/church/mission">Our Mission</nuxt-link></li>
              <li><nuxt-link to="#">Leadership</nuxt-link></li>
              <li><nuxt-link to="/church/worship-times">Worship Times</nuxt-link></li>
            </ul>
          </li>
          <!-- <li class="drop-down nav-item"><nuxt-link to="#">Get Involved</nuxt-link>
            <ul>
              <li><nuxt-link to="#about">Ushering Department</nuxt-link></li>
              <li><nuxt-link to="#services">Technical Department</nuxt-link></li>
              <li><nuxt-link to="#contact">Security Department</nuxt-link></li>
              <li><nuxt-link to="#portfolio">Children's Department</nuxt-link></li>
              <li><nuxt-link to="#team">Choir Department</nuxt-link></li>
              <li><nuxt-link to="#contact">Prayer Band</nuxt-link></li>
              <li><nuxt-link to="#portfolio">Evangelism Department</nuxt-link></li>
              <li><nuxt-link to="#team">Outreach</nuxt-link></li>
            </ul>
          </li> -->
          <li class="nav-item"><nuxt-link to="/sermon">Sermon</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="#">Events</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="#">Radio I Am</nuxt-link></li>
          <li>
            <nuxt-link to="#portfolio" class="btn-get-started scrollto">Donations</nuxt-link>
          </li>
        </ul>
      </nav><!-- .main-nav -->
      
    </div>
  </header>

