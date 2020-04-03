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
                <img src="./../../assets/img/Victor_Ajisafe/IMG_6291.jpg" class="img-fluid" alt="">
              </div>
              <div class="col-lg-6 pt-4 pt-lg-0 content">
                <!-- <h3>Voluptatem dignissimos <strong>provident quasi corporis voluptates</strong></h3> -->
                <p>
                  We are excited that you’re here. On behalf of our entire church family we want you to know
                  that we are dedicated to preaching and teaching the undiluted word of God to everyone. God is
                  doing some very exciting things in the hearts and lives of the people who are part of this
                  ministry and call it their home.
                </p>
                <p>
                  We focus primarily on the undiluted word of God, praying in the Spirit, healing the sick, setting
                  the captives free and winning souls for God’s Kingdom.
                  We pray you will step into this journey with us and that you will find here meaningful
                  opportunities to connect with others who share this vision.
                </p>
                <p>
                  I hope you will be specially blessed today and that you will choose to join us each week as we
                  grow together!
                </p>
                <p style="font-size: 20px">
                  God bless you.<br>
                  <em>Evangelist Victor Ajisafe</em>
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