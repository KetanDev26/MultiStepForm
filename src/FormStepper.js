import React from 'react';
import "./App.css"
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CreateRequest from './Forms/CreateRequest';
import ChooseAcar from './Forms/ChooseAcar';
import ChooseExtras from './Forms/ChooseExtras';
import ReviewBook from './Forms/Review&Book';
import "./Tablet.css"



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
    color:"white",
    backgroundColor:"#00BFFF"
  },
 
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    
   
   
    color:"black",
    

  },
}));

function getSteps() {
  return ['Create Request', 'Choose a car', 'Choose extras','Review & Book'];
}



export default function HorizontalLinearStepper(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  let widths=matchMedia('(max-width: 600px)').matches;

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <CreateRequest />;
      case 1:
        return <ChooseAcar handleNext={handleNext} />
      case 2:
        return <ChooseExtras />
      case 3:
          return <ReviewBook />  
      default:
        return 'Unknown step';
    }
  }

  
 

  const handleNext = () => {
    

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
   // setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  

  const handleReset = () => {
    setActiveStep(0);
  };

  

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} className="main-stepper" orientation={ widths ? 'vertical' : 'horizontal'}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
        
         
          return (
            <Step key={label} {...stepProps} className="steps">
              <StepLabel {...labelProps}>{label} </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
            ✔   Hey!! Your form is successfully submitted!
              <Button onClick={handleReset} className={classes.button}>
              Want more ride?
            </Button>
            </Typography>
            
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              
            



              {activeStep === 0 ?  <Button disabled onClick={handleBack} className={classes.button} style={{background:"#ADD8E6",color:"white"}}>
                Back
              </Button> : (activeStep === 1 ? <Button onClick={handleBack} className={classes.button} style={{background:"blue",color:"white"}}>
                Back
              </Button> : (activeStep === 2 ? <Button onClick={handleBack} className={widths ? 'button1' : classes.button} style={{background:"blue",color:"white"
            ,marginLeft:190,marginTop:-260,position:"absolute"}}>
                Back
              </Button>:(activeStep === 3 ? <Button onClick={handleBack} className={widths ? 'button2' : classes.button} style={{background:"blue",color:"white",marginLeft:960}}>
                Back
              </Button>:null)))}



             {activeStep === 0 ?  <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                NEXT
              </Button> : (activeStep === 1 ? null : (activeStep === 2 ? <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={widths ? 'button1' : classes.button}
                style={{marginLeft:280,marginTop:-260,position:"absolute"}}
              >
                CONTINUE TO CHECKOUT
              </Button>:(activeStep === 3 ? <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={widths ? 'button2' : classes.button}
                style={{marginLeft:1160,marginTop:-60}}
              >
                BOOK  NOW
              </Button >:null)))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


//{activeStep === steps.length - 1 ? 'Finish' : 'Next'}