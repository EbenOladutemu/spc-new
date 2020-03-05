<template>
  <div>
    <app-intro>
      <img src="./../../../assets/img/More/IMG_20191206_192238_8.jpg" alt="" slot="bg-img">
      <span slot="heading">Worship Times</span>
    </app-intro>
    <app-nav></app-nav>

    <section id="services" class="services">
      <div class="container">

        <div class="section-title wow animated fadeInUp text-center">
          <h3>Our Worship Times</h3>
        </div>

        <div class="row">
          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box">
              <!-- <div class="icon"><i class="bx bxl-dribbble"></i></div> -->
              <img src="https://img.icons8.com/wired/64/000000/sunday.png" class="week">
              <h4 class="title">Sunday</h4>
              <p class="description">Divine Worship Services</p><hr>
              <i class='bx bx-time-five bx-flip-horizontal'></i><span class="time"> 8:00AM - First Service</span>
              <span class="time"> 10:00AM - Second Service</span>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box">
              <!-- <div class="icon"><i class="bx bx-file"></i></div> -->
              <img src="https://img.icons8.com/wired/64/000000/wednesday.png" class="week">
              <h4 class="title">Wednesday</h4>
              <p class="description">Bible Study and Communion Service</p><hr>
              <i class='bx bx-time-five'></i><span class="time"> 5:30PM</span>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" style="padding: 26px!important">
              <!-- <div class="icon"><i class="bx bx-tachometer"></i></div> -->
              <img src="https://img.icons8.com/wired/64/000000/friday.png" class="week">
              <h4 class="title">Friday</h4>
              <p class="description">All Night Prayer Meeting</p><hr>
              <i class='bx bx-time-five'></i><span class="time"> 12AM - Mid Night</span>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box">
              <!-- <div class="icon"><i class="bx bx-world"></i></div> -->
              <img src="https://img.icons8.com/wired/64/000000/saturday.png" class="week">
              <h4 class="title">Saturday</h4>
              <p class="description">Bible School Classes (ISOM)</p><hr>
              <i class='bx bx-time-five bx-flip-horizontal'></i><span class="time"> 8:00AM</span>
            </div>
          </div>

        </div>

        <div class="row mt-4">
          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box">
              <!-- <div class="icon"><i class="bx bxl-dribbble"></i></div> -->
              <img src="https://img.icons8.com/wired/64/000000/1--v1.png" class="week">
              <h4 class="title">1st of every month</h4>
              <p class="description">Power packed revival meeting - Let My Gate Be Opened</p><hr>
              <i class='bx bx-time bx-flip-horizontal'></i><span class="time"> 9:00AM - Morning Session</span><br>
              <span class="time"> 5:30PM - Evening Session</span>
            </div>
          </div>
        </div>

      </div>
    </section>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Nav from './../../blocks/Nav'
import Intro from './../../blocks/Intro'
import Footer from './../../blocks/Footer'

export default {
  components:{
    appNav: Nav,
    appIntro: Intro,
    appFooter: Footer
  }
}
</script>

<style scoped>
  .icon-box{
    margin: auto;
    text-align: center;
  }
  .icon-box:hover{
    color: white;
  }

  .icon-box .week{
    background-color: white!important;
  }

  .services .icon-box{
    padding: 25px!important;
  }

  p{
    font-size: 18px!important;
  }

  .title{
    font-size: 20px!important;
  }

  .time{
    position: relative;
    bottom: 2px;
  }
</style>