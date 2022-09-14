import React from "react";
import Layout from "../component/Layout";
import Table from "react-bootstrap/Table";

const Home = () => {
  let users = localStorage.getItem("users");
  users = JSON.parse(users);
  let token = localStorage.getItem("token");
  token = JSON.parse(token);
  console.log(token[0].userName);

  return (
    <>
      <Layout />
      {token[0].userName === "admin" ? (
          <Table
            striped
            bordered
            hover
            variant="dark"
            style={{ marginTop: "20px" }}
          >
            <thead>
              <tr>
                <th>#</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Password</th>
              </tr>
            </thead>
            {users.list.map((elem, index) => {
              return (
                <tbody>
                  <tr>
                    <td>#</td>
                    <td>{elem.userName}</td>
                    <td>{elem.email}</td>
                    <td>{elem.password}</td>
                  </tr>
                </tbody>
              );
            })}
          </Table>
      
      ) : <h2>Welcome to Dashboard</h2>}
    </>
  );
};

export default Home;
