import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import Userbody from './Userbody';

const User = () => {

    const [Firstname, setFirstname] = useState("")
    const [Lastname, setLastname] = useState("")
    const [email, setphone] = useState("")
    const [phone, setemail] = useState("")
    const [address, setaddress] = useState("")

    const [table, settable] = useState([])

    let save = (elem) => {
        elem.preventDefault()
        settable([...table, { Firstname, Lastname, email, phone, address }])
        setFirstname('')
        setLastname('')
        setphone('')
        setemail('')
        setaddress('')

    }

    let ListOfTable = table.map((data) => {

        console.log(data)
        return (
            <>
                <tr className='tablerow'>
                    <td>i am</td>
                    {/* <td>{data.Username}</td>
                    <td>{data.Firstname}</td>
                    <td>{data.Lastname}</td>
                    <td>{data.email}</td>
                    <td>{data.phone}</td>
                    <td>{data.address}</td> */}
                    <td>
                        <button className='icon'> <FontAwesomeIcon icon={faPenToSquare} /></button>
                        <button className='icon'> <FontAwesomeIcon icon={faTrash} /></button>
                    </td>
                </tr>
            </>
        )
    }
    )


    return (
        <>
            <div className='main' >
                <Userbody
                    save={save}
                    Firstname={Firstname}
                    Lastname={Lastname}
                    email={email}
                    phone={phone}
                    address={address}
                    setFirstname={setFirstname} 
                    setLastname={setLastname} 
                    setaddress={setaddress} 
                    setemail={setemail} 
                    setphone={setphone} 
                    ListOfTable={ListOfTable} />

            </div>
        </>
    );
}

export default User;
