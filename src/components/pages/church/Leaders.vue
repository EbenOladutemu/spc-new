<template>
  <div>
    <app-intro>
      <img src="./../../../assets/img/More/IMG_20191206_195938_3.jpg" alt="" slot="bg-img">
      <span slot="heading">Leadership</span>
    </app-intro>
    <app-nav></app-nav>
    <section id="team" class="team">
      <div class="container">

        <div class="section-title animated fadeInUp wow">
          <h2>Our Leaders</h2>
        </div>

        <div class="row animated fadeInDown wow">

          <div class="col-xl-4 col-lg-4 col-md-6">
            <div class="member">
              <img src="./../../../assets/img/team/team-1.jpg" class="img-fluid" alt="">
              <div class="member-info">
                <div class="member-info-content">
                  <h4>Walter White</h4>
                  <span>Chief Executive Officer</span>
                </div>
                <div class="social">
                  <a href=""><i class="icofont-twitter"></i></a>
                  <a href=""><i class="icofont-facebook"></i></a>
                  <a href=""><i class="icofont-instagram"></i></a>
                  <a href=""><i class="icofont-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-4 col-lg-4 col-md-6" data-wow-delay="0.1s">
            <div class="member">
              <img src="./../../../assets/img/team/team-2.jpg" class="img-fluid" alt="">
              <div class="member-info">
                <div class="member-info-content">
                  <h4>Sarah Jhonson</h4>
                  <span>Product Manager</span>
                </div>
                <div class="social">
                  <a href=""><i class="icofont-twitter"></i></a>
                  <a href=""><i class="icofont-facebook"></i></a>
                  <a href=""><i class="icofont-instagram"></i></a>
                  <a href=""><i class="icofont-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-4 col-lg-4 col-md-6" data-wow-delay="0.2s">
            <div class="member">
              <img src="./../../../assets/img/team/team-3.jpg" class="img-fluid" alt="">
              <div class="member-info">
                <div class="member-info-content">
                  <h4>William Anderson</h4>
                  <span>CTO</span>
                </div>
                <div class="social">
                  <a href=""><i class="icofont-twitter"></i></a>
                  <a href=""><i class="icofont-facebook"></i></a>
                  <a href=""><i class="icofont-instagram"></i></a>
                  <a href=""><i class="icofont-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    <app-footer></app-footer>  
  </div>
</template>

<script>
import Footer from './../../blocks/Footer'

export default {
  components:{
    appFooter: Footer
  }
}
</script>

<style>

</style>