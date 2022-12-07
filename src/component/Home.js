import React from "react";
import './css/home.css'
import Product from "./Product";

export default function Home() {
  return (
    <div className="bg-home">
      <div className="card bg-dark text-white border-0">
        <img className="card-img bg-home-img" src="/assets/image/bg.jpg" alt="Card image" />
        <div className="card-img-overlay d-flex flex-column justify-content-around">
            <div className="container sales-container">
                <h5 className="card-title display-3 fw-bolder mb-0">BIG <b>50%</b> SALE!!</h5>
                <p className="card-text lead fs-2">
                    Check Out Our Products
                </p>
                <div className="btn-group-bg">
                    <div className="reg-log-card mr-3">
                        <a href="#" className="btn btn-inline-light btn-outline-success">
                            <i className="fa-brands fa-shopify"></i> Products</a>
                    </div>
                    <div className="reg-log-card">
                        <a href="#" className="btn btn-inline-light btn-outline-dark">
                            <i className="fa-solid fa-layer-group"></i> Details</a>
                    </div>
                </div>
                
            </div>
        </div>
      </div>

      <Product/>

    </div>
  );
}
