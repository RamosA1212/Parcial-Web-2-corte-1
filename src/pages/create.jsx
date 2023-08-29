import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import NavBar from '../components/navbar';
import Footer from '../components/footer';


function Create() {

    const navigate = useNavigate();

    function handleFormSubmit(event) {
        event.preventDefault();
        
        let imagen = event.target.imagen.value;
        let titulo = event.target.titulo.value;
        let descripcion = event.target.descripcion.value;
        let categoria = event.target.categoria.value;
        let equipo = event.target.equipo.value;
        let paginaWebEquipo = event.target.equipo_url.value;
        
        
        let dataLocal = JSON.parse(localStorage.getItem("data-content-local"));


        const finalObject = {
            "id": dataLocal.length + 1,
            "image": imagen,
            "title": titulo,
            "desc": descripcion,
            "team": equipo,
            "team_url": paginaWebEquipo,
            "categoria": categoria
        };


        dataLocal.push(finalObject)
        
        const form = document.querySelector("form");
        form.reset();

        Swal.fire({
            title: '¡Se creo la tarjeta correctamente!',
            icon: 'success',
            confirmButtonText: 'Cool'
        })

        localStorage.setItem("data-content-local", JSON.stringify(dataLocal));

        navigate("/content");

        window.location.reload();
      }

    return (
        
        <div className='p-10 h-100 mb-10'>

            <NavBar/>
        

 
              <Row className='center m-10'>

               <Card className='bg-dark text-light m-5' style={{width: "50%"}}>
                <Form className='m-4 create-form' onSubmit={handleFormSubmit}>

                    <Form.Group className="mb-3">
                        <Form.Label>Imagen:</Form.Label>
                        <Form.Control type="text" placeholder="Ingresa la url de la imagen" name='imagen' required minLength={10} maxLength={200}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Titulo:</Form.Label>
                        <Form.Control type="text" placeholder="Ingresa el titulo" name='titulo' required minLength={3} maxLength={20}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Descripción:</Form.Label>
                        <Form.Control name='descripcion' as="textarea" rows={3} required minLength={50} maxLength={200}/>
                    </Form.Group>
                    
                    <Form.Group className="mb-3">
                        <Form.Label>Categoría:</Form.Label>
                        <Form.Select required name='categoria' className='bg-dark text-light'    aria-label="Default select example">
                            <option value="Motor">Motor</option>
                            <option value="Mesa">Mesa</option>
                            <option value="Equipo">Equipo</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Equipo:</Form.Label>
                        <Form.Control name='equipo' type="text" placeholder="Ingresa el nombre del equipo" required minLength={3} maxLength={15}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Pagina web del equipo:</Form.Label>
                        <Form.Control name='equipo_url' type="text" placeholder="Ingresa la pagina web del equipo" required minLength={10} maxLength={50}/>
                    </Form.Group>


                    <Button variant="success" type="submit">
                        Crear tarjeta
                    </Button>

                </Form>


            </Card>
            </Row>
        
    
            <Footer/>
    </div>

     

     );
  }
  
  export default Create;