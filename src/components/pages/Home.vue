<template>
  <div>
    <app-intro-home></app-intro-home>
    <app-nav></app-nav>
      <main id="main">
        <section id="about" class="about">
          <div class="container">

            <div class="section-title">
              <h2>Welcome!</h2>
            </div>

            <div class="row">
              <div class="col-lg-6">
                <img src="./../../assets/img/Victor-Ajisafe/IMG_6291.jpg" class="img-fluid" alt="">
              </div>
              <div class="col-lg-6 pt-4 pt-lg-0 content">
                <!-- <h3>Voluptatem dignissimos <strong>provident quasi corporis voluptates</strong></h3> -->
                <p class="font-italic">
                  A nice Welcome message here...
                </p>

              </div>
            </div>

          </div>
        </section><!-- End About Us Section -->

        <!-- End Counts Section -->

        <!-- ======= Our Services Section ======= -->
        <!-- End Our Services Section -->

        <!-- ======= Cta Section ======= -->
        <section class="cta">
          <div class="container">

            <div class="text-center">
              <a class="cta-btn" href="/church/about-us">Learn More</a>
            </div>

          </div>
        </section><!-- End Cta Section -->

        <!-- ======= More Services Section ======= -->
        <!-- End More Services Section -->

        <!-- ======= Info Box Section ======= -->
       <!-- End Info Box Section -->

        <!-- ======= Our Portfolio Section ======= -->
        
        <!-- ======= Our Team Section ======= -->
        
      </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import IntroHome from './../blocks/IntroHome'
import Nav from './../blocks/Nav'
import Footer from './../blocks/Footer'

export default {
  components:{
    appIntroHome: IntroHome,
    appNav: Nav,
    appFooter: Footer
  }
}
</script>