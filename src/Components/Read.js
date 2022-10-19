import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Read = () => {
  const [incomingData, setIncomingData] = useState([]);

  const setData = (data) => {
    let { id, firstName, lastName, checkBox } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("Check Box", checkBox);
    console.log(data);
  };
  const fakeAPIcall = async () => {
    await axios
      .get("https://61b3b46eaf5ff70017ca2059.mockapi.io/users")
      .then((response) => setIncomingData(response.data))
      .catch((err) => console.log(err));
  };
  const getData = async () => {
    await axios
      .get("https://61b3b46eaf5ff70017ca2059.mockapi.io/users")
      .then((getData) => {
        setIncomingData(getData.data);
      });
  };
  const onDelete = async (id) => {
    await axios
      .delete("https://61b3b46eaf5ff70017ca2059.mockapi.io/users/" + id)
      .then(() => {
        getData();
      });
  };

  useEffect(() => {
    fakeAPIcall();
  }, []);
  return (
    <div className="read" style={{ height: "100%" }}>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Checked</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
            <Table.HeaderCell>Create</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {incomingData.map((data, key) => {
            return (
              <Table.Row key={key}>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                <Table.Cell>
                  {data.checkBox ? (
                    <img
                      src="https://cdn-icons.flaticon.com/png/512/232/premium/232444.png?token=exp=1639421060~hmac=4fc014ca64d5fbfaae8279c11fa8ca21"
                      alt="checked"
                      height={"30px"}
                    />
                  ) : (
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/232/232443.png"
                      alt="unchecked"
                      height={"30px"}
                    />
                  )}
                </Table.Cell>

                <Link to="/update">
                  <Table.Cell>
                    <Button onClick={() => setData(data)}>Update</Button>
                  </Table.Cell>
                </Link>
                <Table.Cell>
                  <Button onClick={() => onDelete(data.id)}>Delete</Button>
                </Table.Cell>
                <Link to="/create">
                  <Table.Cell>
                    <Button>Create</Button>
                  </Table.Cell>
                </Link>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Read;
