
import React from "react";
import {
    useParams
} from "react-router-dom";
import {
  Name, BankName, StyledButton, Number, Rate, Fee, Offer
} from "./ItemInfo.styled";
import {
  Link
} from "react-router-dom";

function ItemInfo(props) {
    let { itemId } = useParams();
    
    let item = props.items[itemId-1];

    return (
        <div style={{display: "flex", minHeight: "580px"}}>
          <div><img src={item.image} style={{borderRadius: "23px", height: "40vh", margin: "90px", marginRight: "50px"}}/></div>
          <div style={{margin:"70px"}}> 
          <Name>{item.title}</Name>
          <BankName>{item.bank_name}</BankName>
          <Offer>{item.introOffer}</Offer>
          <Rate>rewards rate: <Number>{item.rewardsRateInPercent} %</Number> </Rate>
          <Fee>annual fee: <Number>{item.annualFee}</Number></Fee>
          <div style={{display: "flex"}}>
          <Link to={'/info'}><StyledButton type="text" shape="round" style={{marginTop: "40px"}}>Back</StyledButton></Link>;
          <StyledButton id="button" type="text" shape="round">Add to cart</StyledButton>
          </div>
          
          </div>
        </div>
        
      )
  }
export default ItemInfo;