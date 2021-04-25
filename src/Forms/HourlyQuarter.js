import React, { useState } from 'react'
import { FormControlLabel,Radio, RadioGroup } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl';
import DropoffHourlyquarter from './DropoffHourlyquarter';
import "../App.css"
import "../Tablet.css"



export default function HourlyCharter(){
    const arr=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]

    const occasions=["Corporate Event","Prom/School","Event","Wedding","Birthday","Anniversary",
"Night-on-the-town","Concert/Sporting","Event","Bachelor(ette)","Party","To Cruise Port","From Cruise Port"
,"Wine/Private Tour" ,"Funeral"]





const [value, setValue] = React.useState('Address');

const[stoparray,setstoparray]=useState([])
const[count,setcount]=useState(0)



const addStops=()=>{
    setstoparray(prev=>[...prev,count])
    setcount(count=>count+1)
    console.log(stoparray)
}


const removestops=(id)=>{
    setstoparray(prev=>[...prev.filter(item=>item!==id)])
    setcount(count=>count-1)
}

const handleChange = (event) => {
setValue(event.target.value);
};






    return(
        <div>
            
            <div class="form-group" style={{position:"absolute",top:150,left:900}} className="ServiceHours">
            <label style={{position:'absolute',top:-40,left:-10}}>SERVICE HOURS</label>
              <select class="form-control" name="" id="" style={{width:80}}>
              
       {arr.map((l)=>(
           <option value={l}>{l}</option>
       ))}
  
              </select>
            </div>

            <div>
            
            <div class="form-group" style={{position:"absolute",top:150,left:1000}} className="occassion">
            <label style={{position:'absolute',top:-30,left:0}}>OCCASION</label>
              <select class="form-control" name="" id="" style={{width:150}}>
              <option value="">--Select</option>
       {occasions.map((l)=>(
           <option value={l}>{l}</option>
       ))}
  
              </select>
            </div>


        </div>

        <div>
            
            <div style={{position:"absolute",left:300,top:300}} className="pickuplocation">
            <FormControl component="fieldset">
  <label style={{position:'relative',top:0,left:-50}}>Pickup Location</label>
  <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
    <FormControlLabel value="Address" control={<Radio />} label="Address"  />
    <FormControlLabel style={{marginTop:-50,marginLeft:100}} value="Airport"  control={<Radio />} label="Airport" />
 
  </RadioGroup>
</FormControl>
            </div>

            <div>
                {value==="Airport" ? <div style={{position:"relative",marginTop:180,left:100}} className="hqairport">
                   <div className="hqinput">
                    <input  type="text" placeholder="Airport name"class="form-control" style={{width:300}}></input><br></br>
                    </div>
                    <input type="text"  placeholder="Airline" class="form-control" style={{width:170,position:"relative",left:0}}></input><br></br>
                    <input type="text"  placeholder="flight" class="form-control" style={{width:90,position:"relative",left:180,top:-62}}></input>
                   
                   
                </div> :  <div style={{position:"relative",top:180,left:100}} className="hqddress" >
         
                  <input type="text" placeholder="Address" class="form-control" style={{width:300}} ></input>
              </div>}
            </div>


{/* //////////////////////////////////////////////////////////////////////// */}

            <div  style={{position:"absolute",left:700,top:300}} className="stopbutton">
            <label style={{position:'relative',top:0,left:70}}>Dropoff Location</label><br></br>


            <div style={{width:400,height:200,position:"absolute",overflow:"auto", 
        
        top:78}} className="smalldiv">
                {stoparray.map(id=>{


                    return(   
                    
                     
                    
                    
                    <DropoffHourlyquarter removestops={()=>removestops(id)}   />  
                    
                   
                    
                    )



})}

</div>


                <button  type="button" class="btn btn-primary" style={{position:"absolute",top:30,left:70}} onClick={addStops}>Add Stop</button>
              




            </div>

          
        </div>

        </div>



       
    )

}
