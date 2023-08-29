import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import NavBar from '../components/navbar';
import Footer from '../components/footer';


var data = JSON.parse(localStorage.getItem("data-content-local"));

function Content() {

    const [filtro, setFiltro] = useState("")

    const handleFiltroChange = event => {
        const selectedValue = event.target.value;
        setFiltro(selectedValue); // Actualizar el estado con el valor seleccionado
    };
    
    return (

        <div className='p-10 h-100 mb-10'>

        <NavBar/>
        
        <Row>
            <Col className="center m-3">
                <Form.Select className='bg-dark text-light' style={{width: "20rem"}} aria-label="Default select example"
                 onChange={handleFiltroChange}
                >
                    <option value="">Todas</option>
                    <option value="Motor">Motor</option>
                    <option value="Mesa">Mesa</option>
                    <option value="Equipo">Equipo</option>
                </Form.Select>
            </Col>
        </Row>

      
        {data == null &&
            <h5>Se presento un problema al cargar la data por favor recargué la pagina</h5>
        }

        {data != null &&
              <Row className='center'>
                {data.map(obj => (
                    filtro === '' || obj.categoria === filtro ? (
                    <Col key={obj.id} className="center m-2"  md={3}>
                        <Card className='bg-dark text-light' style={{ width: '18rem', textOverflow: "ellipsis" }}>
                            <Card.Img style={{ maxWidth: '100&', height: '10rem' }} variant="top" src={obj.image} />
                            <Card.Body className='center flex-column'>
                                <Card.Title>{obj.title}</Card.Title>
                                <Card.Text className='text-center'> {obj.desc} </Card.Text>

                                <Card.Text className='text-center'>Categoría: {obj.categoria} </Card.Text>
    
                    
                                <Card.Link href={obj.team_url} target='_blank'>{obj.team}</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>) : null
                ))}
            </Row>
        }
    

    <Footer/>

    </div>

     );
  }
  
  export default Content;