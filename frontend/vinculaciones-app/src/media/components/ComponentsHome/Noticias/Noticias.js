import {Container,Row,Col} from 'react-bootstrap';

import Card from './Card'




function noticias() {
        
    
        
        const noticia1={imagen:'https://directivosygerentes.es/wp-content/uploads/2022/04/4-sesgos-dificultan-cambio-empresas-daniela-de-sousa.jpg',titulo:'Titulo 1',texto:'Texto referido a la noticia numero 1 del home page'};
        const noticia2={imagen:'https://directivosygerentes.es/wp-content/uploads/2022/04/4-sesgos-dificultan-cambio-empresas-daniela-de-sousa.jpg' ,titulo:'Titulo 2' ,texto:'Texto referido a la noticia numero 2 del home page' };
        const noticia3={imagen:'https://directivosygerentes.es/wp-content/uploads/2022/04/4-sesgos-dificultan-cambio-empresas-daniela-de-sousa.jpg' ,titulo:'Titulo 3' ,texto:'Texto referido a la noticia numero 3 del home page' };
        const noticia4={imagen:'https://directivosygerentes.es/wp-content/uploads/2022/04/4-sesgos-dificultan-cambio-empresas-daniela-de-sousa.jpg' ,titulo:'Titulo 4' ,texto:'Texto referido a la noticia numero 4 del home page' };

        
  return (


    <Container  className=" "  >
        
        <h4 className="ms-4 mt-5 pt-5"  >Noticias</h4>
        
        <Row className=" mb-5  d-flex  justify-content-center ">
     
            <Col className=" mt-3 mb-2  d-flex justify-content-center" xs     >
                    
                    <Card info={noticia1}></Card>
            
            </Col>

            <Col className="mt-3 mb-2 d-flex justify-content-center   " xs    >
                    
                    <Card  info={noticia2}></Card>
            
            </Col>

            <Col className="mt-3 mb-2 d-flex justify-content-center " xs    >
                    
                    <Card  info={noticia3}></Card>
            
            </Col>
             <Col className="mt-3 mb-2 d-flex justify-content-center " xs    >
                    
                    <Card   info={noticia4}></Card>
            
            </Col>
        </Row>
    </Container>



  );
}

export default noticias;