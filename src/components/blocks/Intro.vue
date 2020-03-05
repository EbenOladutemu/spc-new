<template>
  <div>
    <section id="hero">
      <div class="hero-container">
        <div id="heroCarousel" class="carousel slide carousel-fade" data-ride="carousel">

          <!-- <ol class="carousel-indicators" id="hero-carousel-indicators"></ol> -->

          <div class="carousel-inner" role="listbox">

            <!-- Slide 1 -->
            <div class="carousel-item active">
              <div class="carousel-background">
                <slot name="bg-img"></slot>
              </div>
              <div class="carousel-container">
                <div class="carousel-content">
                  <h2 class="animated fadeInDown">
                    <slot name="heading"></slot>
                  </h2>
                  <!-- <a class="venobox_custom venobox play-btn vbox-item" data-vbtype="video" href="https://youtu.be/5WpD_4lJy0Y" data-autoplay="true"></a>
                  <a href="#about" class="btn-get-started animated fadeInUp scrollto">Get Started</a> -->
                </div>
              </div>
            </div>

            <!-- Slide 2 -->
            <!-- <div class="carousel-item">
              <div class="carousel-background"><img src="./../../assets/img/slide/slide-2.jpg" alt=""></div>
              <div class="carousel-container">
                <div class="carousel-content">
                  <transition mode="out-in" name="tada" enter-to-class="animated tada" leave-to-class="animated tada">
                    <h2 class="animated tada">The Sanctuary Praise Church</h2>
                  </transition>
                  <a href="#about" class="btn-get-started animated fadeInUp scrollto">Get Started</a>
                </div>
              </div>
            </div> -->

            <!-- Slide 3 -->
            <!-- <div class="carousel-item">
              <div class="carousel-background"><img src="./../../assets/img/slide/slide-3.jpg" alt=""></div>
              <div class="carousel-container">
                <div class="carousel-content">
                  <transition enter-active-class="animated bounce" leave-active-class="animated bounce">
                    <a href="#about" class="btn-get-started scrollto">Get Started</a>
                  </transition>
                </div>
              </div>
            </div> -->

          </div>

          <!-- <a class="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon icofont-thin-double-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>

          <a class="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon icofont-thin-double-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a> -->

        </div>
      </div>
    </section>
  </div>
</template>

<style scoped> 
.header-overlay {
  width: 100%;
  height: 67%;
  top: 0;
  left: 0;
  position: relative;
  background: rgba(19, 39, 57, 0.8);
}
</style>