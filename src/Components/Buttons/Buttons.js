import React from 'react';

const Buttons = ({buttonType,Default,Adjustment,functionName, buttonName, target}) => {


  return (
    <>
       <button formTarget={target} type={buttonType} className= {`${Default} ${Adjustment}`}  onClick={functionName}  >{buttonName}</button>
    </>
  );
}
export default Buttons;
