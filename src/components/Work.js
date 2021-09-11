import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { ListGroup } from 'react-bootstrap'

const Work = () => {
  return (
    <Card style={{ margin: 'auto', marginTop: '20px', width: '400px' }} bg="light" border="light" text="black" className="text-center">
      <Card.Body>
        <Card.Title>Work Experience</Card.Title>
        <Card.Text>
          <ListGroup>
            <ListGroup.Item action variant="dark">HP</ListGroup.Item>
            <ListGroup.Item action variant="dark">HP Enterprise</ListGroup.Item>
            <ListGroup.Item action variant="dark">IBM</ListGroup.Item>
          </ListGroup>
        </Card.Text>
        <Button href="/" variant="primary">Home</Button>
      </Card.Body>
    </Card>
  )
}

export default Work;