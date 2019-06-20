import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const FineDine = () =>(
    <section class="page-section" id="fineDine">
    <div class="">
      <div class="row container-hotdeals">
        <div class="col-lg-12 text-center">
        <h3 class="section-subheading text-muted" style={{fontSize:15,}}>IT PAYS TO BOOK DIRECT</h3>
          <h2 class="section-heading text-uppercase" style={{fontWeight:800,fontSize:40,marginTop:-10}}>FUN DINING</h2>
          <div className="line">

          </div>
        </div>
      </div>
      <div class="row about-extra" style={{}}>
          <div class="col-lg-6 wow fadeInUp align-self-center">
            <img src={require('../images/LEVA WEBSITE.jpg')} class="img-fluid" alt=""/>
          </div>
          <div class="col-lg-6 wow fadeInUp pt-5 pt-lg-0 align-middle text-fine-dine">
            <h1 className="text-center">LOOK<br/>NO FURTHER</h1>
            <center>
            <p className="text-center" style={{width:'50%',marginTop:40}}>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam.
            </p>
            </center>
            <div className="text-center">
            <button className="btn-outline-info text-center" style={{color:'#353535',borderColor:'#313735'}}>
                LEARN MORE
            </button>
          </div>
            
          </div>
        </div>
        <div class="row about-extra">
        <div class="col-lg-6 wow fadeInUp pt-5 pt-lg-0 align-middle text-fine-dine">
            <h1 className="text-center">LOOK<br/>NO FURTHER</h1>
            <center>
            <p className="text-center" style={{width:'50%',marginTop:40}}>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam.
            </p>
            </center>
            <div className="text-center">
            <button className="btn-outline-info text-center" style={{color:'#353535',borderColor:'#313735'}}>
                LEARN MORE
            </button>
          </div>
            
          </div>
          <div class="col-lg-6 wow fadeInUp">
            <img src={require('../images/LEVA WEBSITE2.jpg')} class="img-fluid" alt=""/>
          </div>
        </div>

        <div class="row about-extra" style={{}}>
          <div class="col-lg-6 wow fadeInUp">
            <img src={require('../images/LEVA WEBSITE3.jpg')} class="img-fluid" alt=""/>
          </div>
          <div class="col-lg-6 wow fadeInUp pt-5 pt-lg-0 align-middle text-fine-dine">
            <h1 className="text-center">LOOK<br/>NO FURTHER</h1>
            <center>
            <p className="text-center" style={{width:'50%',marginTop:40}}>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam.
            </p>
            </center>
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

export default FineDine;