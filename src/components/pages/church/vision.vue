<template>
  <div>
    <app-nav></app-nav>

    <section id="about" style="margin-top: 100px">
      <div class="container">

        <header class="section-header fadeInUp wow">
          <h3>Our Vision</h3>
        </header>

        <div class="row about-container">
          <div class="col-lg-6 content order-lg-1 order-2">
            <p>
              The vision statement of the ministry is <strong>"A place where destiny is established and dreams become reality".</strong>
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