import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "./Sidebar_Admin";

export default function Product_Update() {
  let navigate = useNavigate();
  const { id } = useParams();
  const [inventory, setInventory] = useState("");
  const [inventoryName, setInventoryName] = useState("");
  const [inventoryCount, setInventoryCount] = useState("");
  const [inventoryPrice, setInventoryPrice] = useState("");
  const [inventoryDesc, setInventoryDecs] = useState("");
  const [inventoryImage, setInventoryImage] = useState("");

  useEffect(() => {
    getResponse();
  }, []);
  
  const getResponse = () => {
    // console.log(id);
    axios.get(`${window.backendapi2}/inventory/inventorydata/${id}`).then((res) =>{
        if(res.data.success){
            setInventory(res.data.inventory)

        }
    })
  }
  
  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      inventoryCount: inventoryCount,
      inventoryName: inventoryName,
      inventoryPrice: inventoryPrice,
      inventoryDesc: inventoryDesc,
      inventoryImage: inventoryImage,
    };
    axios
      .put(`${window.backendapi2}/inventory/updateinventory/${id}`, data)
      .then((res) => {
        if (res.data.success) {
          alert("Updated successfully");
          navigate("/products");
        }
      });
  };

  // return 
    return (
      
      <div>
        <div className="page-head">
          <Sidebar />
          <div className="page-header">
            <h1>
              <a href="#">
                <i className="fa fa-cart-plus"></i> &nbsp;&nbsp;UPDATE PRODUCT
                DETAILS
              </a>
            </h1>
          </div>
        </div>
        <div className="form-container">

       {/* inventory.map( ( */}

          <form className="form-data" method="POST">
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                id="inventoryName"
                value={inventory.inventoryName}
                onChange={(e) => {
                  setInventoryName(e.target.value);
                }}
                name="inventoryName"
                placeholder="Product Name"
                tabIndex={1}
                required
              ></input>
            </div>

            <div className="form-group">
              <input
                className="form-control"
                type="number"
                id="inventoryCount"
                value={inventory.inventoryCount}
                onChange={(e) => {
                  setInventoryCount(e.target.value);
                }}
                name="inventoryCount"
                placeholder="Product Count"
                tabIndex={2}
                required
              ></input>
            </div>

            <div className="form-group">
              <input
                className="form-control"
                type="text"
                id="inventoryPrice"
                value={inventory.inventoryPrice}
                onChange={(e) => {
                  setInventoryPrice(e.target.value);
                }}
                name="inventoryPrice"
                placeholder="Product Price"
                tabIndex={3}
                required
              ></input>
            </div>

            <div className="form-group">
              <input
                className="form-control"
                type="text"
                id="inventoryDesc"
                value={inventory.inventoryDesc}
                onChange={(e) => {
                  setInventoryDecs(e.target.value);
                }}
                name="inventoryDesc"
                placeholder="Product Description"
                tabIndex={4}
                required
              ></input>
            </div>

            <div className="form-group">
              <input
                className="form-control"
                type="text"
                id="inventoryImage"
                // onFocus={(e) => (e.currentTarget.type = "file")}
                // onBlur={(e) => (e.currentTarget.type = "text")}
                value={inventory.inventoryImage}
                onChange={(e) => {
                  setInventoryImage(e.target.value);
                }}
                name="inventoryImage"
                placeholder="Product Image"
                tabIndex={5}
                required
              ></input>
            </div>

            <div>
              <button
                type="submit"
                onClick={() => {
                  onSubmit(inventory._id);
                }}
                className="btn btn-warning btndata"
                tabIndex={6}
              >
                {" "}
                <i className="fa fa-cart-plus"></i>&nbsp; UPDATE PRODUCT
              </button>
            </div>
          </form>
          {/* )); */}
        </div>
      </div>
    );
  
}
