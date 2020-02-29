<template>
  <div>
    <app-intro></app-intro>
    <app-nav></app-nav>

      <main id="main">
        <section id="why-us" class="wow fadeIn" style="margin-top: 100px">
          <div class="container">
            <header class="section-header">
              <h3>Sermon</h3>
              <p>Missed a message? Want to hear it again? Find weekly messages from Sanctuary Praise Church here.</p>
            </header>

            <!-- <div class="row row-eq-height justify-content-center">

              <div class="col-lg-4 mb-4">
                <div class="card wow bounceInUp">
                    <i class="fa fa-diamond"></i>
                  <div class="card-body">
                    <h5 class="card-title">Corporis dolorem</h5>
                    <p class="card-text">Deleniti optio et nisi dolorem debitis. Aliquam nobis est temporibus sunt ab inventore officiis aut voluptatibus.</p>
                    <a href="#" class="readmore">Read more </a>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 mb-4">
                <div class="card wow bounceInUp">
                    <i class="fa fa-language"></i>
                  <div class="card-body">
                    <h5 class="card-title">Voluptates dolores</h5>
                    <p class="card-text">Voluptates nihil et quis omnis et eaque omnis sint aut. Ducimus dolorum aspernatur.</p>
                    <a href="#" class="readmore">Read more </a>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 mb-4">
                <div class="card wow bounceInUp">
                    <i class="fa fa-object-group"></i>
                  <div class="card-body">
                    <h5 class="card-title">Eum ut aspernatur</h5>
                    <p class="card-text">Autem quod nesciunt eos ea aut amet laboriosam ab. Eos quis porro in non nemo ex. </p>
                    <a href="#" class="readmore">Read more </a>
                  </div>
                </div>
              </div>
            </div> -->
          </div>
        </section><hr>
      <app-footer></app-footer>
    </main>
  </div>
</template>

<script>
import Intro from './../blocks/Intro'
import Footer from './../blocks/Footer'

export default {
  components:{
    appIntro: Intro,
    appFooter: Footer
  }
}
</script>

<style>

</style>
