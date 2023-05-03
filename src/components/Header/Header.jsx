// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import {  FaUserCircle } from 'react-icons/fa';
import {  SiCodechef } from 'react-icons/si';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

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
                            <Nav className="mx-auto text-xl">
                                
                                <Link to="/" className='mr-5'>Home</Link>
                                <Link to="/blog">blog</Link>
                                

                            </Nav>
                            <Nav>
                                {
                                    user &&
                                    <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                                }

                                {
                                    user ?
                                        <Button onClick={handleLogOut} variant="secondery">Logout</Button> : <Link to="/login"><Button variant="secondery">Login</Button></Link>
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