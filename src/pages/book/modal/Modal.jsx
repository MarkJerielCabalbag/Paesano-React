import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { useSelector, useDispatch } from "react-redux";
import { resetBarbers } from "../../../features/barber"; // Import the action
import Input from "../input/Input";
import Forms from "../form/Forms";

function Modals(props) {
  const dispatch = useDispatch();
  const barbers = useSelector((state) => state.book.value.barbers);

  const handleClose = () => {
    dispatch(resetBarbers());
    props.onHide();
  };

  return (
    <>
      {props.show &&
        barbers.map((barber) => (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            key={barber.id}
          >
            <Modal.Header>
              <Modal.Title id="contained-modal-title-vcenter">
                {barber.selectedBarber.barber}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Forms />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        ))}
    </>
  );
}

export default Modals;
