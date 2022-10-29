
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";


function NavBar() {
  return (
    <>
      {['lg' ].map((expand) => (
        <Navbar key={expand}  bg="primary" expand={expand} className="">
          <Container fluid bg="primary">

            <Navbar.Brand href="#" className="text-secondary" bg="primary"></Navbar.Brand>
            
                <img src="'../../image/icons/escudounslweb.png" width="100" height="50" className="d-inline-block align-top  justify-content-start me-3" alt=""/>
                <img src="'../../image/icons/escudounslweb.png" width="100" height="50" className="d-inline-block align-top  justify-content-start me-3 " alt=""/>  
               

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}  />

            <Navbar.Offcanvas  id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">
              <Offcanvas.Header closeButton >
                
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}></Offcanvas.Title>

              </Offcanvas.Header>
              
              <Offcanvas.Body bg="primary" >
                
                <Nav className="justify-content-start  flex-grow-1 pe-3" >
                  
                  
                <Link to="/" className="text-light">inicio</Link>
                
                <Link to="/RevistaDigital" className="text-light">Revista Digital</Link>
                <Link to="/Observatorio" className="text-light">Observatorio</Link>   
                

                </Nav>
                
                <Nav className="justify-content-end">

                  <Button className="bg-secondary text-dark ms-1 mt-1 ms-2  ">Registrarse</Button>
                  <Button className="bg-secondary text-dark ms-1 mt-1 ms-2  ">Iniciar sesion</Button>
                   
                </Nav>
                
            
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;