import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Work = () => {
  return (
    <Card style={{ width: '18rem' }} bg="dark" text='light'>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Work</Card.Title>
        <Card.Text>
          Hola soy Dana
        </Card.Text>
        <Button variant="primary">Study</Button>
      </Card.Body>
    </Card>
  )
}

export default Work;