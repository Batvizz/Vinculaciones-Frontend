import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {useEffect, useRef, useState} from 'react';
import {NavLink,useNavigate,Link } from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Axios from 'axios';
import './navbar.css';

function NavBar() {
  const navigate = useNavigate();
  const offCanvasRef = useRef();
  const [auth, setAuth] = useState(false)
  const closeOffCanvas = () => offCanvasRef.current.backdrop.click() ;
  

  useEffect(() => {
      Axios.get('http://127.0.0.1:8000/api/checkAuth')
          .then(response => {
              console.log(response);
              setAuth(true);
          })
          .catch(function (error) {
              console.log(error);
              setAuth(false);
          })
  },[])

  return (
    <>
      {['lg' ].map((expand) => (
        
        <Navbar key={expand} expand={expand} className="navbar" sticky="top">
          <Container fluid bg="primary">
            <Navbar.Brand href="/Vinculaciones-Frontend/">
              <img src='assets/svgs/Solo-LogoSVTS.svg'  width="100" height="50" className="d-inline-block " alt=""/>
              
            </Navbar.Brand>
            <Navbar.Toggle className='navbar-toggler' aria-controls={`offcanvasNavbar-expand-${expand}`}/>
            <Navbar.Offcanvas className='menu-toggle' id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end"  ref={offCanvasRef}>
              <Offcanvas.Header closeButton >
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}></Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body >
                <Nav className="justify-content-start  flex-grow-1" >
                  <Link to="/"  onClick={closeOffCanvas}  className="text-3">inicio</ Link>
                  <Link to="/RevistaDigitalPage"  onClick={closeOffCanvas}  className="text-3">Revista Digital</Link>
                  <Link to="/HerramientasPage"  onClick={closeOffCanvas}  className="text-3">Herramientas</Link>   
                  <Link to="/ObservatorioPage"  onClick={closeOffCanvas}  className="text-3">Observatorio</Link>   
                </Nav>
                <Nav className="navbar-buttons">
                  
                  {
                    auth ? <>
                      <Button  onClick={() => {  navigate("/LoginPage")  ;  closeOffCanvas()  }} >Mis proyectos</Button>
                      <Button onClick={() => {  navigate("/SingUpPage")  ;  closeOffCanvas()  }} >Cerrar sesion</Button>
                    </> : 
                    <>
                    <Button  onClick={() => {  navigate("/LoginPage")  ;  closeOffCanvas()  }} >iniciar sesión</Button>
                    <Button onClick={() => {  navigate("/SingUpPage")  ;  closeOffCanvas()  }} >registrarse</Button>
                    </>
                  }
            
                  <img src='assets/svgs/Escudo-UNSL-Blanco.svg'  width="100" height="50" className="d-inline-block " alt=""/>
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