import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar_Admin";

export default function Product_Add() {
  let navigate = useNavigate();
  const [inventoryName, setInventoryName] = useState("");
  const [inventoryCount, setInventoryCount] = useState("");
  const [inventoryPrice, setInventoryPrice] = useState("");
  const [inventoryDesc, setInventoryDecs] = useState("");
  const [inventoryImage, setInventoryImage] = useState("");
  // const [inventoryImage, setInventoryImage] = useState(
  //   {
  //     image: "",
  //   }
  // );

  // const convertToBase64 = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const fileReader = new FileReader();
  //     fileReader.readAsDataURL(file);
  //     fileReader.onload = () => {
  //       resolve(fileReader.result);
  //     };
  //     fileReader.onerror = (error) => {
  //       reject(error);
  //     };
  //   });
  // };
  // const handleFileUpload = async (e) => {
  //   const file = e.target.files[0];
  //   const base64 = await convertToBase64(file);
  //   setInventoryImage({ ...inventoryImage, image: base64 });
  // };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      inventoryName: inventoryName,
      inventoryCount: inventoryCount,
      inventoryPrice: inventoryPrice,
      inventoryDesc: inventoryDesc,
      inventoryImage: inventoryImage,
    };
    axios
      .post(`${window.backendapi2}/inventory`, data)
      .then((res) => {
        if (res.data.success) {
          alert("Added successfully!");
          navigate("/products");
        } else {
          alert("Unable to add. Try again later.");
        }
      });
  };

  return (
    <div>
      <div className="page-head">
        <Sidebar />
        <div className="page-header">
          <h1>
            <a href="#">
              <i className="fa fa-cart-plus"></i> &nbsp;&nbsp;ADD PRODUCTS
            </a>
          </h1>
        </div>
      </div>
      <div className="form-container">
        <form className="form-data" method="POST">
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              id="inventoryName"
              // value={this.state.inventoryName}
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
              // value={this.state.inventoryCount}
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
              // value={this.state.inventoryPrice}
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
              // value={this.state.inventoryDesc}
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
              // onFocus={(e) => (e.currentTarget.type = "file")}
              // onBlur={(e) => (e.currentTarget.type = "text")}
              
              // value={this.state.inventoryImage}
              // onChange={(e) => handleFileUpload(e)}
              onChange={(e) => {
                setInventoryImage(e.target.value);
              }}
              id="inventoryImage"
              name="image"
              placeholder="Product Image"
              tabIndex={5}
              required
            ></input>
          </div>

          <div>
            <button
              type="submit"
              onClick={onSubmit}
              className="btn btn-warning btndata"
              tabIndex={6}
            >
              {" "}
              <i className="fa fa-cart-plus"></i>&nbsp; ADD PRODUCT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
