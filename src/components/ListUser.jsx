import React, { useEffect, useState } from "react";
import UserService from "../Services/UserService";

function ListUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    UserService.getUsers().then((res) => {
      setUsers(res.data);
    });
  }, []);
  return (
    <div className="container text-center">
      <h2 className="text-center">User List</h2>
      <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Mobile Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.mobile_number}</td>
                <td><button className="btn btn-success">Update</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListUser;
