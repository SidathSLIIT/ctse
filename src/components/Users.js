/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import axios from "axios";
import Sidebar from './Sidebar_Admin';
import TableScrollbar from "react-table-scrollbar";

export default class View_user extends Component {
   
    constructor(props) {
        super(props);
    
        this.state = {
          user: [],
        };
      }
    
      componentDidMount() {
        this.retrive_users();
      }
    
      async retrive_users() {
        await axios.get(`${window.backendapi1}/user/users`).then((res) => {
          if (res.data.success) {
            this.setState({
              user: res.data.users,
            });
          }
          console.log(this.state.user);
        });
      }
    
      onDelete = (id) => {
        axios
          .delete(`${window.backendapi1}/user/deleteuser/${id}`)
          .then((res) => {
            alert("Deleted Successfully...!");
            this.retrive_users();
          });
      };
    
      filterData(user, searchKey) {
        const result = user.filter(
          (user) =>
            user.userEmail.toLowerCase().includes(searchKey) ||
            user.userPhone.toLowerCase().includes(searchKey)
        );
    
        this.setState({ user: result });
      }
    
      handleSearch = (e) => {
        const searchKey = e.currentTarget.value;
        axios.get(`${window.backendapi1}/user/users`).then((res) => {
          if (res.data.success) {
            this.filterData(res.data.users, searchKey);
          }
        });
      };
  


    render() {
        return (
            <div>
                <div className="page-head">
          <Sidebar />
          <div className="page-header">
            <h1>
              <a href="#">
                <i className="fas fa-users"></i> &nbsp;&nbsp;Customers
              </a>
            </h1>
          </div>
        </div>
        <div className="search-add">
          <div className="table-search">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              name="searchQuery"
              onChange={this.handleSearch}
            ></input>
          </div>
          {/* <a
            href="/userregister"
            className="btn btn-success"
            style={{ marginRight: "1%" }}
          >
            Add user
          </a> */}
        </div>
        <div className="table-container">
          <TableScrollbar rows={9}>
            <table>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">email</th>
                  <th scope="col">contact number</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {this.state.user.map((user, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.userEmail}</td>
                    <td>{user.userPhone}</td>
                    <td>
                      <a
                        className="btn btn-danger"
                        href="#"
                        onClick={() => this.onDelete(user._id)}
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableScrollbar>
        </div>
            </div>
        )
    }
}
