import { Paper } from '@material-ui/core'
import React from 'react'

import "../App.css"
import "../Tablet.css"


export const Cars=[
{CarImage:"https://worldlimobiz.com/CTairlink/wp-content/uploads/cars-gallery/1400613591.png",type:"Sedan" ,Passengers:"3", price:"$102"},
{CarImage:"https://worldlimobiz.com/CTairlink/wp-content/uploads/cars-gallery/1470936296.png",type:"Mini Suv" ,Passengers:"4", price:"$132"},
{CarImage:"https://worldlimobiz.com/CTairlink/wp-content/uploads/cars-gallery/1410546680.png",type:"Suv" ,Passengers:"6", price:"$150"},
{CarImage:"https://worldlimobiz.com/CTairlink/wp-content/uploads/cars-gallery/1400613657.png",type:"Van" ,Passengers:"9", price:"$252"},
{CarImage:"https://worldlimobiz.com/CTairlink/wp-content/uploads/cars-gallery/1373741725.png",type:"Mercedes Sprinter" ,Passengers:"14", price:"$354"},
{CarImage:"https://worldlimobiz.com/CTairlink/wp-content/uploads/cars-gallery/1367866387.png",type:"Mini Coach" ,Passengers:"24", price:"$594"},
{CarImage:"https://worldlimobiz.com/CTairlink/wp-content/uploads/cars-gallery/1367866289.png",type:"Stretch Limo" ,Passengers:"10", price:"$450"}

]

export default function ChooseAcar(props) {

    const [activeStep, setActiveStep] = React.useState(0);


    const handleNext = () => {
       
    
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
       
      };



    return (
      
            <Paper elevation={2} style={{width:760,height:1050,marginLeft:300,background:"#f6f6f6"}} className="Form2">
                    <Paper style={{width:760,height:20,margintop:20}} className="Form2-Strip"><p>Results 7 out of 7</p></Paper>
                    <div>
                    <table class="table" cellPadding="40px" cellspacing="1" >
                        {Cars.map((k)=>(
                           
                          
                                <tbody>
                                      
                                    <tr>
                                        <td scope="row"><img src={k.CarImage} className="car-image"></img></td>  
                                       
                                        <td><div>
                                            <p>{k.type}</p>
                                            <label><img src="https://worldlimobiz.com/CTairlink/wp-content/themes/u-design/resform_assets/images/passenger-icon.png"/>{k.Passengers}Passengers</label>
                                            </div></td>
                                        <td > 
                                            <div> 
                                                <h4>{k.price}</h4>
                                                <p>Gratuity included</p>
                                                <button type="button" class="btn btn-primary" onClick={props.handleNext}>SELECT</button>
                                            </div>
                                        </td>
                                    </tr>
                                   
                                </tbody>
                       
                            
                        ))}
                             </table>
                    </div>
            </Paper>

    )
}
