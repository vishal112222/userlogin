import React from 'react';
import Input from '../Input/Input';
import Buttons from '../Buttons/Buttons';
import CollectorDropdown from './CollectorDropdown';

const Addcollector = () => {
  return (
    <body className='formbackground'>
      <div className='form-body' >
        <h2>Add Collector</h2>
        <form className='formstyle'>
          <CollectorDropdown droptitle={'Username'} />
          <CollectorDropdown droptitle={'Zoneplace Name'} />



          <div className='zonebuttons'>
            <Buttons Default={'primarybutton'} Adjustment={'BackButton'} buttonName={"Back"} />
            <Buttons Default={'secondarybutton'} Adjustment={'ResetButton'} buttonName={"Reset"} />

            <Buttons Default={'primarybutton'} Adjustment={'SaveButton'} buttonName={"Save"} />
          </div>


        </form>

      </div>

    </body>
  );
}

export default Addcollector;
