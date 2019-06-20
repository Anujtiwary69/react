import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Stay = () => (
    <section className="Stay" id="stay">
    <div className="container-fluid">
      <div className="row">
      <div class="col-md-12 mx-auto" style={{paddingTop:30}}>
          <h1 class="section-heading" style={{fontWeight:700}}>STAY LEVA</h1>
         
        </div>
        <div className="col-md-6 mx-auto">
        <div className="caption-stay">
            <h4 className="text-center">
            LOREM IPSUM
            </h4>
                
            </div>
            <div className="caption-price">
            <h4 className="text-center" style={{paddingTop:2}}>
            AED XXX
            </h4>
                
            </div>
            <img src={require('../images/room-1.jpg')} className="img-responsive stay-thumbnil"/>
           
        </div>
        
        <div className="col-md-6 mx-auto" style={{}}>
            <div className="row" style={{marginBottom:18}}>
                <div className="col-md-6">
                <div className="caption-stay-2">
            <h4 className="text-center price-2" >
            LOREM IPSUM
            </h4>
                
            </div>
            <div className="caption-price">
            <h4 className="text-center price-2" style={{paddingTop:2}}>
            AED XXX
            </h4>
                
            </div>
                    <img src={require('../images/room-1.jpg')} className=" img-responsive stay-thumbnil-2"/>
                </div>
                <div className="col-md-6">
                <div className="caption-stay-2">
            <h4 className="text-center price-2">
            LOREM IPSUM
            </h4>
                
            </div>
            <div className="caption-price">
            <h4 className="text-center price-2" style={{paddingTop:2}}>
            AED XXX
            </h4>
                
            </div>
                    <img src={require('../images/room-1.jpg')} className=" img-responsive stay-thumbnil-2"/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                <div className="caption-stay-2">
            <h4 className="text-center price-2">
            LOREM IPSUM
            </h4>
                
            </div>
            <div className="caption-price">
            <h4 className="text-center price-2" style={{paddingTop:2}}>
            AED XXX
            </h4>
                
            </div>
                    <img src={require('../images/room-1.jpg')} className=" img-responsive stay-thumbnil-2"/>
                </div>
                <div className="col-md-6">
                <div className="caption-stay-2">
            <h4 className="text-center price-2">
            LOREM IPSUM
            </h4>
                
            </div>
            <div className="caption-price">
            <h4 className="text-center price-2" style={{paddingTop:2}}>
            AED XXX
            </h4>
                
            </div>
                    <img src={require('../images/room-1.jpg')} className=" img-responsive stay-thumbnil-2"/>
                </div>
            </div>
            
        </div>
      </div>
        <div className="row">
            <div className="row explore_more">
            <br></br>
                <h1 className="text-right" style={{marginRight:5}}>
                    EXPLORE MORE &nbsp;
                    <FontAwesomeIcon icon={faChevronRight} />
                </h1>
            </div>
        </div>
    </div>
  </section>
)

export default Stay;