import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '../css/bootstrap-grid.css';
import '../css/bootstrap-grid.min.css';
import '../css/bootstrap-reboot.css';
import '../css/bootstrap.css';
import '../css/bootstrap.min.css';
import '../css/bootstrap-reboot.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt,faEnvelope,faChevronDown } from '@fortawesome/free-solid-svg-icons';
//import js from Boostrap Javascript

const Slider = (props) => (
    <div id="carouselExampleSlidesOnly" classNameName="carousel slide" data-ride="carousel">
         <div className="carousel-inner">
            <div className="carousel-item active">
            <figure>
                 <img className="d-block w-100" src={require('../images/banner-1.jpg')} alt="First slide" />
            </figure>
            </div>
            <div class="carousel-item">
            <figure>
            <img class="d-block w-100" src={require('../images/banner-1.jpg')} alt="Second slide"/>
            </figure>
      
    </div>
    <div class="carousel-item">
        <figure>
        <img class="d-block w-100" src={require('../images/banner-1.jpg')} alt="Third slide"/>
        </figure>
      
    </div>    
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
    </div>
)
export default Slider;

