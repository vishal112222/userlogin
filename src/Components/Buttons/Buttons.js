import React from 'react';

const Buttons = ({Default,Adjustment,functionName, buttonName}) => {
  return (
    <>
       <button className= {`${Default} ${Adjustment}`}  onClick={functionName} >{buttonName}</button>
    </>
  );
}
export default Buttons;
