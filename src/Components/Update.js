import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Update = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkBox, setCheckBox] = useState(false);
  const [id, setID] = useState(null);
  const navigate = useNavigate();
  // const postData = async () => {
  //   await axios.post("https://61b3b46eaf5ff70017ca2059.mockapi.io/users", {
  //     firstName,
  //     lastName,
  //     checkBox,
  //   });
  // };

  const handleOnChangeName = (e) => {
    setFirstName(e.target.value);
  };
  const handleOnChangeLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleOnChangeCheckBox = (e) => {
    e.preventDefault();
    setCheckBox(!checkBox);
  };
  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setFirstName(localStorage.getItem("First Name"));
    setLastName(localStorage.getItem("Last Name"));
    setCheckBox(localStorage.getItem("Check Box"));
    console.log(setCheckBox(localStorage.getItem("Check Box")));
  }, []);

  const updateAPIData = async () => {
    await axios
      .put("https://61b3b46eaf5ff70017ca2059.mockapi.io/users/" + id, {
        firstName,
        lastName,
        checkBox,
      })
      .then(() => {
        navigate("/read");
      });
    console.log(checkBox);
  };
  return (
    <div>
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
          {checkBox === "true" ? (
            <Checkbox
              label="I agree to the Terms and Conditions"
              name="checkBox"
              checked={checkBox}
              onChange={handleOnChangeCheckBox}
            />
          ) : (
            <Checkbox
              label="I agree to the Terms and Conditions"
              name="checkBox"
              checked={!checkBox}
              onChange={handleOnChangeCheckBox}
            />
          )}
        </Form.Field>
        <Button type="submit" onClick={updateAPIData}>
          Update
        </Button>
      </Form>
    </div>
  );
};

export default Update;
// {
//   checkBox === "true" ? (
//     <Checkbox
//       label="I agree to the Terms and Conditions"
//       checked={true}
//       onChange={handleOnChangeCheckBox}
//     />
//   ) : (
//     <Checkbox
//       label="I agree to the Terms and Conditions"
//       checked={false}
//       onChange={handleOnChangeCheckBox}
//     />
//   );
// }

//  <Checkbox
//    label="I agree to the Terms and Conditions"
//    checked={checkBox === "true" ? checkBox : !checkBox}
//    onChange={handleOnChangeCheckBox}
//  />;
