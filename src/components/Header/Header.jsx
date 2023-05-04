// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import {  SiCodechef } from 'react-icons/si';
import { Container, Nav, Navbar } from 'react-bootstrap';
// eslint-disable-next-line no-unused-vars
import Navlink from './Navlink.css'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error =>
                console.log(error));
    }
    return (
        <div>
            <Container>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='p-4'>
                    <Container>

                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <h1 className='text-2xl font-bold text-red-500 flex'><SiCodechef className='text-3xl mr-2'></SiCodechef> The Chef Server</h1>
                            <Nav className="mx-auto text-xl ">
                                <NavLink 
                                    to='/'
                                    className={({ isActive }) => (isActive ? 'active' : 'default')}
                                >
                                    Home
                                </NavLink>
                                
                                <NavLink
                                    to='/blog'
                                    className={({ isActive }) => (isActive ? 'active' : 'default')}
                                >
                                    Blog
                                </NavLink>
                               
                                

                            </Nav>
                            <Nav>
                                {
                                    user && <img className='w-25 rounded-circle' src={user.photoURL} alt="" />
                                   // <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                                }

                                {
                                    user ?
                                        <NavLink onClick={handleLogOut} className={({ isActive }) => (isActive ? 'active' : 'default')}>Logout</NavLink> : <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : 'default')}>Login</NavLink>
                                }

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </div>
    );
};

export default Header;