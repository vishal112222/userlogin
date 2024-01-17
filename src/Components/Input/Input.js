import React from 'react';


const Input = ({Title}) => {
  return (
    <div className='inputdiv'>
        <label for="zone" className='Formlabel'>{Title}</label>
        <input type="text" id="zone" name="zone" className='Formfield'  />
        
    </div>
    
  );
}

export default Input;
