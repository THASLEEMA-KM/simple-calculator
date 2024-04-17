import { Button, TextField,Stack } from '@mui/material'
import './App.css'
import { useState } from 'react'
function App() {

  const [interest,setIneterst] = useState(0)
  const [principle,setPrinciple] = useState(0)
  const [rate,setRate] = useState(0)
  const [year,setYear] = useState(0)
  const [isPrincipleInValid,setIsPrincipleInValid] = useState(false)
  const [isRateInValid,setIsRateInValid] = useState(false)
  const [isYearInValid,setIsYearInValid] = useState(false)


 const handleInputValidation=(tag)=>
 {
  const {name,value}= tag
  // console.log(name,value);
  console.log(!!value.match(/^[0-9]*.?[0-9]$/));
  if(!!value.match(/^\d*.?\d+$/))
  {
    if(name=='principle')
    {
      setPrinciple(value)
      setIsPrincipleInValid(false)
    }
    else if(name=='rate')
    {
      setRate(value)
      setIsRateInValid(false)
    }
    else{
      setYear(value)
      setIsYearInValid(false)
    }
  }
  else
  {
    if(name=="principle")
    {
      setPrinciple(value)
      setIsPrincipleInValid(true)
    }
    else if(name=='rate')
    {
      setRate(value)
      setIsRateInValid(true)
    }
    else{
      setYear(value)
      setIsYearInValid(true)
    }
  }
 }
 const handleCalculate=(e)=>{
  e.preventDefault()
  console.log("Button clicked");
  if(principle  && rate && year)
  {
    setIneterst(principle*rate*year/100)
  }
  else{
    alert("Plaese fill the form completely")
  }

 }

 const handleReset = ()=>
 {
  setIneterst(0)
  setPrinciple(0)
  setRate(0)
  setYear(0)
  setIsPrincipleInValid(false)
  setIsRateInValid(false)
  setIsYearInValid(false)
 }

  return (
    <div style={{minHeight:'100vh',width:'100%'}} className='d-flex justify-content-center align-items-center bg-dark' >
      <div  style={{width:'600px'}} className="bg-light p-5 rounded">
        <h3>Simple Interest Calculator</h3>
        <p>Calculate your simple Interest Easily</p>
        <div style={{backgroundColor:'darkgoldenrod'}} className='d-flex justify-content-center align-items-center shadow rounded flex-column text-light p-3' >
          <h1> ₹ {interest} </h1>
          <p className='fw-bolder'>Total Simple Interest</p>
        </div>
        <form className='mt-5'>
          <div className='mb-3' >
          <TextField value={principle || ""} name='principle' onChange={e=>handleInputValidation(e.target)} className='w-100 mb-3' id="principle" label="₹ Principle Amount" variant="outlined" />
          {
            isPrincipleInValid &&
            <div className="mb-3 text-danger fw-bolder">Invalid Principle Amount</div>
          }
          <TextField value={rate || ""} name='rate' onChange={e=>handleInputValidation(e.target)} className='w-100 mb-3' id="rate" label=" Rate of Ineterst (p.a) % " variant="outlined" />
          {
            isRateInValid &&
            <div className="mb-3 text-danger fw-bolder">Invalid Rate Amount</div>
          }
          <TextField value={year || ""} name='year' onChange={e=>handleInputValidation(e.target)} className='w-100 mb-3' id="time" label=" Time Period (Yr) " variant="outlined" />
          {
            isYearInValid &&
            <div className="mb-3 text-danger fw-bolder">Invalid Year</div>
          }
          </div>
          <Stack direction="row" spacing={2}>
            <Button disabled={isPrincipleInValid || isRateInValid || isYearInValid} type='submit' onClick={handleCalculate} className='bg-dark' style={{width:'50%',height:'70px' }} variant="contained">CALCULATE</Button>
            <Button style={{width:'50%',height:'70px' }} onClick={handleReset} variant="outlined">RESET</Button>
          </Stack>
          </form>
      </div>
     
    </div>
  )
}

export default App
