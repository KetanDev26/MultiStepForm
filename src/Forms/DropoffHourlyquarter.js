import React from 'react'

import { FormControlLabel, FormLabel, Paper, Radio, RadioGroup } from '@material-ui/core'


import FormControl from '@material-ui/core/FormControl';

export default function DropoffHourlyquarter(props) {


    const [values, setvalues] = React.useState('Address');


    const handleChange = (event) => {
        setvalues(event.target.value);
        };

    return (
    
            
                                    
            <div style={{position:"relative",top:100}}>


<div style={{position:"absolute",left:100,top:30}}>
            <FormControl component="fieldset">
  
  <RadioGroup aria-label="gender" name="gender1" value={values} onChange={handleChange}>
    <FormControlLabel value="Address" control={<Radio />} label="Address" />
    <FormControlLabel style={{marginTop:-50,marginLeft:100}} value="Airport" control={<Radio />} label="Airport" />
 
  </RadioGroup>
</FormControl>
            </div>

{values==="Airport" ? <div style={{position:"relative",marginTop:50,left:100}}>
                   
                   <input type="text" placeholder="Airport name"class="form-control" style={{width:300}}></input><br></br>
                   <input type="text"  placeholder="Airline" class="form-control" style={{width:170,position:"relative",left:0}}></input><br></br>
                   <input type="text"  placeholder="flight" class="form-control" style={{width:90,position:"relative",left:180,top:-62}}></input>
                  
                  
               </div> : (values === "Address" ? <div style={{position:"relative",top:180,left:100}} >
        
        <input type="text" placeholder="Address" class="form-control" style={{width:300,position:"absolute",top:-70}} ></input>
    </div> : null)}

         </div>
      
    )
}
