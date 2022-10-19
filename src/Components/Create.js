import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkBox, setCheckBox] = useState(false);

  const navigate = useNavigate();
  const postData = async () => {
    await axios
      .post("https://61b3b46eaf5ff70017ca2059.mockapi.io/users", {
        firstName,
        lastName,
        checkBox,
      })
      .then(() => {
        navigate("/read");
      });
    console.log(checkBox);
  };

  const handleOnChangeName = (e) => {
    setFirstName(e.target.value);
  };
  const handleOnChangeLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleOnChangeCheckBox = (e) => {
    setCheckBox(e.target.value);
  };
  return (
    <div>
      <h4> ~ Fill blanks and create your form ~</h4>
      <Form className="create-form">
        <Form.Field>
          <label>First Name </label>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={firstName}
            onChange={handleOnChangeName}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            name="lastName"
            value={lastName}
            onChange={handleOnChangeLastName}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="I agree to the Terms and Conditions"
            name="checkBox"
            onChange={handleOnChangeCheckBox}
          />
        </Form.Field>
        <Button type="submit" onClick={postData}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Create;
