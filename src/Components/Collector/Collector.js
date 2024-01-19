import React, { useState } from 'react';
import DropDown from '../Dropdown/Dropdown';
import Buttons from '../Buttons/Buttons';
import ZoneForm from '../Collectorform/ZoneForm';
import Zoneplace from '../Collectorform/Zoneplace';
import Addcollector from '../Collectorform/Addcollector';



const Collector = () => {

    const [zone, setzone] = useState(false)
    const [zoneplace, setzoneplace] = useState(false)
    const [collector, setcollector] = useState(false)
    const [selectedLocation, setSelectedLocation] = useState([]);
    const [wholeData, setwholeData] =useState()


    console.log("whoeldta is",wholeData)    

    function togglezone() {
        if (zone === false) {
            setzone(true)
        }
        else {
            setzone(false)
            console.log("back function is runed")
        }
    }
    function togglezoneplace() {
        if (zoneplace === false) {
            setzoneplace(true)
        }
        else {
            setzoneplace(false)
            console.log("back function is runed")
        }
    }
    function togglecollector() {
        if (collector === false) {
            setcollector(true)
        }
        else {
            setcollector(false)
            console.log("back function is runed")

            
        }
    }
    
    const handleLocationChange = (location) => {
        setSelectedLocation(location);
        console.log(location)
    };


    return (
        <>
            <div className='main'>
                <div className='userbackground'>
                    <div className='userheading'>
                        <h2>Collector</h2>
                        <div className='collectordrop'>
                            <DropDown onSelect={handleLocationChange} />
                        </div> 
                    

                    </div>
                    <div>
                        <hr className='line' />
                    </div>
                    <div className='headerbuttons' >
                        <Buttons  Default={'secondarybutton'} Adjustment={'zonebutton'} functionName={togglezone} buttonName={"Add zone"} />
                        {
                            zone && <ZoneForm selectedLocation={selectedLocation} setwholeData={setwholeData}  backzone={togglezone} />
                        }
                        <Buttons Default={'secondarybutton'} Adjustment={'zoneplacebutton'} functionName={togglezoneplace} buttonName={"Add zoneplace"} />
                        {
                            zoneplace && <Zoneplace selectedLocation={selectedLocation} setwholeData={setwholeData}  backzoneplace={togglezoneplace} />
                        }
                        <Buttons Default={'primarybutton'} Adjustment={'collectorbutton'} functionName={togglecollector} buttonName={"Add Collector"} />
                        {
                            collector && <Addcollector selectedLocation={selectedLocation} setwholeData={setwholeData} backcollector={togglecollector} />
                        }

                    </div>
                    <div className='tab' style={{ overflowY: 'auto', maxHeight: '350px' }}>
                        <table cellSpacing={0}  >
                            <thead className='tablehead'>
                                <th>Username</th>
                                <th>Zone Name</th>
                                <th>Zone Place</th>
                                <th>Actions</th>
                            </thead>
                            <tbody>
                                <tr className='tablerow'>
                                    <td>rupinder</td>
                                    <td>Bathinda</td>
                                    <td>Jodhpur Pakhar</td>
                                    <td>Edit Del</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>

        </>
    );
}

export default Collector;
