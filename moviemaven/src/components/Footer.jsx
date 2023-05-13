 import React from 'react'

function Footer() {
  return (
    <><div className=" font-[Roboto Slab] bg-background p-16 flex flex-col mx-auto">footer</div>
      <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>About Us</h5>
            <ul>
              <li><a href="#about-us">Who we are</a></li>
              <li><a href="#about-us">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Help</h5>
            <ul>
              <li><a href="#help">FAQ</a></li>
              <li><a href="#help">Support</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Legal</h5>
            <ul>
              <li><a href="#terms-and-conditions">Terms and Conditions</a></li>
              <li><a href="#privacy-policy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
     </footer>
    </>
    
  );
}

export default Footer;