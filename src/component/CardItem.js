import React from "react";
import { Card } from "antd";
import { Footer, StyledButton } from "./CardItem.styled";

const { Meta } = Card;

function CardItem ({ title='No title.', text, imageSrc, clientNumber, creditsGivenOut }) { 
  var details = `${text}        
   ${clientNumber}      
    ${creditsGivenOut}`
  return(
  <Card
    hoverable
    style={{ width: 350, height: 600, borderRadius: "7px" }}
    cover={
      <img style={{ borderRadius: "7px", height: 220  }} alt="example" src={imageSrc} />
    }
  >
    <Meta title={title} description={text} style={{height: "300px"}}/>
    <Footer>
    <StyledButton type="text" shape="round">Show more</StyledButton>
    </Footer>
  </Card>
  )
};

export default CardItem;