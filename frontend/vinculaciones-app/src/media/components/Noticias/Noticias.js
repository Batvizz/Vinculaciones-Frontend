import {Container,Row,Col} from 'react-bootstrap';

import Card from './Card'



function noticias() {
  return (


    <Container  className=" "  >
        
        <h4 className="ms-4 mt-5 pt-5"  >Noticias</h4>
        
        <Row className=" mb-5  d-flex  justify-content-center ">
     
            <Col className=" mt-3 mb-2  d-flex justify-content-center" xs     >
                    
                    <Card></Card>
            
            </Col>

            <Col className="mt-3 mb-2 d-flex justify-content-center   " xs    >
                    
                    <Card></Card>
            
            </Col>

            <Col className="mt-3 mb-2 d-flex justify-content-center " xs    >
                    
                    <Card></Card>
            
            </Col>
             <Col className="mt-3 mb-2 d-flex justify-content-center " xs    >
                    
                    <Card></Card>
            
            </Col>
        </Row>
    </Container>



  );
}

export default noticias;