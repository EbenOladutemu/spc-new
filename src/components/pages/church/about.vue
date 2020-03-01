<template>
  <div>
    <app-intro>
      <img src="./../../../assets/img/slide/slide-1.jpg" alt="" slot="bg-img">
      <span slot="heading">About Us</span>
    </app-intro>
    <app-nav></app-nav>

    <!-- About Us Section -->
    <section id="about" class="about">
      <div class="container">
        <header class="section-header wow animated fadeInUp text-center">
          <h3>About Us</h3>
        </header>
        <div class="row wow animated fadeInUp">
          <div class="col-lg-6">
            <img src="./../../../assets/img/about.jpg" class="img-fluid" alt="">
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 content">
            <p>
              <span style="font-size: 40px; ">O</span>ur Mandate started in a prayer meeting 27 years ago. The man of God, Evangelist Victor Ajisafe was present and also a Sierra Leonean lady was also present, while the prayer meeting was going on, the Sierra Leonean lady raised a prayer point for Sierra Leone and the Lord spoke to him that you are not only praying for Sierra Leone, I am Sending you to Sierra Leone.
            </p>
            <p>
              In 1995, the Sanctuary Praise Church started at CCSL and moved to Brookfields Hotel and presently at Sawi Drive which is the headquarters. As the name implies, Christ Revival Evangelistic Ministry believes in soul winning, deliverance and praying in the Spirit. We are now operating nationally and internationally.
            </p>
          </div>
        </div>
      </div>
    </section>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Nav from './../../blocks/Nav'
import Intro from './../../blocks/Intro'
import Footer from './../../blocks/Footer'

export default {
  components:{
    appNav: Nav,
    appIntro: Intro,
    appFooter: Footer
  }
}
</script>