import React from "react";
import { Card } from "antd";
import { Footer, ExtraInfo} from "./CreditCardItem.styled";
import { StyledButton} from "./CardItem.styled";
import Item from "./Item"


const { Meta } = Card;

function CreditCardItem ({ title='No title.',  bank_name, imageSrc, annualFee, introOffer, rewardsRateInPercent }) { 
  return(
  <Card
    hoverable
    style={{ width: 500, height: 510, marginRight: "100px", borderRadius: "20px" }}
    cover={
      <img style={{ borderRadius: "20px", height: 220  }} alt="example" src={imageSrc} />
    }
  >
    <Meta title={title} description={introOffer} style={{height: "100px"}}/>
    <Footer>
    <ExtraInfo>
    <br/>
    <div>Bank name: <b>{bank_name}</b></div>
    <div>Annual fee: <b>{annualFee}</b></div>
    <div>Rewards rate: <b>{rewardsRateInPercent}%</b></div>
    <br/>
    </ExtraInfo>
    <Router>
    <StyledButton type="text" shape="round"><Link to="Credit">Show more</Link></StyledButton>
    <Route path="/credit" exact strict component={Item({ title='No title.', text, imageSrc, clientNumber, creditsGivenOut })}/>
    
    </Router>
    </Footer>
  </Card>
  )
};

export default CreditCardItem;