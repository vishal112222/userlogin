import React, { useState } from 'react';

import Crtacc from './Crtacc';
import './Crt.css'



const Donor = () => {
  
  const [acc, setacc] = useState(false)
    function toggleacc() {
        console.log("i am account")
        if (acc === false) {
            setacc(true)
        }
        else {
            setacc(false)
        }
    }

  return (
    <>
    <div>
      <button  onClick={toggleacc} > add account</button>
      {
        acc && 
        <div  className='body'>
          <Crtacc toggleacc={toggleacc}/>
          </div>
      }

    </div>
    
    </>
  );
}

export default Donor;
