import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../redux/actions/productActions";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { productId } = useParams();
  const { id, title, image, price, description, category } = product;

  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log(err));

    console.log(response.data);
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
  }, [productId]);

  return (
    <>
      <div className="ui grid container">

        {Object.keys(product) === 0 ? (
          <div>...Loading</div>
        ) : (
          <div className="ui placeholder segment">
            <div className="ui two column stackble center aligned grid">
              <div className="ui vertical divider">AND</div>
              <div className="middle aligned row">
                <img src={image} alt={title} className="ui fluid image" />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a href="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content"> Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        )};
      </div>
    </>
  )
}


export default ProductDetail;
