import classes from './Work.module.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { ListGroup } from 'react-bootstrap'
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'

const Work = () => {
  const [showHP, setShowHP] = useState(false);
  const [showHPE, setShowHPE] = useState(false);
  const [showIBM, setShowIBM] = useState(false);

  return (
    <>
      <Card bg="light" border="light" className={classes.cardbody}>
        <Card.Header><b>Work Experience</b></Card.Header>
        <Card.Body>
          <Card.Text>
            <ListGroup>
              <ListGroup.Item action variant="secondary" onClick={() => setShowHP(true)}>Hewlett Packard Inc.</ListGroup.Item>
              <ListGroup.Item action variant="secondary" onClick={() => setShowHPE(true)}>Hewlett Packard Enterprise</ListGroup.Item>
              <ListGroup.Item action variant="secondary" onClick={() => setShowIBM(true)}>IBM</ListGroup.Item>
            </ListGroup>
          </Card.Text>
          <Button href="/" variant="primary">Home</Button>
        </Card.Body>
      </Card >
      <Modal show={showHP} onHide={() => setShowHP(false)} centered={true} >
        <Modal.Header>
          <div className={classes.modaltitle}>
            <h4>Hewlett Packard Inc.</h4>
          </div>
        </Modal.Header>
        <Modal.Body className="text-center"><p><b>Program Coordinator - Worlwide Commercial Notebooks</b> <p></p>
          <p>Bill Of Material Specialist for Sustaining and New Product Introductions</p></p></Modal.Body>
        <Modal.Footer>
          <Button variant="danger" size="sm" onClick={() => setShowHP(false)} style={{ margin: 'auto' }}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showHPE} onHide={() => setShowHPE(false)} centered={true} >
        <Modal.Header>
          <div className={classes.modaltitle}>
            <h4>HP Enterprise</h4>
          </div>
        </Modal.Header>
        <Modal.Body className="text-center"><p><b>Payroll - US Region</b> <p></p>
          <p>Payroll and Tax Analyst for US Region HPE employees</p></p></Modal.Body>
        <Modal.Footer>
          <Button variant="danger" size="sm" onClick={() => setShowHPE(false)} style={{ margin: 'auto' }}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showIBM} onHide={() => setShowIBM(false)} centered={true} >
        <Modal.Header>
          <div className={classes.modaltitle}>
            <h4>IBM</h4>
          </div>
        </Modal.Header>
        <Modal.Body className="text-center"><p><b>Accounts Receivable - US Region</b> <p></p>
          <p>Accounts Receivable Customer Service Representative for US Region.</p></p></Modal.Body>
        <Modal.Footer>
          <Button variant="danger" size="sm" onClick={() => setShowIBM(false)} style={{ margin: 'auto' }}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Work;