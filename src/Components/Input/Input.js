import React from 'react';


const Input = ({Title, inputName,inputValue,functionName}) => {
  return (
    <div className='inputdiv'>
        <label for="zone" className='Formlabel'>{Title}</label>
        <input  value={inputValue} onChange={functionName} type="text" id="zone" name={inputName} className='Formfield'  />
        
    </div>
    
  );
}

export default Input;
