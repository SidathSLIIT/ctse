/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import axios from "axios";
import Sidebar from './Sidebar_Admin';
import TableScrollbar from "react-table-scrollbar";
import withRouter from './with_router';

class Products extends Component {
   
    constructor(props) {
        super(props);
    
        this.state = {
          inventory: [],
        };
      }
    
      componentDidMount() {
        this.retrive_inventorys();
      }
    
      async retrive_inventorys() {
        await axios.get(`${window.backendapi2}/inventory`).then((res) => {
          if (res.data.success) {
            this.setState({
                inventory: res.data.inventories,
            });
          }
          console.log(this.state.inventory);
        });
      }
    
      onDelete = (id) => {
        axios
          .delete(`${window.backendapi2}/inventory/${id}`)
          .then((res) => {
            alert("Deleted Successfully...!");
            this.retrive_inventorys();
          });
      };
    
      filterData(inventory, searchKey) {
        const result = inventory.filter(
          (inventory) =>
            inventory.inventoryName.toLowerCase().includes(searchKey) ||
            inventory.inventoryDesc.toLowerCase().includes(searchKey)
        );
    
        this.setState({ inventory: result });
      }
    
      handleSearch = (e) => {
        const searchKey = e.currentTarget.value;
        axios.get(`${window.backendapi2}/inventory`).then((res) => {
          if (res.data.success) {
            this.filterData(res.data.inventories, searchKey);
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
                <i className="fas fa-cart-arrow-down"></i> &nbsp;&nbsp;Products
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
          <a
            href="/products_add"
            className="btn btn-success"
            style={{ marginRight: "1%" }}
          >
            <i className="fa fa-cart-plus"></i>&nbsp;
            Add Products
          </a>
        </div>
        <div className="table-container">
          <TableScrollbar rows={9}>
            <table>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">name</th>
                  <th scope="col">count</th>
                  <th scope="col">price</th>
                  <th scope="col">description</th>
                  <th scope="col">image</th>
                  <th scope="col">update</th>
                  <th scope="col">delete</th>
                </tr>
              </thead>
              <tbody>
                {this.state.inventory.map((inventory, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{inventory.inventoryName}</td>
                    <td>{inventory.inventoryCount}</td>
                    <td>{inventory.inventoryPrice}</td>
                    <td>{inventory.inventoryDesc}</td>
                    <td><img className="table-image" src={inventory.inventoryImage} alt='img' /></td>
                    <td>
                    <a className="btn btn-warning" href={`/products_update/${inventory._id}`}>
                    <i className="fa fa-edit"></i>&nbsp;
                                Edit
                            </a>
                      
                      
                    </td>
                    <td>
                      <a
                        className="btn btn-danger"
                        href="#"
                        onClick={() => this.onDelete(inventory._id)}
                      >
                        <i className="fa fa-trash-alt"></i>&nbsp;
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


export default withRouter(Products); 