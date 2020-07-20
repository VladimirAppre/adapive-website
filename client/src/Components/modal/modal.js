import React, {useState} from "react";
import {Button, Modal} from 'react-bootstrap';


function MyVerticallyCenteredModal(props) {
  const {title, text} = props;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-center" className='text-center'>
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{text}</p>
      </Modal.Body>

    </Modal>
  );
}

function ModalComponent({title, text, buttonValue}) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        {buttonValue}
      </Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={title}
        text={text}
      />
    </>
  );
}

export default ModalComponent;