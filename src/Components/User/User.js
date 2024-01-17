import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import Userbody from './Userbody';

const User = () => {
    const [selectedLocation, setSelectedLocation] = useState('naukrw8w_donordatabase');
    const [obj, setobj] = useState([]);

    const [email, setEmailData] = useState('')
    const { to, body } = email;

    useEffect(() => {
        fetchData();
    }, [selectedLocation]);
    const handleEmailSubmit = (emailData) => {
        setEmailData(emailData)
    };
    const fetchData = async () => {
        try {
            await axios.get(`/api/scripts/mms-user?dbname=${selectedLocation}&email=${to}&body=${body}`).then((response) => {
                setobj(response.data);
            })
        } catch (err) {
            console.error(err);
        }
    };
    const ListOfTable = obj.map((data) => (
        <tr className='tablerow'  key={data.userid}>
            <td>{data.username}</td>
            <td>{data.firstname}</td>
            <td>{data.lastname}</td>
            <td>{data.email}</td>
            <td>{data.phone}</td>
            <td>{data.address}</td>
            <td>
                {/* <button className='icon'> <FontAwesomeIcon icon={faPenToSquare} /></button>
                <button className='icon' > <FontAwesomeIcon icon={faTrash} /></button> */}
                <button className='icon' onClick={() => handleEdit(data.userid)}>
                    <FontAwesomeIcon icon={faPenToSquare} />
                </button>
                <button className='icon' onClick={() => handleDelete(data.userid)}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>

            </td>
        </tr>
    ));

    const handleEdit = (id) => {
        // Implement your edit logic using the id
        console.log(`Edit clicked for id ${id}`);
      };
      
      const handleDelete = (id) => {
        // Implement your delete logic using the id
        console.log(`Delete clicked for id ${id}`);
      };

    

    return (
        <>
            <div className='main'>
                <Userbody
                    ListOfTable={ListOfTable}
                    setSelectedLocation={setSelectedLocation}
                    onEmailSubmit={handleEmailSubmit}
                    fetch={fetchData}
                />
            </div>
        </>
    );
};
export default User;











