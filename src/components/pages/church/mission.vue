<template>
  <div>
    <app-intro></app-intro>
    <app-nav></app-nav>

    <section id="about">
      <div class="container">

        <header class="section-header text-center animated fadeInUp wow">
          <h3>Our Mission</h3>
        </header>

        <div class="row about-container">
          <div class="col-lg-6 content order-lg-1 order-2">
            <p>
              <span style="font-size: 40px">O</span>ur mission is to preach the undiluted word of God in Sierra Leone to the people, healing the sick, setting the captives free and winning souls for the Kingdom of God.<br>
              We focus primarily on preaching the undiluted word of God and praying in the Spirit, winning the lost at all cost by depopulating hell and populating Heaven.
              Gradually we are reaching out, to people in remote parts of the country and beyond with our radio station, Radio I Am FM 97.7 God&#39;s Air Force Base which operate 24 hours round the clock.
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
// import Intro from '~/components/Intro'
import Footer from './../../blocks/Footer'

export default {
  components:{
    appNav: Nav,
    // appIntro: Intro,
    appFooter: Footer
  }
}
</script>