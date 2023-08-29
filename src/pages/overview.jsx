import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import dataOverView from '../data/dataOverView.json'
import Button from 'react-bootstrap/Button';
import NavBar from '../components/navbar';
import Footer from '../components/footer';


function Overview() {

    let favorites = JSON.parse(localStorage.getItem("favorites")) ?? [];

    function saveToFavorites(id) {
        
        
        let favorites = JSON.parse(localStorage.getItem("favorites"));
     

        if(favorites == null){
            favorites = [];
        }

       
        if(favorites.includes(id)){
            
            favorites = favorites.filter(fav => fav !== id);
        }else{
            
            favorites.push(id);
        }


        
        localStorage.setItem("favorites", JSON.stringify(favorites));

        window.location.reload();
      }

    return (

        <div className='p-10 h-100 mb-10'>

            <NavBar/>

            <Row className='center'>
                {dataOverView.map(obj => (
                    <Col key={obj.id} className="center m-2"  md={3}>
                        <Card className='bg-dark text-light' style={{ width: '18rem' }}>
                            <Card.Img style={{ maxWidth: '100&', height: '10rem' }} variant="top" src={obj.image} />
                            <Card.Body className='center flex-column'>
                                <Card.Title>{obj.title}</Card.Title>
                                <Card.Text className='text-center'> {obj.desc} </Card.Text>


                                <Card.Link href={obj.team_url} target='_blank'>{obj.team}</Card.Link>
                                
                                {favorites.includes(obj.id) &&
                                    <Button onClick = {() => saveToFavorites(obj.id)} className='mt-3' variant="light">QUITAR DE MIS FAVORITOS</Button>
                                }

                                {!favorites.includes(obj.id) &&
                                      <Button onClick={() => saveToFavorites(obj.id)}  className='mt-3' variant="danger">AGREGAR A FAVORITOS</Button>
                                }
                             
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <Footer/>
        </div>

     );
  }
  
  export default Overview;