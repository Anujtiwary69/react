import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';



class Booking extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
          date: Date.now(),
          focused: null
        }
      }
    
    render(){
        return(
            <section class="page-section" id="booking_form">
    <div class="main_container">
      <div class="row" style={{background:'#fff'}}>
            <div className="col-md-2 booking-colomn">
                <div className="" style={{float:'right',maxWidth:120}}>
                <span style={{fontSize:26,lineHeight:1,fontWeight:700,margin:10,textAlign:'center'}}>
                PLAN
                <br></br>
                </span>
                <span style={{fontSize:26,lineHeight:1,fontWeight:700,margin:10,textAlign:'center'}}>
                YOUR
                <br></br>
                </span>
                <span style={{fontSize:26,lineHeight:1,fontWeight:700,margin:10,textAlign:'center'}}>
                STAY
                <br></br>
                </span>
                   
            </div>
            </div>
            <div className="col-md-4 booking-colomn" style={{float:'left'}}>
                <div class="form-group">
                    <label for="exampleInputEmail1" style={{fontSize:18,fontWeight:400}}>DATES</label><br></br>
                    <div style={{display:'flex',flexDirection:"row",justifyContent:'space-round',
                    }}>
                        <input type="email"  className="form-control-leva" cid="exampleInputEmail1" aria-describedby="emailHelp" placeholder="SUN, JUN 16"/>
                        <input type="email" className="form-control-leva" cid="exampleInputEmail1" aria-describedby="emailHelp" placeholder="MON, JUN 17"/>
                    </div>
                    
                </div>
            </div>
            <div className="col-md-3 booking-colomn">
                <div class="form-group">
                        <label for="exampleInputPassword1">ROOMS & GUESTS</label>
                        <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle room_input" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        1 ROOM: 1 ADULT/ROOM
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                        </div>
                    </div>
                   
            </div>
            <div className="col-md-3 booking-colomn" style={{justifyContent:'center'}}>
            
            <div className="form-group">
                <button type="submit" class="btn btn-primary booknow_action_button">CHECK AVAILABILITY</button>
            </div>
                
            </div>
                
                
            </div>
      </div>
    
  </section>
        )
    }

}


export default Booking;