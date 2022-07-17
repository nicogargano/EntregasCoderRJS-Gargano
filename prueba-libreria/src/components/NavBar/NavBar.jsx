import logo from './logo.webp'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
// import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <NavLink to='/'>
                    <Navbar.Brand>
                        <img src={logo} alt="logo" />
                    </Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <NavLink to='/categoria/proteinas'>Proteinas</NavLink>
                    <NavLink to='/categoria/creatinas'>Creatinas</NavLink>
                    <NavLink to='/categoria/ganadores'>Ganadores</NavLink>
                    <NavLink to='/categoria/bcaas'>BCAAs</NavLink>
                    <NavLink to='/categoria/antioxidantes'>Antioxidantes</NavLink>
                    <NavLink to='/categoria/glutaminas'>Glutaminas</NavLink>
                    <NavLink to='/categoria/preentrenos'>PreEntrenos</NavLink>
                    {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
                </Navbar.Collapse>
                <Link to='/carrito'>  
                    <CartWidget/>
                </Link>
            </Container>
        </Navbar>
    );
};

export default NavBar;
