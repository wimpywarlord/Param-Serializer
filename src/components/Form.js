import "../App.css";
import { Form } from "react-bootstrap";
import { FloatingLabel } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import { useState } from "react";

function InputForm() {
  const [inputJsonObject, setJsonObject] = useState("");
  const [showOutputModal, setOutputModal] = useState(false);
  const [serializedOutput, setSerializedOutput] = useState("");
  const handleChange = (e) => setJsonObject(e.target.value);
    const showOutput = () => {
      console.log(JSON.parse(JSON.stringify(inputJsonObject)));
      console.log(typeof JSON.parse(JSON.stringify(inputJsonObject)));
      console.log(
        new URLSearchParams(JSON.parse(JSON.stringify(inputJsonObject)))
        );
      console.log(new URLSearchParams(
      JSON.parse(JSON.stringify(inputJsonObject))
    ).toString());
        
    setOutputModal(true);
    const tempSerializedParams = new URLSearchParams(
      JSON.parse(JSON.stringify(inputJsonObject))
    ).toString();
    setSerializedOutput(tempSerializedParams);
  };
  return (
    <div className="Form">
      <Row>
        <Row className="m-0 p-0">
          <FloatingLabel className="p-0" controlId="floatingTextarea">
            Enter Json Object
          </FloatingLabel>
        </Row>
        <Row>
          <Form.Control
            onChange={handleChange}
            value={inputJsonObject}
            as="textarea"
            className="mb-4"
            placeholder="Leave a comment here"
          />
          <Button variant="primary" onClick={showOutput}>
            Submit
          </Button>
        </Row>
        {showOutputModal ? (
          <Row className="mt-4">
            <Form.Control
              value={serializedOutput}
              as="textarea"
              className="mb-2"
              placeholder="Leave a comment here"
            />
          </Row>
        ) : null}
      </Row>
    </div>
  );
}

export default InputForm;
