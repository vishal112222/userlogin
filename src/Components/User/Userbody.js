import React, { useState } from 'react';
import Crtacc from '../Form/Crtacc';
import DropDown from '../Dropdown/Dropdown';
import Email from '../emailForm/email';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

const Userbody = ({ ListOfTable, setSelectedLocation, onEmailSubmit, fetch }) => {

    const [acc, setacc] = useState(false)
    const [mail, setmail] = useState(false)

    function showmail() {
        if (mail === false) {
            setmail(true)
        } else {
            setmail(false)
        }
    }

    function toggleacc() {
        if (acc === false) {
            setacc(true)
        }
        else {
            setacc(false)
        }
    }
    const handleSelect = (value) => {
        setSelectedLocation(value);
    };

    return (
        <>
            <div className='userbackground'>
                <div className='userheading'>
                    <h2>Users</h2>
                </div>
                <div>
                    <hr className='line' />
                </div>
                <div className='buttons'>
                    <DropDown onSelect={handleSelect} />

                    <button className='emailbtn' onClick={showmail} >Send Email</button>
                    {
                        mail && <div className='emailbody'>
                            <Email showmail={showmail} onEmailSubmit={onEmailSubmit} fetchdata={fetch} />
                        </div>
                    }

                    <button className='addusrbtn' onClick={toggleacc}  >Add User</button>
                    {
                        acc && <div className='body'>
                            <Crtacc toggleacc={toggleacc} fetchdata={fetch} />
                        </div>
                    }
                </div>

                <div className='tab' style={{ overflowY: 'auto', maxHeight: '350px' }}>
                    <table cellSpacing={0}  >
                        <thead className='tablehead'>
                            <th>Username</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone no</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </thead>
                        <tbody>
                            {ListOfTable}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
export default Userbody;

