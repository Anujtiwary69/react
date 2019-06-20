import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight,faStar,faStarHalf,faStoreAlt } from '@fortawesome/free-solid-svg-icons';


const Guest = () => (
    <div className="row">
        <div className="col-sm-12">
            <div className="img-holder">
                <div className="caption-box-guest">
                    OUR<br/>
                    GUESTS<br/>
                    LOVE<br/>
                    US
                   
                </div>
               <img src={require('../images/review_banner.jpg')} style={{objectFit:'contain'}} className="img-fluid" alt="" />
               
            </div>
        </div>
        <div className="row guest-container-review">
        <div className="col-sm-4">
            <div className="caption-guest-2 text-center">
                Nice Place
            </div>
            <div className="text-center" style={{marginTop:10}}>
                <FontAwesomeIcon icon={faStar} class="star-icon text-warning"></FontAwesomeIcon>
                <FontAwesomeIcon   icon={faStar} class="star-icon text-warning"></FontAwesomeIcon>
                <FontAwesomeIcon  icon={faStar}  class="star-icon text-warning"></FontAwesomeIcon>
                <FontAwesomeIcon   icon={faStarHalf} class="star-icon text-warning"></FontAwesomeIcon>
                <FontAwesomeIcon   icon={faStarHalf} class="star-icon text-warning"></FontAwesomeIcon>
            </div>
            <center>
                <div className="caption-long-guest-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad
                minim veniam.
                </div>
            </center>
            <div className="row" style={{marginLeft:-50,marginTop:30}}>
                <div className="col-sm-6">
                    <img src={require('../images/user-3.jpg')} className="user-image" />
                </div>
                <div className="col-sm-6">
                    Jessica Doe<br/>    
                    <subtitle>
                    Dubai, UAE
                    </subtitle>
                </div>
            </div>
           
           
        </div>
        <div className="col-sm-4">
        <div className="caption-guest-2 text-center">
            Perfect
            </div>
            <div className="text-center" style={{marginTop:10}}>
                <FontAwesomeIcon icon={faStar} class="star-icon text-warning"></FontAwesomeIcon>
                <FontAwesomeIcon   icon={faStar} class="star-icon text-warning"></FontAwesomeIcon>
                <FontAwesomeIcon  icon={faStar}  class="star-icon text-warning"></FontAwesomeIcon>
                <FontAwesomeIcon   icon={faStarHalf} class="star-icon text-warning"></FontAwesomeIcon>
                <FontAwesomeIcon   icon={faStarHalf} class="star-icon  text-warning"></FontAwesomeIcon>
            </div>
            <center>
                <div className="caption-long-guest-2 text-center ">
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad
                minim veniam.
                </div>
            </center>
            <div className="row" style={{marginLeft:-50,marginTop:30}}>
                <div className="col-sm-6">
                    <img src={require('../images/user-2.jpg')} className="user-image" />
                </div>
                <div className="col-sm-6">
                    Jessica Doe   <br></br>
                    <subtitle>
                    Dubai, UAE
                    </subtitle>
                </div>
            </div>
            
        </div>
        <div className="col-sm-4">
        <div className="caption-guest-2 text-center">
                Great Service
            </div>
            <div className="text-center" style={{marginTop:10}}>
                <FontAwesomeIcon icon={faStar} class="star-icon text-warning"></FontAwesomeIcon>
                <FontAwesomeIcon   icon={faStar} class="star-icon text-warning"></FontAwesomeIcon>
                <FontAwesomeIcon  icon={faStar}  class="star-icon text-warning"></FontAwesomeIcon>
                <FontAwesomeIcon   icon={faStarHalf} class="star-icon text-warning"></FontAwesomeIcon>
                <FontAwesomeIcon   icon={faStarHalf} class="star-icon text-warning"></FontAwesomeIcon>
            </div>
            <center>
                <div className="caption-long-guest-2 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad
                minim veniam.
                </div>
            </center>
            <div className="row" style={{marginLeft:-50,marginTop:30}}>
                <div className="col-sm-6">
                    <img src={require('../images/user-1.jpg')} className="user-image" />
                </div>
                <div className="col-sm-6">
                    Jessica Doe  <br></br>
                    <subtitle>
                    Dubai, UAE
                    </subtitle>
                </div>
            </div>
            
        </div>
    </div>
        <div className="col-sm-12">
            <div className="text-center">
            <div className="form-group">
                    <button type="submit" class="btn btn-primary booknow_action_button" style={{width:'10%'}}><b>SEE MORE</b></button>
                </div>
            </div>
        </div>
      
        </div>
        
)


export default Guest;