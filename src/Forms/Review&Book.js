import React from 'react'
import { Paper } from '@material-ui/core'
export default function ReviewBook() {



        const months=["JAN","FEB","MAR","APR","MAY","JUNE"  ,"JULY" ,"AUG" ,"SEPT" ,"OCT" ,"NOV" ,"DEC"];
        const years=[2021,2022,2023,2024,2025,2026,2027,2028,2029,2030,2031,2032,2033,2034,2035]

    return (
        <div style={{marginLeft:200}}>
             
                <Paper style={{height:840,width:300,background:"#f6f6f6"}} elevation={5}>
                <Paper style={{width:300,height:40,backgroundColor:"white",textAlign:"center"}} elevation={3}>
                   Order Info
                    </Paper>
                    <div> 
                        <label style={{backgroundColor:"#EEEEEE",width:300,color:"#7c8490",}}>CAR</label>
                        <p style={{marginLeft:-220}}>Sedan</p>
                        <img src="https://worldlimobiz.com/CTairlink/wp-content/uploads/cars-gallery/1400613591.png" style={{marginTop:-15}} />
                        <div style={{marginLeft:-250}}>
        
                        <p style={{left:20}}><img src="https://worldlimobiz.com/CTairlink/wp-content/themes/u-design/resform_assets/images/passenger-icon.png" ></img>3</p>
                        </div>
                    </div>



                    <div style={{textAlign:"left",margin:10}}> 
                        <label style={{backgroundColor:"#EEEEEE",width:290,color:"#7c8490",}}>DATE & LOCATION</label>
                        <label>Pick Up time</label>
                        <p style={{color:"#7c8490",fontSize:13}}>Fri @ 08:00 AM</p>

                        <label>Pick Up Location</label>
                        <p style={{color:"#7c8490",fontSize:13}}>WRARE, Marathon Avenue, Fort Worth, TX, USA</p>

                        <label>Dropoff Location</label>
                        <p style={{color:"#7c8490",fontSize:13}}>USA</p>

                        <label>Number of Passengers</label>
                        <p style={{color:"#7c8490",fontSize:13}}>1</p>
                     
                    </div>


                    <div style={{textAlign:"left",margin:10}}> 
                        <label style={{backgroundColor:"#EEEEEE",width:290,color:"#7c8490",}}>
PRICE BREAKDOWN</label>
                        
                        <p style={{color:"#7c8490",fontSize:13}}>Base Price:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>$774.21</b></p>

                        <p style={{color:"#7c8490",fontSize:13}}>Gratuity:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>$154.84</b></p>

                        <hr style={{borderStyle:"dashed"}}></hr> 

                        <h5>SUBTOTAL:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$929.05</h5> 


                        <hr style={{borderStyle:"dashed"}}></hr>                       
                     
                    </div>




                    <div style={{textAlign:"left",margin:10}}> 
                        <label style={{backgroundColor:"#dde9f7",width:290,color:"#368def",}}>
EXTRAS</label>
                        
                        <p style={{color:"#7c8490",fontSize:13}}>Child Car Seat:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>$0.00</b></p>

                        <p style={{color:"#7c8490",fontSize:13}}>Stop(s):&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>$0.00</b></p>


                                            
                     
                    </div>

                    <div>
                    <h5 style={{backgroundColor:"#434b56",height:80,width:300,color:"white"}}>
                        <br></br>
                        <b>TOTAL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$929.05

</b>
                        </h5> 
                    </div>

            
                </Paper>


{/*  Complete reservation form/////////////////////////////////////////////////////////////////////////////////////
 */}
      
                <Paper style={{ position:"relative", height:800,width:700,background:"#f6f6f6",marginLeft:400,marginTop:-845}} elevation={5}>
                    <Paper style={{width:700,height:40,backgroundColor:"white",textAlign:"center"}} elevation={3}>
                    Complete reservation form
                    </Paper>

                    <div style={{textAlign:"left",margin:20}}> 
                        <label style={{backgroundColor:"#EEEEEE",width:700,height:30,top:45,left:1,position:"absolute",color:"#7c8490",}}>PERSONAL INFORMATION</label>
                        <br></br>
                        <div style={{top:30}}>
                            <div class="form-group">
                              <label for="">FIRST NAME</label>
                              <input type="text"
                                class="form-control" name="" id="" aria-describedby="helpId" placeholder="Passenger's first name"
                                style={{width:200}}/>
                             
                            </div>
                            <div class="form-group" style={{marginLeft:350,top:80,position:"absolute"}}>
                              <label for="">LAST NAME</label>
                              <input type="text"
                                class="form-control" name="" id="" aria-describedby="helpId" placeholder="Passenger's last name"
                                style={{width:200}}/>
                             
                            </div>

                            <div class="form-group">
                              <label for="">EMAIL-ADDRESS</label>
                              <input type="email"
                                class="form-control" name="" id="" aria-describedby="helpId" placeholder="Email address"
                                style={{width:200}}/>
                             
                            </div>

                            <div class="form-group" style={{marginLeft:350,top:170,position:"absolute"}}>
                              <label for="">PHONE NUMBER</label>
                              <input type="number"
                                class="form-control" name="" id="" aria-describedby="helpId" placeholder="Passenger's cell phone"
                                style={{width:220}}/>
                             
                            </div>
                        </div>






                        
                     
                    </div>





                    <div style={{textAlign:"left",margin:20}}> 
                        <label style={{backgroundColor:"#EEEEEE",width:700,height:30,top:270,left:1,position:"absolute",color:"#7c8490",}}>CREDIT CARD INFORMATION</label>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div style={{top:100}}>
                            <div class="form-group">
                              <label for="">CARD NUMBER</label>
                              <input type="text"
                                class="form-control" name="" id="" aria-describedby="helpId" placeholder="XXXX-XXXX-XXXX-XXXX"
                                style={{width:200}}/>
                             
                            </div>


                            <div>
                            <label for="" style={{marginLeft:300,position:"absolute"}}>EXPIRATION DATE</label>
                                <div class="form-group" style={{width:90,marginTop:-80,marginLeft:300}}>
                                <label for=""></label>
                                  <select class="form-control" name="" id="">
                                    {months.map((m)=>(
                                        <option value={m}>{m}</option>
                                    ))}
                                  </select>
                                </div>

                                <div class="form-group" style={{width:90,marginTop:-79,marginLeft:400}} >
                                  <label for=""></label>
                                  <select class="form-control" name="" id="">
                                  {years.map((y)=>(
                                        <option value={y}>{y}</option>
                                    ))}
                                  </select>
                                </div>
                            </div>


                           
                                <div class="form-group"  style={{width:90,marginTop:-84,marginLeft:520}}>
                                  <label for="">CVV</label>
                                  <input type="number"
                                    class="form-control" name="" id="" aria-describedby="helpId" placeholder="XXX"
                                    style={{width:80}}/>
                                  
                                </div>
                         

                                <div class="form-group">
                                  <label for="">BILLING ZIP-CODE</label>
                                  <input type="text"
                                    class="form-control" name="" id="" aria-describedby="helpId" placeholder="Zip Code"
                                    style={{width:100}}/>
                                  
                                </div>
                            


                        </div>








                        
                     
                    </div>

                    



                    <div style={{textAlign:"left",margin:20}}> 
                        <label style={{backgroundColor:"#EEEEEE",width:700,height:30,top:540,left:1,position:"absolute",color:"#7c8490",}}>OTHER OPTIONS</label>
                        <label style={{marginTop:130  }}>SPECIAL REQUESTS</label>
                                    <div style={{marginTop:0  }}>
                                       
                                        <div class="form-group">
                                          <label for=""></label>
                                          <textarea class="form-control" name="" id="" rows="3"></textarea>
                                        </div>
                                    </div>
                             
                            </div>


                    
                </Paper>

        </div>
    )
}
