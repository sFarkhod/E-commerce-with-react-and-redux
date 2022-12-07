import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { NavLink } from "react-router-dom";
import "./css/product.css";

export default function Product() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const responce = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await responce.clone().json());
        setFilter(await responce.json());
        setLoading(false);
        console.log(filter);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
          <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
          <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
          <Skeleton height={350}/>
        </div>
      </>
    );
  };

  const filterProduct = (dat) => {
    const updatedList = data.filter((x)=>x.category === dat);
    setFilter(updatedList);
  }

  const ShowProducts = () => {
    return (
      <>
        <div className="men-all-button d-flex justify-content-center pb-5">
          <button className="btn btn-outline-dark mr-2" onClick={()=>setFilter(data)}>All</button>
          <button className="btn btn-outline-dark mr-2" onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
          <button className="btn btn-outline-dark mr-2" onClick={()=>filterProduct("women's clothing")}>
            Women's Clothing
          </button>
          <button className="btn btn-outline-dark mr-2" onClick={()=>filterProduct("jewelery")}>Jewelery</button>
          <button className="btn btn-outline-dark" onClick={()=>filterProduct("electronics")}>Electronic</button>
        </div>
        <div className="row card-of-product">
          {filter.map((product) => {
            return (
              <>
                <div className="col-md-3 mb-4 card-product-single" key={product.id}>
                  <div className="card h-100 text-center p-4">
                    <img src={product.image} className="card-img-top" alt={product.title} height="250px-*
                    "/>
                    <div className="card-body">
                      <h5 className="card-title">{product.title.substring(0,12)+"...."}</h5>
                      <p className="card-text font-weight-bold">
                        ${product.price}
                      </p>
                      <NavLink className="btn btn-outline-success" to={`/products/${product.id}`}>
                        Buy Now
                      </NavLink>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div className="product-boss-div">
      <div className="container my-5 py-5">
        <div className="row productName_andHr">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
}
