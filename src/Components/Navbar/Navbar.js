import React from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    return (
        <>
            <header>
                <div className='st'>
                    <span className='good'>Good afternoon ,</span>
                    <span className='name'> Ankush Abc</span>
                </div>
                <div className='na'>
                    <nav className='nav'>
                        <ul className='uli'>
                            <li >
                                <Link className='link' to="/">Book</Link>
                            </li>
                            <li >
                                <Link className='link' to="/">Donor</Link>
                            </li>
                            <li >

                                <Link className='link' to="/Collector">Collector</Link>
                            </li>
                            <li >
                                <Link className='link' to="/user">Users</Link>
                            </li>
                            <li >
                                <Link className='link' to="/">Areas</Link>
                            </li>
                        </ul>
                        {/* <div className='bt'>
                            <button className='navbtn' type='button' >
                                <span className='logo'>AA</span>
                                <FontAwesomeIcon icon={faCircleChevronDown} />
                            </button>
                        </div> */}
                    </nav>
                </div>
            </header>
            <hr />
        </>
    );
}

export default Navbar;
