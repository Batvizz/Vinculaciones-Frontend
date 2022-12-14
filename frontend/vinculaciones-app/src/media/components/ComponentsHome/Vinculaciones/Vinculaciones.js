import {Row,Col} from 'react-bootstrap';
import VinculacionesCard from '../Vinculaciones/VinculacionesCard'
import './vinculaciones.css';

function vinculaciones() {
  
        const vinculacion1={ruta:'assets/svgs/vinculaciones-1.svg', link:'ObservatorioPage'};
        const vinculacion2={ruta:'assets/svgs/vinculaciones-2.svg',link:'/RevistaDigitalPage'};
        const vinculacion3={ruta:'assets/svgs/vinculaciones-3.svg', link:''};

        return (
        <section className='container d-flex align-items-center flex-column my-5' >
                <h2 className="text-center encabezado-1 my-5" >Vinculaciones</h2>
                <Row className="d-flex justify-content-center align-items-center">
                        <Col className="d-flex justify-content-center">
                                <VinculacionesCard data={vinculacion1}></VinculacionesCard>
                        </Col>
                        <Col className="d-flex justify-content-center" >
                                <VinculacionesCard data={vinculacion2}></VinculacionesCard>
                        </Col>
                        <Col className="d-flex justify-content-center" >
                                <VinculacionesCard data={vinculacion3}></VinculacionesCard>
                        </Col>
                </Row>
        </section>
  );
}

export default vinculaciones;