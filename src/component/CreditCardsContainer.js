import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";


import {
  Name, BankName, StyledButton, Number, Rate, Fee, Offer, Status
} from "./ItemInfo.styled";
import {
  Link
} from "react-router-dom";
import Loader from "./Loader"

const CreditCardsContainer = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;
  useEffect(() => {
    if (product && match.params.id !== product.id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, match]);
  
  const addToCartHandler = () => {
    dispatch(addToCart(product.id, qty));
    history.push(`/cart`);
  };

  return (
    <div style={{minHeight:"80vh"}}>
      {loading ? (
 <Loader />
       ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
        <p>
                Price:
                <span>${product.price}</span>
              </p>


              <p>
                Qty
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>



                <div style={{display: "flex", minHeight: "580px"}}>
          <div><img src={product.image} style={{borderRadius: "23px", height: "40vh", margin: "90px", marginRight: "50px"}}/></div>
          <div style={{margin:"70px"}}> 
          <div style={{display: "flex"}}>
          <Name>{product.title}</Name>
          <p >
                <select value={qty} onChange={(e) => setQty(e.target.value)} className="cart_item_select">
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
          </div>
          <BankName>{product.bank_name}</BankName>
          <Offer>{product.introOffer}</Offer>
          <Rate>rewards rate: <Number>{product.rewardsRateInPercent} %</Number> </Rate>
          <Fee>annual fee: <Number>{product.annualFee}</Number></Fee>
          <Status>
                Status:&nbsp;
                <Number>
                  {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </Number>
              </Status>
          <div style={{display: "flex"}}>
          <Link to={'/products'}><StyledButton type="text" shape="round" style={{marginTop: "40px"}}>Back</StyledButton></Link>;
          <StyledButton id="button" type="text" shape="round" onClick={addToCartHandler}>Add to cart</StyledButton>
          </div>
          
          </div>
        </div>
  
        </>
      )}
    </div>
  );
};

export default CreditCardsContainer;