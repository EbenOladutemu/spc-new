<template>
  <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-4 col-md-6 offset-lg-1 footer-info">
            <p>
              <i class="bx bx-map-pin"></i> 2 Sawi Drive, Off Kingharman Road, Brookfields,<br>
              Freetown, Sierra Leone<br><br>
              <strong>Phone: </strong>
              <a href="tel:+23276606383">+23276606383</a> &nbsp; &nbsp; 
              <a href="tel:+23277612290">+23277612290</a><br>
              <strong>Email: </strong>
              <a href="mailto:sanctuarypraisecathedral@gmail.com">sanctuarypraisecathedral@gmail.com</a><br>
            </p>
            <div class="social-links mt-3">
              <a href="https://fb.com/LetMyGatebeOpened" class="facebook"><i class="bx bxl-facebook"></i></a>
              <a href="https://twitter.com/LetMyGatebeOpened" class="twitter"><i class="bx bxl-twitter"></i></a>
              <a href="https://youtube.com/LetMyGatebeOpened" class="youtube"><i class="bx bxl-youtube"></i></a>
              <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
              <a href="https://wa.me+/+23288310253" class="whatsapp"><i class="bx bxl-whatsapp"></i></a>
            </div>
          </div>

          <!-- <div class="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">About us</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Services</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
            </ul>
          </div> -->

          <div class="col-lg-5 col-md-5 offset-lg-1 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>Keep up on our always evolving sermons and events. Enter your e-mail and subscribe to our newsletter.</p>
            <form action="" method="post">
              <input type="email" name="email" class="outline-none"><input type="submit" value="Subscribe">
            </form>

          </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; Copyright <span>{{ year | moment("YYYY") }}</span>
        <strong><span> Sanctuary Praise Church</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/bootstrap-3-one-page-template-free-shuffle/ -->
        Crafted by <a href="https://eben.com.ng" title="Eben Web Krafts">Eben</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default{
  data(){
    return {
      year: Date.now()
    }
  }
  
}
</script>

<style scoped>
a{
  color: #4cbba9;
  font-size: 15px;
}

p{
  font-size: 16px;
}

.outline-none{
  outline: none;
}
</style>