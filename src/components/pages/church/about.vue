<template>
  <div>
    <app-nav></app-nav>

    <!-- About Us Section -->
    <section id="about" style="margin-top: 100px">
      <div class="container">

        <header class="section-header fadeInUp wow">
          <h3>About Us</h3>
        </header>

        <div class="row about-container">
          <div class="col-lg-6 content order-lg-1 order-2">
            <p>
              Our Mandate started in a prayer meeting 27 years ago. The man of God, Evangelist Victor Ajisafe was present and also a Sierra Leonean lady was also present, while the prayer meeting was going on, the Sierra Leonean lady raised a prayer point for Sierra Leone and the Lord spoke to him that you are not only praying for Sierra Leone, I am Sending you to Sierra Leone.
            </p>
          </div>
          <div class="col-lg-6 background order-lg-2 order-1 wow fadeInUp">
            <img src="" class="img-fluid" alt="">
          </div>
        </div>

        <div class="row about-extra">
          <div class="col-lg-6 wow fadeInUp">
            <img src="" class="img-fluid" alt="">
          </div>
          <div class="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
            <p>
              In 1995, the Sanctuary Praise Church started at CCSL and moved to Brookfields Hotel and presently at Sawi Drive which is the headquarters. As the name implies, Christ Revival Evangelistic Ministry believes in soul winning, deliverance and praying in the Spirit. We are now operating nationally and internationally.
            </p>
            <p>
              We focus primarily on the undiluted word of God and praying in the Spirit.<br>

              Our mission is to preach the undiluted word of God in Sierra Leone to the people, healing the sick and setting the captivies free.

              Gradually we are reaching out, to people in remote parts of the country and beyond with our radio station, Radio I Am Fm 97.6, God's Air Force Base which operates 24 hour round the clock.
            </p>
          </div>
        </div>

        <!-- <div class="row about-extra">
          <div class="col-lg-6 wow fadeInUp order-1 order-lg-2">
            <img src="~/assets/img/about-extra-2.svg" class="img-fluid" alt="">
          </div>

          <div class="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1">
            
          </div>
          
        </div> -->

      </div>
    </section>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Nav from '~/components/Nav'
import Intro from '~/components/Intro'
import Footer from '~/components/Footer'

export default {
  components:{
    appNav: Nav,
    appIntro: Intro,
    appFooter: Footer
  }
}
</script>