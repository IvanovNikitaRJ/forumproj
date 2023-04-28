import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {ADMIN_ROUTE,
    AUTHENTICATION_ROUTE,
    BOARD_LIST_ROUTE
} from "../../utils/const";


function NavigationBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href={ADMIN_ROUTE}>Admin</Nav.Link>
                        <Nav.Link href={AUTHENTICATION_ROUTE}>LogIN</Nav.Link>
                        <Nav.Link href={BOARD_LIST_ROUTE}>BoardList</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;