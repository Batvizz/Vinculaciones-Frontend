import {Container,Row,Col} from 'react-bootstrap';

import VinculacionesCard from '../Vinculaciones/VinculacionesCard'



function vinculaciones() {
  return (


    <Container  className=" "  >
        
        <h2 className="mt-5 pt-5  text-center" >Vinculaciones</h2>
       
        <Row className=" d-flex justify-content-center"  >

               
                 <h5 className="mt-3 d-flex justify-content-center text-center ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus ligula purus, </h5>
                <h5 className="d-flex justify-content-center text-center " >cursus imperdiet ipsum sodales eget. Vivamus ut lacus justo. Cras non ante nisl.</h5>
            
            <Col className="mt-4  d-flex justify-content-center"  >
                    
                    <VinculacionesCard></VinculacionesCard>
                        
            </Col>

            <Col className="mt-4  d-flex justify-content-center" >
                    
                    <VinculacionesCard></VinculacionesCard>
            
            </Col>

            <Col className="mt-4   d-flex justify-content-center" >
                    
                    <VinculacionesCard></VinculacionesCard>
            
            </Col>
        </Row>
    </Container>



  );
}

export default vinculaciones;