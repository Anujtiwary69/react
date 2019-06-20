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

const Header =  ({ siteTitle }) => (
  <nav class="navbar navbar-expand-lg navbar-light bg-light"x>
    <img src={require('../images/LOGO-HIGH-RES-2.png')} className="logo"/>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto" id="subMenu">
      <li class="nav-item ">
          <a class="nav-link" href="#" style={{color:'#000'}}>
          <FontAwesomeIcon icon={ faPhoneAlt } style={{height:12,marginRight:2}}/> 
            +971 4526 6000
          </a>
        </li>
        <li class="nav-item ">
          <a class="nav-link" href="#" style={{color:'#000'}}>
          <FontAwesomeIcon icon={faEnvelope} style={{height:13,marginRight:2}} />
             info@stayleva.com
          </a>
        </li>
        <li class="nav-item " style={{flexDirection:'row'}}>
          
          <a class="nav-link" href="#" style={{color:'#000'}}>
          <img src={require('../images/United-Kingdom-flag-icon.png')} className="lang_logo" />
            English
            <a href="#"  role="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <FontAwesomeIcon icon={faChevronDown} style={{height:13,marginLeft:1}}/>
            </a>
            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button class="dropdown-item" type="button">Action</button>
    <button class="dropdown-item" type="button">Another action</button>
    <button class="dropdown-item" type="button">Something else here</button>
  </div>
          </a>
        </li>
    </ul>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0" id="main_menu">
    {
      Menus.map((item,index) => (
        
          (item.name == 'HOME') ? 
          <li class="nav-item  active">
              <a class="nav-link menuItem" href="#">{item.name}</a>
          </li>
          :
          <li class="nav-item">
              <a class="nav-link menuItem" href="#">{item.name}</a>
          </li>

      ))
    }
     
    <li class="nav-item active">
      <button className="booknow_button">
        BOOK NOW
    </button>
    </li>
    </ul>
   
  </div>
</nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const Menus = [{
  name:'HOME',
  slag:'home',
},
{
  name:'STAY',
  slag:'stay',
},
{
  name:'DINE',
  slag:'home',
},
{
  name:'RELAX',
  slag:'home',
},
{
  name:'MEET',
  slag:'home',
},
{
  name:'CELEBRATE',
  slag:'home',
},
{
  name:'OFFERS',
  slag:'home',
},
{
  name:'GALLERY',
  slag:'home',
},
{
  name:'CONTACT US',
  slag:'home',
},
]

export default Header
