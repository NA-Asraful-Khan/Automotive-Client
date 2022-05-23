import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Automotive Parts Manufacturing</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='ms-auto'>
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/Tools">Tool Items</Nav.Link>
                            <Nav.Link as={Link} to="/Blog">Blog</Nav.Link>
                            <Nav.Link as={Link} to="/Portfolio">Portfolio</Nav.Link>
                            
                            {
                                user ?
                                    <>
                                        <Nav.Link as={Link} to="/DashBoard">DashBoard</Nav.Link>
                                        <h6 className='text-success mt-2'>{user.displayName}</h6>
                                        <button style={{margin: "-5px"}}  className='btn text-muted' onClick={handleSignOut} >Logout</button>
                                    </>
                                    :
                                    <Nav.Link as={Link} to="/Login">Login</Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;