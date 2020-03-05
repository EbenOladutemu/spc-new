<template>
  <div>
    <app-intro>
      <img src="./../../assets/img/More/IMG_20191206_195221_4.jpg" alt="" slot="bg-img">
      <span slot="heading">Gallery</span>
    </app-intro>
    <app-nav></app-nav>
    
    <section id="portfolio" class="portfolio section-bg">
      <div class="container animated pulse">

        <div class="section-title text-center animated wow fadeInUp">
          <h2>Pictures Worth A Thousand Words</h2>
        </div>

        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">All</li>
              <li data-filter=".filter-app">Leadership</li>
              <li data-filter=".filter-card">Random</li>
              <!-- <li data-filter=".filter-web">Rest</li> -->
            </ul>
          </div>
        </div>

        <div class="row portfolio-container">

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="./../../assets/img/Random/IMG_3999.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
                <!-- <h4>App 1</h4>
                <p>App</p> -->
              </div>
              <div class="portfolio-links">
                <a href="/img/IMG_3999.6c684fdc.jpg" data-gall="portfolioGallery" class="venobox" title="App 1"><i class="bx bx-plus"></i></a>
                <a href="#" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src="./../../assets/img/portfolio/portfolio-2.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
              </div>
              <div class="portfolio-links">
                <a href="/img/portfolio-2.86d5d96e.jpg" data-gall="portfolioGallery" class="venobox" title="Web 3"><i class="bx bx-plus"></i></a>
                <a href="#" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="./../../assets/img/Victor_Ajisafe/IMG_4177.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
              </div>
              <div class="portfolio-links">
                <a href="/img/IMG_4177.0358965e.jpg" data-gall="portfolioGallery" class="venobox" title="App 2"><i class="bx bx-plus"></i></a>
                <a href="#" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src="./../../assets/img/More/IMG_20191206_191813_2.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
              </div>
              <div class="portfolio-links">
                <a href="/img/IMG_20191206_191813_2.jpg" data-gall="portfolioGallery" class="venobox" title="Card 2"><i class="bx bx-plus"></i></a>
                <a href="#" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src="./../../assets/img/More/IMG_20191206_201550_8.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
              </div>
              <div class="portfolio-links">
                <a href="/img/IMG_20191206_201550_8.69cb6000.jpg" data-gall="portfolioGallery" class="venobox" title="Web 2"><i class="bx bx-plus"></i></a>
                <a href="#" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="./../../assets/img/portfolio/portfolio-6.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
              </div>
              <div class="portfolio-links">
                <a href="./../../assets/img/portfolio/portfolio-6.jpg" data-gall="portfolioGallery" class="venobox" title="App 3"><i class="bx bx-plus"></i></a>
                <a href="#" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src="./../../assets/img/portfolio/portfolio-7.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
              </div>
              <div class="portfolio-links">
                <a href="./../../assets/img/portfolio/portfolio-7.jpg" data-gall="portfolioGallery" class="venobox" title="Card 1"><i class="bx bx-plus"></i></a>
                <a href="#" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src="./../../assets/img/portfolio/portfolio-8.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
              </div>
              <div class="portfolio-links">
                <a href="./../../assets/img/portfolio/portfolio-8.jpg" data-gall="portfolioGallery" class="venobox" title="Card 3"><i class="bx bx-plus"></i></a>
                <a href="#" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src="./../../assets/img/portfolio/portfolio-9.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
              </div>
              <div class="portfolio-links">
                <a href="./../../assets/img/portfolio/portfolio-9.jpg" data-gall="portfolioGallery" class="venobox" title="Web 3"><i class="bx bx-plus"></i></a>
                <a href="#" title="More Details"><i class="bx bx-link"></i></a>
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
import Nav from './../blocks/Nav'
import Intro from './../blocks/Intro'
import Footer from './../blocks/Footer'

export default {
  components:{
    appNav: Nav,
    appIntro: Intro,
    appFooter: Footer
  }
}
</script>

<style>

</style>