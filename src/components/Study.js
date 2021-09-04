import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Study = () => {
  return (
    <Card style={{ width: '18rem' }} bg="light" text='dark'>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Study</Card.Title>
        <Card.Text>
          Text
        </Card.Text>
        <Button variant="primary">Home</Button>
      </Card.Body>
    </Card>
  )
}

export default Study;