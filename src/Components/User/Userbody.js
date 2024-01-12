import React, { useState } from 'react';
import Crtacc from '../Form/Crtacc';
import DropDown from '../Dropdown/Dropdown';
import Email from '../Emailform/Email';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'



const Userbody = ({
    save,
    Firstname,
    Lastname,
    email,
    phone,
    address,
    show,
    setFirstname,
    setLastname,
    setaddress,
    setemail,
    setphone,
    ListOfTable }) => {


    const [acc, setacc] = useState(false)
    function toggleacc() {
        // console.log("i am account")
        if (acc === false) {
            setacc(true)
        }
        else {
            setacc(false)
        }
    }

    const [mail, setmail] = useState(false)


    function showmail() {
        // console.log("i am mail")
        if (mail === false) {
            setmail(true)
        }
        else {
            setmail(false)
        }
    }


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
                    <DropDown />
                    <button className='emailbtn' onClick={showmail}>Send Email</button>
                    {
                        mail && <div className='emailbody'>
                            <Email showmail={showmail} />
                        </div>
                    }

                    <button className='addusrbtn' onClick={toggleacc}  >Add User</button>
                    {
                        acc && <div className='body'>
                            <Crtacc toggleacc={toggleacc} />
                        </div>
                    }


                </div>


                <div className='tab'>
                    <table cellSpacing={0} >
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
                            {/* {ListOfTable} */}
                            <tr className='tablerow'>

                                {/* <td>{data.Username}</td>
                                <td>{data.Firstname}</td>
                                <td>{data.Lastname}</td>
                                <td>{data.email}</td>
                                <td>{data.phone}</td>
                                <td>{data.address}</td> */}
                                <td>rupinder98</td>
                                <td>Rupinder</td>
                                <td>Singh</td>
                                <td>Rupinderbrar860@gmail.com</td>
                                <td>9779765837</td>
                                <td>jodhpur pakhar</td>
                                <td>
                                    <button className='icon'> <FontAwesomeIcon icon={faPenToSquare} /></button>
                                    <button className='icon'> <FontAwesomeIcon icon={faTrash} /></button>
                                </td>
                            </tr>
                            <tr className='tablerow'>
                                <td>rupinder98</td>
                                <td>Rupinder</td>
                                <td>Singh</td>
                                <td>Rupinderbrar860@gmail.com</td>
                                <td>9779765837</td>
                                <td>jodhpur pakhar</td>
                                <td>
                                    <button className='icon'> <FontAwesomeIcon icon={faPenToSquare} /></button>
                                    <button className='icon'> <FontAwesomeIcon icon={faTrash} /></button>
                                </td>
                            </tr>
                            <tr className='tablerow'>
                                <td>rupinder98</td>
                                <td>Rupinder</td>
                                <td>Singh</td>
                                <td>Rupinderbrar860@gmail.com</td>
                                <td>9779765837</td>
                                <td>jodhpur pakhar</td>
                                <td>
                                    <button className='icon'> <FontAwesomeIcon icon={faPenToSquare} /></button>
                                    <button className='icon'> <FontAwesomeIcon icon={faTrash} /></button>
                                </td>
                            </tr>
                            <tr className='tablerow'>
                                <td>rupinder98</td>
                                <td>Rupinder</td>
                                <td>Singh</td>
                                <td>Rupinderbrar860@gmail.com</td>
                                <td>9779765837</td>
                                <td>jodhpur pakhar</td>
                                <td>
                                    <button className='icon'> <FontAwesomeIcon icon={faPenToSquare} /></button>
                                    <button className='icon'> <FontAwesomeIcon icon={faTrash} /></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    );
}

export default Userbody;
