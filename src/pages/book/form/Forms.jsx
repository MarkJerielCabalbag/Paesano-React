import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Input from "../input/Input";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { addInformation, resetBarbers } from "../../../features/barber";
const Forms = () => {
  const [details, setDetails] = useState({
    name: "",
    date: "",
    time: "",
    services: "",
  });
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const showToastMessage = (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDetails({
      name: "",
      date: "",
      time: "",
      services: "",
    });
  };

  const handleClose = () => {
    dispatch(resetBarbers());
    show.onHide(true);
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        if (
          details.name == "" ||
          details.date == "" ||
          details.services == "" ||
          details.time == ""
        ) {
          showToastMessage("fill those fields");
          <ToastContainer />;
        } else {
          handleClose();
          dispatch(addInformation([...details]));
          console.log([...details]);
        }

        handleSubmit();
      }}
    >
      <Input
        label={"Your Name"}
        type={"text"}
        value={details.name}
        name="name"
        onChange={handleChange}
      />
      <Input
        label={"Check in Date"}
        type={"date"}
        value={details.date}
        name="date"
        onChange={handleChange}
      />
      <Input
        label={"Check in Time"}
        type={"time"}
        value={details.time}
        name="time"
        onChange={handleChange}
      />
      <Form.Label htmlFor="services">Choose services</Form.Label>
      <Form.Select
        aria-label="choose services"
        value={details.services}
        name="services"
        onChange={handleChange}
      >
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default Forms;
