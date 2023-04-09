import React, { useState }from "react";
import '../Styles/Bulma.css'
import '../Styles/CustomStyles.css'
import dataSource from "../datasource.js";
import { useEffect } from "react";

const ListUser = () => {
  //Log that we are entering the method
  window.logger._LTracker.push("Entered ListUser()");
  //List of users returned from the api
  const [userList, setUserList] = useState([]);
  //Set the refresh to false
  let refresh = false;

  //Method to get the users from the API
  const loadUsers = async () => {
    //Log that we are entering the method
    window.logger._LTracker.push("Entered ListUser.loadUsers()");
    //Calling the api and saving the response
    const response = await dataSource.get("/users");

    //Updating the list
    setUserList(response.data);
    //Log that we are leaving the method
    window.logger._LTracker.push("Leaving ListUser.loadUsers()");
  };

  //Function to load users from the database when the page is accessed
  useEffect(() => {
    //Log that we are entering the method
    window.logger._LTracker.push("Entered ListUser.useEffect()");
    loadUsers();
    //Log that we are leaving the method
    window.logger._LTracker.push("Leaving ListUser.useEffect()");
  }, [refresh]);

  //Function to call the api and delete a user based on their id
  const deleteUser = async (id) => {
    //Log that we are entering the method
    window.logger._LTracker.push("Entered ListUser.deleteUser()");
    await dataSource.delete(`/users/${id}`);
    refresh = true;
    window.location.reload();
    //Log that we are leaving the method
    window.logger._LTracker.push("Leaving ListUser.deleteUser()");
  };

  //Return the view
  return (
    <div>
      {/* List the users that were returned from /users */}
      <table border="1">
        <tbody>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Password</th>
            <th>Name</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
          {userList.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListUser;