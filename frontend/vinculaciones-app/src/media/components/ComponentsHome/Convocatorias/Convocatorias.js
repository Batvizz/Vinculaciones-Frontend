import {Container,Row,Col} from 'react-bootstrap';

import ConvocatoriaCard from './ConvocatoriaCard'



function convocatoria() {
        const convocatoria1={ruta:'https://svts.unsl.edu.ar/img/Noticia%20pdts.svg'};
        const convocatoria2={ruta:'https://svts.unsl.edu.ar/img/Noticia%20emprende.svg'};
        const convocatoria3={ruta:'https://svts.unsl.edu.ar/img/Noticia%20unslXi.svg '};
  return (

    <Container  className=" "  >
        
       <h2 className="mt-5 pt-5  text-center" >Convocatorias</h2>
       
        <Row className=" d-flex justify-content-center"  >

               
                <h5 className="mt-3 d-flex justify-content-center text-center ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus ligula purus, </h5>
                <h5 className="d-flex justify-content-center text-center " >cursus imperdiet ipsum sodales eget. Vivamus ut lacus justo. Cras non ante nisl.</h5>
            
            <Col className="mt-4  d-flex justify-content-center"  >
                    
                    <ConvocatoriaCard info={convocatoria1}></ConvocatoriaCard>
                        
            </Col>

            <Col className="mt-4  d-flex justify-content-center" >
                    
                    <ConvocatoriaCard info={convocatoria2}></ConvocatoriaCard>
            
            </Col>

            <Col className="mt-4   d-flex justify-content-center" >
                    
                    <ConvocatoriaCard info={convocatoria3}></ConvocatoriaCard>
            
            </Col>
        </Row>
    </Container>



  );
}

export default convocatoria;