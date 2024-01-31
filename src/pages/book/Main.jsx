import React, { useState } from "react";
import book from "./book";
import Modals from "./modal/Modal";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { chooseBarber } from "../../features/barber.jsx";

const Main = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleChooseBarber = (barberId) => {
    dispatch(chooseBarber(barberId));
    setShow(true);
  };
  return (
    <div>
      <div class="d-sm-flex flex-column container-sm mt-5 mb-5">
        <div class="">
          <h1 class="display-6 fw-medium">
            Book Your Appointment – Unleash Your Style!
          </h1>
          <p class="lead mt-3">
            Ready to elevate your grooming game? Booking an appointment at
            Paesano Barber Shop is a breeze. Simply select a date and time that
            suits you best, and let our master barbers work their magic.
          </p>
        </div>
        {book.map((barber) => (
          <>
            <div class="my-3" key={barber.id}>
              <div class="card">
                <img src="img/img3.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{barber.barber}</h5>
                  <p class="card-text lead-sm">{barber.details}</p>
                  <Button
                    variant="primary"
                    onClick={() => {
                      setShow(false);
                      handleChooseBarber(barber.id);
                    }}
                  >
                    {barber.barberNumber}
                  </Button>
                </div>
              </div>
            </div>
            <Modals
              show={show}
              onHide={() => setShow(false)}
              backdrop="static"
              keyboard={false}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default Main;
