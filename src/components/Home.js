import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'
import profile from '../assets/images/profile.jpg'
import { Image } from 'react-bootstrap'
import classes from './Home.module.css'

const Home = () => {
  return (
    <Card bg="secondary" text="white" className={classes.cardbody}>
      {/* // <Card className={classes.cardbody}> */}
      {/* <Image style={{ padding: '10px', margin: 'auto', width: '150px', height: '150px', objectFit: 'cover' }} src={profile} alt="Card Image" roundedCircle /> */}
      <Image className={classes.cardimage} src={profile} alt="Card Image" roundedCircle />
      {/* <Card.Img style={{}} variant="top" src={profile} alt="Card Image" roundedCircle /> */}
      < Card.Body >
        <Card.Title>About Me</Card.Title>
        <Card.Text>Welcome to my demo page. This is a simple CV page I did to practice basic React JS concepts.</Card.Text>
        <Card.Text>I started my journey as a web developer in 2019 and felt highly inclined towards FrontEnd
          development.</Card.Text>
        <Card.Text>I've always been passionate about the <b>UI/UX</b> in Apps
          and Webpages we use on a daily basis.</Card.Text>
        <Card.Text>I believe that high quality <b>UI/UX</b> can contribute to make our lives easier and bring joy while interacting with these tools.</Card.Text>
        {/* <Button className={classes.cardbutton} href="/work" variant="light">Work</Button>
        <Button className={classes.cardbutton} href="/study" variant="light">Study</Button>
        <Button className={classes.cardbutton} href="/other" variant="light">Other</Button> */}
      </Card.Body>
    </Card >
  )
}

export default Home;