import Card from 'react-bootstrap/Card'
import { Carousel, Container } from 'react-bootstrap'
import classes from './Other.module.css'
import { Am, Amre, Car360, Carcon, Fm, Og, Yg } from '../assets/Images'


const Other = () => {
  return (
    <>
      <Card
        className={classes.cardbody} bg="secondary" text="white" >
        <Card.Body>
          <Card.Title><b>Other</b></Card.Title>
          <Card.Text>
            Here you will find some of my other creative work.
          </Card.Text>
        </Card.Body>
      </Card>
      <Container className={classes.carouselcontainer}>
        <Carousel>
          <Carousel.Item>
            <a href="https://rafaelbarreramusic.bandcamp.com/album/amser">
              <img
                className={classes.carouselimage}
                src={Am}
                alt="First slide"
              />
              <Carousel.Caption>
                <h5>Amser</h5>
                <p>Recorded and engineered in The Atrium Studios, United Kingdom by Adrian Strozzi</p>
              </Carousel.Caption>
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="https://www.contratiempojazz.net/noticias/resena-amser-de-rafael-barrera/">
              <img
                className={classes.carouselimage}
                src={Amre}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h5>Amser Review</h5>
                <p>Amser Review by Contratiempo Jazz</p>
              </Carousel.Caption>
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="https://www.youtube.com/playlist?list=PL_KN5mycy-9m_lnAcUOHMPaeSqT3a0DBW">
              <img
                className={classes.carouselimage}
                src={Car360}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h5>Cardiff 360 with Spatial Audio</h5>
                <p>Produced by Adrian Strozzi</p>
              </Carousel.Caption>
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="https://honconsul.tumblr.com/post/169273651014/supporting-mexican-students-who-are-furthering">
              <img
                className={classes.carouselimage}
                src={Carcon}
                alt="Fourth slide"
              />
              <Carousel.Caption>
                <h5>Honorary Consul For Mexico in Wales</h5>
                <p>Mention from Honorary Consul Glynn Pegler</p>
              </Carousel.Caption>
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="https://rafaelbarreramusic.bandcamp.com/track/forward-motion">
              <img
                className={classes.carouselimage}
                src={Fm}
                alt="Fifth slide"
              />
              <Carousel.Caption>
                <h5>Forward Motion Single by Rafael Barrera</h5>
                <p>Recorded and Engineered in The Atrium Studios, United Kingdom by Adrian Strozzi</p>
              </Carousel.Caption>
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="https://jobyband.bandcamp.com/track/overgrown">
              <img
                className={classes.carouselimage}
                src={Og}
                alt="sixth slide"
              />
              <Carousel.Caption>
                <h5>Overgrown Single by Cardiff Band "Joby"</h5>
                <p>Recorded and Engineered in The Atrium Studios, United Kingdom by Adrian Strozzi</p>
              </Carousel.Caption>
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="https://www.youtube.com/watch?v=W1BDCbvqQw0">
              <img
                className={classes.carouselimage}
                src={Yg}
                alt="Seventh slide"
              />
              <Carousel.Caption>
                <h5>Young Revolt</h5>
                <p>Music and lyrics by Adrian Strozzi</p>
              </Carousel.Caption>
            </a>
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