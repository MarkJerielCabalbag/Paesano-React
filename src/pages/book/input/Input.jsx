import Form from "react-bootstrap/Form";

function Input({ label, type, onChange, name, value }) {
  return (
    <>
      <Form.Label htmlFor="input">{label}</Form.Label>
      <Form.Control
        type={type}
        id="input"
        onChange={onChange}
        value={value}
        name={name}
      />
      <Form.Text id="passwordHelpBlock"></Form.Text>
    </>
  );
}

export default Input;
