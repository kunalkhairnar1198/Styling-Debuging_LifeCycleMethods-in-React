import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');

  //updating style is valid or not to get state true or false
  const [isValid, setIsValid] = useState(true)
 
  const goalInputChangeHandler = event => {
    // console.log(event.target.value)

    //if you clickbtn when empty input box then we will enter something input data to update style color in input box and label element
    if(event.target.value.trim().length > 0){
        setIsValid(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    //this condition will achieve stop add emplty item in the list
    if(enteredValue.trim().length === 0){
      setIsValid(false)
      return;
    }
      console.log(isValid)
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        {/* conditional styling when is input box is empty submit then style will chage and validating input boxes*/}
        <label 
        style={{color: !isValid ? 'red' : 'black'}}>
          Course Goal
        </label>
      
        {/* input box validatting a input box when click empty input then validate state false and execute the style conditions */}
      
          <input 
          type="text"
          style={{background : !isValid ? 'salmon':'transparent', 
          borderColor: !isValid ? 'red' :'black'}} 
          onChange={goalInputChangeHandler} 
          />

      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
