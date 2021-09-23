import Card from 'react-bootstrap/Card'
import { Carousel, Container } from 'react-bootstrap'
import classes from './Other.module.css'

import am from '../assets/Amser.png'
import amre from '../assets/AmserReview.png'
import car360 from '../assets/Cardiff360.png'
import carcon from '../assets/CardiffConsul.png'
import fm from '../assets/ForwardMotion.png'
import og from '../assets/Overgrown.png'
import yg from '../assets/Youngrevolt.png'

const Other = () => {
  return (
    <>
      <Card
        bg="secondary" text="white" className={classes.cardbody}>
        <Card.Body>
          <Card.Title><b>Other</b></Card.Title>
          <Card.Text>
            Here you will find some of my other creative work.
          </Card.Text>
        </Card.Body>
      </Card>
      <Container className={classes.carouselcontainer}>
        <Carousel className={classes.carouselbody}>
          <Carousel.Item>
            <img
              className={classes.carouselimage}
              src={am}
              alt="First slide"
            />
            <Carousel.Caption className={classes.carouselcaption}>
              <h5>Amser</h5>
              <p>Recorded and engineered in The Atrium Studios, United Kingdom by Adrian Strozzi</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={classes.carouselimage}
              src={amre}
              alt="Second slide"
              href="https://rafaelbarreramusic.bandcamp.com/album/amser"
            />
            <Carousel.Caption>
              <h5>Amser Review</h5>
              <p>Amser Review by Contratiempo Jazz</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={classes.carouselimage}
              src={car360}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Cardiff 360 with Spatial Audio</h5>
              <p>Produced by Adrian Strozzi</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={classes.carouselimage}
              src={carcon}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Honorary Consul For Mexico in Wales</h5>
              <p>Mention from Honorary Consul Glynn Pegler</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={classes.carouselimage}
              src={fm}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Forward Motion Single by Rafael Barrera</h5>
              <p>Recorded and engineered in The Atrium Studios, United Kingdom by Adrian Strozzi</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={classes.carouselimage}
              src={og}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Overgrown Single by Cardiff Band "Joby"</h5>
              <p>Recorded and engineered in The Atrium Studios, United Kingdom by Adrian Strozzi</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={classes.carouselimage}
              src={yg}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Young Revolt</h5>
              <p>Band single. Music and lyrics by Adrian Strozzi.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  )
}

export default Other;



// style={{
//   margin: 'auto',
//   marginTop: '20px',
//   marginBottom: '20px',
//   width: '400px',
//   borderRadius: '10px'
// }}

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