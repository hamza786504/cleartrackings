import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="section-dark">
      <div className="container">
        <div className="row gx-5">
          <div className="col-lg-4 col-sm-6">
            <img src="/images/logo-white.png" className="logo-footer" alt="" />
            <div className="spacer-20"></div>
            <p>ClearTrackings is your dedicated digital treatment planning partner for clear aligner cases. We deliver clinically focused, revision-minimized setups designed around your timezone and your treatment philosophy.</p>

            {/* <div className="social-icons mb-sm-30">
              <Link href="#"><i className="fa-brands fa-facebook-f"></i></Link>
              <Link href="#"><i className="fa-brands fa-x-twitter"></i></Link>
              <Link href="#"><i className="fa-brands fa-whatsapp"></i></Link>
              <Link href="#"><i className="fa-brands fa-instagram"></i></Link>
              <Link href="#"><i className="fa-brands fa-youtube"></i></Link>
            </div> */}
          </div>
          <div className="col-lg-2 col-sm-6">
            <div className="widget">
              <h5>Company</h5>
              <ul>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="widget">
              <h5>Our Services</h5>
              <ul>
                <li>Clear Aligner Treatment Planning</li>
                <li>Midcourse Correction</li>
                <li>Refinement Planning</li>
                <li>Attachment Planning</li>
                <li>IPR Planning</li>
                <li>Staging Optimization</li>
                <li>Digital Consultation</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="widget">
              <h5>Contact Us</h5>
              <div className="fw-bold text-white"><i className="icofont-location-pin me-2 id-color"></i>Where We Work</div>
              Remote-first · Aligned to your timezone

              <div className="spacer-20"></div>

              <div className="fw-bold text-white"><i className="icofont-envelope me-2 id-color"></i>Send a Message</div>
              <Link href="/contact">info@cleartrackings.com</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="subfooter">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="de-flex">
                <div className="de-flex-col">
                  Copyright {new Date().getFullYear()} - ClearTrackings. All rights reserved.
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
