import React from 'react';
import Input from '../Input/Input';
import Buttons from '../Buttons/Buttons';

const ZoneForm = () => {
  return (
    <body className='formbackground'>
      <div className='form-body' >
        <h2>Add Zone</h2>
        <form className='formstyle'>
          <Input Title={"Zone Name"} />
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

export default ZoneForm;
