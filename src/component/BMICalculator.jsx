import {useState} from 'react';

export default function BMICalculator() {
  
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState("");


  function handleChange(e){
    setWeight(e.target.value);
  }

  function handleHeightChange(e){
    setHeight(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    if (!height || !weight){
      setBMI("Please enter valid weight and height.");
      return;
    }
    if (weight <= 0 || height <= 0) {
      setBMI("Weight and height must be greater than zero.");
      return;
    }

    const height_meters=height/100;
    const bmi=weight/(height_meters*height_meters);

    if (bmi < 18.5) {
      setBMI("Your BMI is " + bmi.toFixed(1) + ". You are underweight.");
    }
    else if (bmi >= 18.5 && bmi < 24.9) {
      setBMI("Your BMI is " + bmi.toFixed(1) + ". You have a normal weight.");
    }
    else if (bmi >= 25 && bmi < 29.9) {
      setBMI("Your BMI is " + bmi.toFixed(1) + ". You are overweight.");
    }
    else {
      setBMI("Your BMI is " + bmi.toFixed(1) + ". You are obese.");
    }
  }

  function handleReset() {
    setWeight("");
    setHeight("");
    setBMI("");
}

  return (
    <form onSubmit={handleSubmit}>
      <label><h1> BMI Calculator </h1></label>
      <p></p>
      <label>Enter Your Weight:
      <input
        type="number"
        value={weight}
        onChange={handleChange}
      />
      </label>
      <br />
      <label>Enter Your Height:
      <input
        type="number"
        value={height}
        onChange={handleHeightChange}
      />
      </label>
      <br />
      <br />
      <button type="submit">CALCULATE</button> 
      

      <button type="button" onClick={handleReset}>
        RESET
      </button>

      {bmi && <p>{bmi}</p>}

    </form>
  );
}