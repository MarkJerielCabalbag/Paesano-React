import React from "react";
import book from "./book/book";
const Book = () => {
  return (
    <>
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
        {book.map((barbers) => (
          <div
            class="container-sm row row-cols-sm-2 row-cols-md-4 justify-content-sm-center justify-content-center gap-2"
            key={barbers.id}
          >
            <div class="card">
              <img src="img/img3.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  <i class="fa-regular fa-user"></i> {barbers.barber}
                </h5>
                <p class="card-text lead-sm">{barbers.details}</p>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#barber1"
                  id="originalButtonArwen"
                  data-barber="Arwen"
                >
                  Barber 1
                </button>
                <div id="buttonGroupArwen" class="gap-3">
                  <button type="button" class="btn btn-success" id="editButton">
                    <i class="fa-regular fa-pen-to-square"></i> Edit
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger"
                    id="cancelButton"
                  >
                    <i class="fa-solid fa-xmark"></i> Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div class="container-sm mt-5">
          <h1 class="display-6 mb-3 fw-medium">
            Raving Reviews: Satisfied Clients Share Their Paesano Barber Shop
            Experience
          </h1>
          <div class="d-sm-flex flex-sm-column flex-md-row">
            <div class="card m-2">
              <div class="card-body">
                <div class="d-flex">
                  <img
                    src="img/paesano_logo.jpg"
                    class="customer"
                    alt=""
                    srcset=""
                  />
                  <div class="px-2">
                    <h5 class="card-title">Manilyn Lopez Rivarez</h5>
                    <p class="card-subtitle">
                      <i class="fa-regular fa-thumbs-up fa-bounce"></i>{" "}
                      Satisfied Customer
                    </p>
                  </div>
                </div>
                <div>
                  <p class="lead mt-3">
                    Highly recommended👍 Customer service oriented and will
                    surely get what you pay for.😊 Great job Paesano!😊
                  </p>
                </div>
              </div>
            </div>
            <div class="card m-2">
              <div class="card-body">
                <div class="d-flex">
                  <img
                    src="img/paesano_logo.jpg"
                    class="customer"
                    alt=""
                    srcset=""
                  />
                  <div class="px-2">
                    <h5 class="card-title">Divo Galace Valois</h5>
                    <p class="card-subtitle">
                      <i class="fa-regular fa-thumbs-up fa-bounce"></i>{" "}
                      Satisfied Customer
                    </p>
                  </div>
                </div>
                <div>
                  <p class="lead mt-3">
                    Commendable service. For those lads out there who want
                    trendy hairstyle, you better visit this one. Two thumbs-up.
                  </p>
                </div>
              </div>
            </div>
            <div class="card m-2">
              <div class="card-body">
                <div class="d-flex">
                  <img
                    src="img/paesano_logo.jpg"
                    class="customer"
                    alt=""
                    srcset=""
                  />
                  <div class="px-2">
                    <h5 class="card-title"> Mark Jeriel Cabalbag</h5>
                    <p class="card-subtitle">
                      <i class="fa-regular fa-thumbs-up fa-bounce"></i>{" "}
                      Satisfied Customer
                    </p>
                  </div>
                </div>
                <div>
                  <p class="lead mt-3">
                    Highly recommended👍 Customer service oriented and will
                    surely get what you pay for.😊 Great job Paesano!😊
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
