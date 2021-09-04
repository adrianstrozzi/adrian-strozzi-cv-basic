import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Home = () => {
  return (
    <Card style={{ width: '18rem' }} bg="dark" text='white'>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Home</Card.Title>
        <Card.Text>
          Text
        </Card.Text>
        <Button variant="primary">Study</Button>
        <Button variant="primary">Work</Button>
      </Card.Body>
    </Card>
  )
}

export default Home;