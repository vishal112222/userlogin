import React from 'react';
import Input from '../Input/Input';
import Buttons from '../Buttons/Buttons';
import CollectorDropdown from './CollectorDropdown';

const Zoneplace = () => {
  return (
    <body className='formbackground'>
      <div className='form-body' >
        <h2>Add Zoneplace</h2>
        <form className='formstyle'>
          <CollectorDropdown droptitle={'Zonep Name'} />

          <Input Title={"Zoneplace Name"} />
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

export default Zoneplace;
