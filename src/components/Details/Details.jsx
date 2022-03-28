import React, { useContext, useEffect } from "react";
import { Button, Carousel } from "antd";
import { useParams } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";
import Loading from "../Loading/Loading";

const Details = () => {
  const { oneProduct, getOneProduct } = useContext(productsContext);
  const params = useParams();

  useEffect(() => {
    getOneProduct(params.id);
  }, []);

  console.log(oneProduct);

  return oneProduct ? (
    <div className="container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ width: "40vw" }}>
          <Carousel autoplay>
            <div>
              <img width="100%" src={oneProduct.image1} alt="watches image 1" />
            </div>

            <div>
              <img width="100%" src={oneProduct.image2} alt="watches image 2" />
            </div>
          </Carousel>
        </div>

        <div style={{ width: "50vw" }}>
          <h2>{oneProduct.brand}</h2>
          <h3>{oneProduct.model}</h3>
          <h2>{"$ " + oneProduct.price}</h2>
          <Button size="large" style={{ width: "100%", margin: "20px 0" }}>
            Add To Cart
          </Button>
          <div>{oneProduct.description}</div>
        </div>
      </div>
      <video autoPlay loop muted width="100%" src={oneProduct.video}></video>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;
