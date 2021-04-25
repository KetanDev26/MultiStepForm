import React from 'react'
import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core'
import "../App.css"
import "../Tablet.css"
import FormControl from '@material-ui/core/FormControl';

export default function DropoffHourlyquarter(props) {


    const [values, setvalues] = React.useState('Address');


    const handleChange = (event) => {
        setvalues(event.target.value);
        };



        
    return (


    <div style={{marginTop:50,marginLeft:-40}}>
        <FormControl component="fieldset">
  
        <RadioGroup aria-label="gender" name="gender1" value={values} onChange={handleChange}>
          <FormControlLabel value="Address" control={<Radio />} label="Address" />
          <FormControlLabel style={{marginTop:-50,marginLeft:100}} value="Airport" control={<Radio />} label="Airport" />
       <img src="https://worldlimobiz.com/CTairlink/wp-content/themes/u-design/images/cross.png" style={{
           width:20,height:20,position:"absolute",left:260,top:10, cursor:"pointer"
       }} onClick={props.removestops}></img>
        </RadioGroup>
      </FormControl>
                                    
           
                                    {values==="Airport" ? <div style={{position:"relative",marginTop:0,left:110}} >
                                    <div className="hqdropoffinput">
                                    <input type="text" placeholder="Airport name"class="form-control" style={{width:300}}></input><br></br>
                                    </div>
                                    <input type="text"  placeholder="Airline" class="form-control" style={{width:170,position:"relative",left:0}}></input><br></br>
                                    <input type="text"  placeholder="flight" class="form-control" style={{width:90,position:"relative",left:180,top:-62}}></input>
                                   
                                   
                                </div> : (values === "Address" ? <div style={{position:"relative",top:0,left:110}} className="hqdropoffaddinput" >
                         
                         <input type="text" placeholder="Street Address" class="form-control" style={{width:300,position:"absolute"}} ></input>
                     </div> : null)}


                     </div>


                  
        
                     
    )
}
