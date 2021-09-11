import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'
import { Carousel, Container } from 'react-bootstrap'


const Other = () => {
  return (
    <Container>
      <Card style={{ margin: 'auto', marginTop: '20px', width: '400px' }} bg="light" border="light" text="black" className="text-center">
        <Card.Body>
          <Card.Title>Other</Card.Title>
          <Card.Text>
            Here you will find some of my other work mainly music production!
          </Card.Text>
          {/* <Button href="/" variant="primary">Home</Button> */}
        </Card.Body>
      </Card>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}

export default Other;

// Resena
// https://www.contratiempojazz.net/noticias/resena-amser-de-rafael-barrera/
// Spatial Cardiff
// https://www.youtube.com/playlist?list=PL_KN5mycy-9m_lnAcUOHMPaeSqT3a0DBW
// Young Revolt
// https://www.youtube.com/watch?v=W1BDCbvqQw0
// Joby
// https://jobyband.bandcamp.com/track/overgrown
// Forward Motion
// https://rafaelbarreramusic.bandcamp.com/track/forward-motion
// Amser
// https://rafaelbarreramusic.bandcamp.com/album/amser
// Consul
// https://honconsul.tumblr.com/post/169273651014/supporting-mexican-students-who-are-furthering