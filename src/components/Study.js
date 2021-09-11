import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { ListGroup } from 'react-bootstrap'

const Study = () => {
  return (
    <Card style={{ margin: 'auto', marginTop: '20px', width: '400px' }} bg="light" border="light" text="black" className="text-center">
      <Card.Body>
        <Card.Title>Studies</Card.Title>
        <Card.Text>
          <ListGroup>
            <ListGroup.Item action variant="dark">BEDU</ListGroup.Item>
            <ListGroup.Item action variant="dark">University of South Wales</ListGroup.Item>
            <ListGroup.Item action variant="dark">ITESO</ListGroup.Item>
          </ListGroup>
        </Card.Text>
        <Button href="/" variant="primary">Home</Button>
      </Card.Body>
    </Card>
  )
}

export default Study;