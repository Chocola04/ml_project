import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// Import a good font (replace with your preferred font)
// import 'your-preferred-font/stylesheet.css'; // Adjust the path accordingly

// Styled components for layout and elements
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${'' /* font-family: 'your-preferred-font', sans-serif; // Use your imported font */}
`;

const Header = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  background-color: #f0f0f0;
  padding: 1rem;
  border-radius: 4px;
  text-align: center;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 4px;
  background-color: #e0e0e0;
  margin-bottom: 1rem;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const InputLabel = styled.label`
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  &:focus {
    outline: none;
    border-color: #999;
  }
`;

const Prediction = styled.p`
  font-size: 1.2rem;
  margin-top: 2rem;
  background-color: #d0d0d0;
  padding: 1rem;
  border-radius: 4px;
  text-align: center;
`;

function App() {
  const [formData, setFormData] = useState({
    gender: '',
    race: '',
    parent: '',
    lunch : '',
    preparation : '',
    reading : '',
    writing : '',
  });

  const [prediction, setPrediction] = useState('');
  const [button, submitbutton] = useState(true);



  const handletryagain =(event) => {

    window.location.reload()
  }


  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

    const handleClick = async () => {

      if(formData.reading>100 || formData.writing>100 || formData.reading<0 || formData.writing<0){
          alert("Please enter a number between 0 and 100")
          return
      }

      if(formData.gender === '' || formData.lunch === '' || formData.parent === '' || formData.preparation === '' || formData.race === ''){
        alert("Please fill all the fields")
        return
      }

      try {
        const response = await axios.post("http://localhost:5000/predictdata", formData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        // Handle successful response (response.data)
        console.log("Data sent successfully:", response.data); 
        setPrediction(response.data)
        submitbutton(false)// Example usage
  
      } catch (error) {
        // Handle errors here
        console.error("Error sending data:", error); // Example usage
      }
    };

  return (
    <Container>
      <Header>Marks Predictor</Header>
      <FormContainer>
        <InputContainer>
          <InputLabel htmlFor="gender">Gender:</InputLabel>
          <select id="gender" name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="race">Race/ethnicity:</InputLabel>
          <select id="race" name="race" value={formData.race} onChange={handleChange}>
            <option value="">Select</option>
            <option value="group A">group A</option>
            <option value="group B">group B</option>
            <option value="group C">group C</option>
            <option value="group D">group D</option>
            <option value="group E">group E</option>
          </select>
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="parent">Parent Level od Education:</InputLabel>
          <select id="parent" name="parent" value={formData.parent} onChange={handleChange}>
            <option value="">Select</option>
            <option value="bachelor's degree">bachelor's degree</option>
            <option value="master's degree">master's degree</option>
            <option value="associate's degree">associate's degree</option>
            <option value="some college">some college</option>
            <option value="high school">high school</option>
            <option value="some high school">some high school</option>
          </select>
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="lunch">Lunch:</InputLabel>
          <select id="lunch" name="lunch" value={formData.lunch} onChange={handleChange}>
            <option value="">Select</option>
            <option value="standard">standard</option>
            <option value="free/reduced">free/reduced</option>
          </select>
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="preparation">Test preparation course:</InputLabel>
          <select id="preparation" name="preparation" value={formData.preparation} onChange={handleChange}>
            <option value="">Select</option>
            <option value="none">none</option>
            <option value="completed">completed</option>
          </select>
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="reading">Reading score:</InputLabel>
          <Input type="number" id="reading" name="reading" value={formData.reading} onChange={handleChange} />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="writing">Writing score:</InputLabel>
          <Input type="number" id="writing" name="writing" value={formData.writing} onChange={handleChange} />
        </InputContainer>
        </FormContainer>
        {button?<div>
          <button type="submit"  onClick={handleClick}>Predict Marks</button>
        </div>:<div><h3>The Prediction is {prediction}</h3> <button onClick={handletryagain} type="">Try again</button></div>}
        </Container>
    )
    };

    export default App;
