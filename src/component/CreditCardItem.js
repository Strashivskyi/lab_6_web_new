import React from "react";
import { Card } from "antd";
import { Footer, ExtraInfo} from "./CreditCardItem.styled";
import ViewMoreButton from "./ViewMoreButton";


const { Meta } = Card;

function CreditCardItem(props) {
  return(
  <Card 
    id={props.id}
    hoverable
    style={{ width: 500, maxWidth: "360px", height: 530, marginRight: "100px", borderRadius: "20px" }}
    cover={
      <img style={{ borderRadius: "20px", height: 220  }} alt="example" src={props.image} />}
>
    <Meta title={props.title} description={props.introOffer} style={{height: "80px"}}/>
    <Footer>
    <ExtraInfo>
    <br/>
    <div>Bank name: <b>{props.bank_name}</b></div>
    <div>id: <b>{props.id}</b></div>
    <div>Annual fee: <b>{props.annualFee}</b></div>
    <div>Rewards rate: <b>{props.rewardsRateInPercent}%</b></div>
    
    <br/>

    </ExtraInfo>
    <ViewMoreButton id={props.id}/>
    </Footer>
  </Card>
  );
  }

export default CreditCardItem;