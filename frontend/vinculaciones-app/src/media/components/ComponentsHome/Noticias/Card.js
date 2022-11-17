
import {Card}from 'react-bootstrap';
import  './noticiascard.css' 


function card(props) {
  return (
    
      <Card  classname='card-noticias' >

        <Card.Img  className='img-noticias'  src={props.info.imagen}/>

          <Card.Body  className="">

            <Card.Title className=" text-2"><h6>{props.info.titulo}</h6></Card.Title>

            <Card.Text className="mt-4 text-center text-1 ">{props.info.texto}</Card.Text>
            
          </Card.Body>
          
      </Card>
  );
}

export default card;