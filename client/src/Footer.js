import React from 'react';
import './Style/Footer.css';

function Footer(props) {
    return (
        <div>
<footer id="footer">
<div className="footer-top">
  <div className="container">
    <div className="row">

      <div className="col-lg-3 col-md-6 footer-contact">
        <h3><small>Praedico Global Reseach</small></h3>
        <img src="https://www.praedicoglobalresearch.com/logo.png" width="100px"  alt="Logo"/>
      </div>

      <div className="col-lg-3 col-md-6 footer-links">
        <h4>Useful Links</h4>
        <ul style={{listStyleType:'none'}}>
          <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="#">About</a>, &nbsp;<a href="#">Services</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="#">Blogs</a>, &nbsp;<a href="#">Gallery</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="#">Career</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="#">Contact</a></li>
        </ul>
      </div>

      <div className="col-lg-3 col-md-6 footer-links">
        <h4>Our Services</h4>
        <ul style={{listStyleType:'none'}}>
          <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
        </ul>
      </div>

      <div className="col-lg-3 col-md-6 footer-newsletter">
        <h4>Contact Us</h4>
        <p>
          HEAD OFFICE : Udyog Vihar,<br></br>Phase 4, Gurgaon 
          <br></br>
        <br></br>
          DATA CENTER : First Floor, Garima Arcade, Gwalior
          <br></br>
          <br></br>
          <strong>Phone:</strong> +91 9009054508<br></br>
          <strong>praedicoglobalresearch@gmail.com</strong><br></br>
        </p>
      </div>

    </div>
  </div>
</div>

<div className="container d-lg-flex py-4">

  <div className="mr-lg-auto text-center text-lg-left">
    <div className="copyright">
      © Copyright <strong><span>Praedico Global Reseach</span></strong>. All Rights Reserved
    </div>
    <div className="credits">
      
    </div>
  </div>
  <div className="social-links text-center text-lg-right pt-3 pt-lg-0">
    <a href="https://twitter.com/praedicol?lang=en" target="_blank" className="twitter"><i className="bx bxl-twitter"></i></a>
    <a href="https://www.facebook.com/praedicoglobalresearch/" target="_blank" className="facebook"><i className="bx bxl-facebook"></i></a>
    <a href="https://www.instagram.com/praedicoglobalresearchpgr/" className="instagram" target="_blank"><i className="bx bxl-instagram"></i></a>
    {/* <!--<a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>--> */}
    <a href="https://www.linkedin.com/company/praedico-global-research-pvt-ltd/?originalSubdomain=in" className="linkedin" target="_blank"><i className="bx bxl-linkedin"></i></a>
  </div>
</div>
</footer>
        </div>
    );
}

export default Footer;