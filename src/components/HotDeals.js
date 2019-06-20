import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const HotDeals = () => (
    <section class="page-section" id="hot-deals">
    <div class="">
      <div class="row container-hotdeals">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase" style={{fontWeight:800,fontSize:40}}>HOT DEALS</h2>
          <h3 class="section-subheading text-muted" style={{fontSize:15,marginTop:-10}}>IT PAYS TO BOOK DIRECT</h3>
        </div>
      </div>
      <div class="row" style={{marginTop:'3%',marginLeft:'3%'}}>
        <div class="col-md-4 ">
        <div className="cover-section-hotdeals ">
            
            <span class="fa-stack fa-4x banner-image-hotdeals">
                <img src={require('../images/hotdeals-1.jpg')} className="img-responsive hotdeals"/>
            </span>
        </div>
          
          <h4 class="service-heading text-center">LOREM IPSUM<br></br>
DOLOR</h4>
          <p class="text-muted text-center" style={{fontSize:13}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <div className="text-center">
            <button className="btn-outline-info text-center" style={{color:'#353535',borderColor:'#313735'}}>
                LEARN MORE
            </button>
          </div>
        </div>
        <div class="col-md-4">
          
          <div className="cover-section-hotdeals ">
          <span class="fa-stack fa-4x banner-image-hotdeals">
          <img src={require('../images/hotdeals-2.jpg')} className="hotdeals" />
          </span>
          </div>
          
          <h4 class="service-heading text-center">LOREM IPSUM<br></br>
DOLOR</h4>
          <p class="text-muted text-center" style={{fontSize:13}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <div className="text-center">
            <button className="btn-outline-info text-center" style={{color:'#353535',borderColor:'#313735'}}>
                LEARN MORE
            </button>
          </div>
        </div>
        <div class="col-md-4">
          <div className="cover-section-hotdeals ">
          <span class="fa-stack fa-4x banner-image-hotdeals">
          <img src={require('../images/hotdeals-3.jpg')} className="hotdeals" />
         
          </span>
          </div>
          <h4 class="service-heading text-center">LOREM IPSUM<br></br>
DOLOR</h4>
          <p class="text-muted text-center" style={{fontSize:13}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <div className="text-center">
            <button className="btn-outline-info text-center" style={{color:'#353535',borderColor:'#313735'}}>
                LEARN MORE
            </button>
          </div>
         
        </div>
      </div>
    </div>
  </section>
)

export default HotDeals;