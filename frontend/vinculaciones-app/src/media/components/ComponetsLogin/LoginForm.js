import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Link} from  'react-router-dom';
import * as Yup from 'yup';
import { Formik} from 'formik';
import '../../styles/form.css';







function loginForm() {

     const schema = Yup.object().shape({

           email:Yup.string().email('Email no valido').required('Required').trim(''),
           password: Yup.string()
            .required('se requiere una contrase;a.') 
            .min(8, 'contrase;a no valida - minimo 8 caracteres.'),
          
          });

  return(
          <Formik    
              validationSchema={schema}
                  initialValues={{
                      email:'',
                      password:'',
                      
                  } }
                  onSubmit={values => {alert(JSON.stringify(values, null, 2));}}
                  >    
          
                  {({handleChange, handleSubmit,  values ,touched , errors}) => (
                    <Form onSubmit={handleSubmit} className="form">
                        <h1 className='encabezado-3 title'>Iniciar Sesión</h1>
                        <Form.Group className="mb-3" controlId="correologin1" >
                            <Form.Label className="encabezado-4 label">Correo Electrónico:</Form.Label>
                            <p className="text-5 label-secundary">Debe ser de formato unsl.edu.ar o email.unsl.edu.ar</p>
                            <Form.Control 
                                  name='email' 
                                  type="text" 
                                  placeholder=""  
                                  value={values.email}
                                  onChange={handleChange}
                                  isValid={touched.email && !errors.email}
                                  isInvalid={!!errors.email}
                                  />

                                <Form.Control.Feedback type='invalid'>
                                   {errors.email && <p>el formato email no es correcto</p>}
                                </Form.Control.Feedback>
                            
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="contraseñalogin1" >
                            <Form.Label className="encabezado-4 label">Contraseña:</Form.Label>
                            <p className="text-5 label-secundary">Debe ser de mínimo de 8 caracteres</p>
                            <Form.Control 
                                  name='password' 
                                  type="password" 
                                  placeholder=""  
                                  value={values.password}
                                  onChange={handleChange}
                                  isValid={touched.password && !errors.password}
                                  isInvalid={!!errors.password}
                                  />

                                <Form.Control.Feedback type='invalid'>
                                   {errors.password }
                                </Form.Control.Feedback>
                            <Link to="/SingUpPage" className="text-4 link" >¿No tienes una cuenta? Registrarse</Link>
                        </Form.Group>
                        <Button className="btn btn-form"onClick={handleSubmit}>Ingresar</Button>
                        <Link to="/SingUpPage" className="text-4 link" >Olvidé mi contraseña</Link>
                    </Form>
                  )}
            </Formik>   
              
           
    )
}

export default loginForm;