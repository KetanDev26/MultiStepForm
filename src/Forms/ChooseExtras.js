import { Paper } from '@material-ui/core'
import React from 'react'

export default function ChooseExtras() {
    return (
        <div style={{marginLeft:200}}>
        
                <Paper style={{height:40,width:300,background:"white"}} elevation={5}>Order Info</Paper>
                <Paper style={{height:840,width:300,background:"#f6f6f6"}} elevation={5}>

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

                <Paper style={{ position:"absolute", height:40,width:600,background:"white",marginLeft:400,marginTop:-880}} elevation={5}>Available Extras</Paper>
                <Paper style={{ position:"absolute", height:500,width:600,background:"#f6f6f6",marginLeft:400,marginTop:-830}} elevation={5}>

                    <table class="table">
                       
                        <tbody>
                            <tr>
                                <td scope="row"><input type="checkbox"></input></td>
                                <td><img src="https://worldlimobiz.com/CTairlink/wp-content/themes/u-design/resform_assets/images/babycarseat.png"></img></td>
                                <td><div>
                                    <h4>Baby Car Seat</h4>
                                    <p>Would you like us to provide a car seat?</p>
                                    </div></td>
                                <td>$10.00</td>
                            </tr>
                            <tr>
                                <td scope="row"><div class="form-group">
                                  <label for=""></label>
                                  <select class="form-control" name="" id="" style={{width:60   }}>

                                    <option value={0}>0</option>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                  </select>
                                </div></td>
                                <td><img src="https://worldlimobiz.com/CTairlink/wp-content/themes/u-design/resform_assets/images/extra-stops.png"></img></td>
                                <td><div>
                                    <h4>Stops</h4>
                                    <p>Would you like to add extra stops?</p>
                                    </div></td>
                                <td>$20.00 per stop</td>
                            </tr>
                        </tbody>
                    </table>
                </Paper>


        </div>
    )
}
