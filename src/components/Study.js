import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { ListGroup } from 'react-bootstrap'
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import classes from './Work.module.css'

const Study = () => {

  const [showBEDU, setShowBEDU] = useState(false);
  const [showUSW, setShowUSW] = useState(false);
  const [showITESO, setShowITESO] = useState(false);

  return (
    <>
      <Card bg="light" border="light" className={classes.cardbody}>
        <Card.Header><b>Studies</b></Card.Header>
        <Card.Body>
          <Card.Text>
            <ListGroup>
              <ListGroup.Item action variant="secondary" onClick={() => setShowBEDU(true)}>BEDU</ListGroup.Item>
              <ListGroup.Item action variant="secondary" onClick={() => setShowUSW(true)}>University of South Wales</ListGroup.Item>
              <ListGroup.Item action variant="secondary" onClick={() => setShowITESO(true)}>ITESO</ListGroup.Item>
            </ListGroup>
          </Card.Text>
          <Button href="/" variant="primary">Home</Button>
        </Card.Body>
      </Card>
      <Modal show={showBEDU} onHide={() => setShowBEDU(false)} centered={true} >
        <Modal.Header>
          <div className={classes.modaltitle}>
            <h4>BEDU</h4>
          </div>
        </Modal.Header>
        <Modal.Body className="text-center"><p><b>FullStack Javascript</b> <p></p>
          <p>Fullstack Javascript Bootcamp with final major project based on a school platform for submitting homeworks and posting activities.</p></p></Modal.Body>
        <Modal.Footer>
          <Button variant="danger" size="sm" onClick={() => setShowBEDU(false)} style={{ margin: 'auto' }}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showUSW} onHide={() => setShowUSW(false)} centered={true} >
        <Modal.Header>
          <div className={classes.modaltitle}>
            <h4>University of South Wales</h4>
          </div>
        </Modal.Header>
        <Modal.Body className="text-center"><p><b>MSc Music Engineering & Production</b> <p></p>
          <p>Poduction of an Album and Single. VR 360 Video and Spatial Audio Research</p></p></Modal.Body>
        <Modal.Footer>
          <Button variant="danger" size="sm" onClick={() => setShowUSW(false)} style={{ margin: 'auto' }}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showITESO} onHide={() => setShowITESO(false)} centered={true} >
        <Modal.Header>
          <div className={classes.modaltitle}>
            <h4>ITESO</h4>
          </div>
        </Modal.Header>
        <Modal.Body className="text-center"><p><b>Communication Sciences Bachelor</b> <p></p>
          <p>Media and political communication research</p></p></Modal.Body>
        <Modal.Footer>
          <Button variant="danger" size="sm" onClick={() => setShowITESO(false)} style={{ margin: 'auto' }}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Study;