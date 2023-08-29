import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from "../components/navbar";
import Footer from "../components/footer";

function Home() {
    return (
        <>
        <NavBar/>

        <Container className="center" style={{height: "100vh"}}>

            <Row>

                <Col className="center m-2">
                    <Link to={`content`}>
                        <Card style={{ width: '18rem' }} className="bg-dark text-light center">
                            <Card.Body>
                                <Card.Title>CONTENT</Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>

                <Col className="center m-2">
                    <Link to={`overview`}>
                        <Card style={{ width: '18rem' }} className="bg-dark text-light d-flex justify-content-center align-items-center">
                            <Card.Body>
                                <Card.Title>OVERVIEW</Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>

                <Col className="center m-2">
                    <Link to={`create`}>
                        <Card style={{ width: '18rem' }} className="bg-dark text-light d-flex justify-content-center align-items-center">
                            <Card.Body>
                                <Card.Title>CREATE</Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>

            </Row>
          
        </Container>

        <Footer/>
        </>
     );
  }
  
  export default Home;
  