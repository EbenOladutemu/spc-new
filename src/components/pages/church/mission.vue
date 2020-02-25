<template>
  <div>
    <app-nav></app-nav>

    <section id="about" style="margin-top: 100px">
      <div class="container">

        <header class="section-header fadeInUp wow">
          <h3>Our Mission</h3>
        </header>

        <div class="row about-container">
          <div class="col-lg-6 content order-lg-1 order-2">
            <p>
              The mision statement of the ministry is <strong>&quot;Winning lost souls for Christ&quot;.</strong>
            </p>
          </div>   
        </div>
      </div>
    </section>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Nav from '~/components/Nav'
// import Intro from '~/components/Intro'
import Footer from '~/components/Footer'

export default {
  components:{
    appNav: Nav,
    // appIntro: Intro,
    appFooter: Footer
  }
}
</script>