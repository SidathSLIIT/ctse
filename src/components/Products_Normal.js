import React, { Component } from "react";
import axios from "axios";

export default class Products_Normal extends Component {
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
    await axios
      .get(`${window.backendapi2}/inventory`)
      .then((res) => {
        if (res.data.success) {
          this.setState({
            inventory: res.data.inventories,
          });
        }
        console.log(this.state.inventory);
      });
  }

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
        </div>
        <div className="cards-container">
          <div className="cards">
            {this.state.inventory.map((inventory) => (
              //   <a href='#'>
              <div className="cards-body">
                <div className="card-container">
                  <img
                    className="card-image1"
                    src={inventory.inventoryImage}
                    alt="Card"
                  />
                </div>
                <div className="card-details">
                  <h3>{inventory.inventoryName}</h3>
                  <p>{inventory.inventoryDesc}</p>
                  <a className="btn btn-warning" href="#">
                    <i className="fa fa-coins"></i>&nbsp; LKR.
                    {inventory.inventoryPrice}
                  </a>
                  <br/>
                  <br/>
                </div>
              </div>
              //   </a>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
