import { FormControlLabel, FormLabel, Paper, Radio, RadioGroup } from '@material-ui/core'
import React from 'react'


import MenuItem from '@material-ui/core/MenuItem';


import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import HourlyCharter from './HourlyQuarter';


export default function CreateRequest() {


    const [Service, setService] = React.useState('');
    const [Passengers, setPassengers] = React.useState('');

    const arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14]
   
  const handleChange = (event) => {
    setService(event.target.value);
    console.log(Service)
  };
  
  const handlePassChange = (event) => {
    setPassengers(event.target.value);
    console.log(Passengers)
  };



//////////////////////////////////
  const ToAirport=()=>{
      return(
          <div style={{position:"relative",marginTop:160}}>

              <div style={{position:"relative",top:50,left:100}} >
                  <label style={{position:'relative',top:-10,left:-420}}>Pickup Location</label><br></br>
                  <input type="text" placeholder="Address" class="form-control" style={{width:300}} ></input>
              </div>
              <div style={{position:"relative",top:-20,left:500}}>
                  <label style={{position:'relative',top:-10,left:-420}}>Dropoff Location</label><br></br>
                  <input type="text" placeholder="Airport Name" class="form-control" style={{width:300}} ></input>
                  <div><br></br>
                 
                  <input type="text"placeholder="Airline" class="form-control" style={{width:170,position:"relative",left:0}}></input>

                  </div>
                  <div>
                 
                  <input type="text"placeholder="Flight" class="form-control"  style={{width:90,position:"relative",left:180,top:-38}}></input>
                  
                  </div>
              </div>
              
              
          </div>
      )
  }


////////////////////////

  const FromAirport=()=>{

    return(
        <div style={{position:"relative",marginTop:160}}>
            <div style={{position:"relative",top:50,left:100}}>
                <label style={{position:'relative',top:-10,left:-420}} >Pickup Location</label><br></br>
                <input type="text" placeholder="Airport Name" class="form-control" style={{width:300}}></input>

                
                <div><br></br>
               
                <input type="text"placeholder="Airline" class="form-control" style={{width:170,position:"relative",left:0}}></input>

                </div>
                <div>
               
                <input type="text"placeholder="Flight" class="form-control"  style={{width:90,position:"relative",left:180,top:-38}}></input>
                
                </div>
            </div>
            <div style={{position:"relative",top:-120,left:500}}>
                <label style={{position:'relative',top:-10,left:-420}} >Dropoff Location</label><br></br>
                <input type="text" placeholder="Address" class="form-control" style={{width:300}}></input>
            </div>
            
            
        </div>
    )
  }


  const PointtoPoint=()=>{
      return(
          <div style={{position:"relative",marginTop:160}}>
      <div style={{position:"relative",top:50,left:100}}>
                <label style={{position:'relative',top:-10,left:-420}} >Pickup Location</label><br></br>
                <input type="text" placeholder="Airport Name" class="form-control" style={{width:300}}></input>

                
                </div>

                <div style={{position:"relative",top:-20,left:500}}>
                <label style={{position:'relative',top:-10,left:-420}} >Dropoff Location</label><br></br>
                <input type="text" placeholder="Address" class="form-control" style={{width:300}}></input>
            </div>
</div>
      )
  }






    
  

    return (
        <Paper elevation={2} style={{width:1000,height:500,marginLeft:200,background:"#FFFAFA"}}>
            <h5>Service Request:</h5>
            <form>
                <div style={{marginLeft:-800,marginTop:15}}>
            <FormControl >
          <label>SERVICE TYPE</label>      
        <Select
            
          value={Service}
          onChange={handleChange}
          
          
          inputProps={{ 'aria-label': 'Without label' }}
        >
            
            
          <MenuItem value="To Airport">
            <em>To Airport</em>
          </MenuItem>
          <MenuItem value="From Airport">From Airport</MenuItem>
          <MenuItem value="Point to Point">Point to Point</MenuItem>
          <MenuItem value="Hourly Charter">Hourly Charter</MenuItem>
        </Select>
        
      </FormControl>
      </div>

      <div class="form-group" style={{position:"absolute",top:130,left:400}}>
        <label for="" style={{position:'absolute',top:-10,left:-1}}>PICK-UP DATE</label><br></br>
        <input type="date"
          class="form-control" name="" id="" aria-describedby="helpId" placeholder="" required/>
      
      </div>

      <div class="form-group" style={{position:"absolute",top:130,left:600}}>
        <label for="" style={{position:'absolute',top:-10,left:-1}}>PICK-UP TIME</label><br></br>
        <input type="time"
          class="form-control" name="" id="" aria-describedby="helpId" placeholder=""/>
      
      </div>

      <div style={{position:"absolute",top:130,left:800}} >
      <FormControl >
          <label  style={{position:'absolute',top:-10,left:-1}}>PASSENGERS</label>      
       
                <div class="form-group">
                  <label for=""></label>
                  <select class="form-control" name="" id="">
                  
           {arr.map((l)=>(
               <option value={l}>{l}</option>
           ))}
      
                  </select>
                </div>
        
      </FormControl>

      </div>

                <div>
                   { (Service === "To Airport" ? <ToAirport /> : (Service === "From Airport" ? <FromAirport /> : (
                       Service === "Point to Point" ? <PointtoPoint /> : (Service === "Hourly Charter" ? <HourlyCharter /> : <ToAirport />)
                   )))}
                </div>

      

            </form>

        </Paper>
    )
}
