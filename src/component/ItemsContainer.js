import React from "react";
import Bank1 from '../assets/Bank1.jpg';
import Bank2 from '../assets/Bank2.jpg';
import Bank3 from '../assets/Bank3.jpg';


import {
  StyledButton,
  CardWrapper,
} from "./ItemsContainer.styled";
import CardItem from "./CardItem";

const data = [
  {
    title: "JPMorgan Chase & Co.",
    text: "Chase Bank is the consumer banking division of JPMorgan Chase. Unlike its competitors, Chase is taking steps to expand its branch network in key markets. The bank currently has nearly 5,000 branches and 16,000 ATMs. According to the bank, nearly half of the country’s households are Chase customers. Read Bankrate’s review of Chase Bank.",
    image: Bank1,
    clientNumber: 715,
    creditsGivenOut: 200
  },
  {
    title: "Bank of America Corp.",
    text:
      "Bank of America serves about 66 million consumers and small business clients worldwide. Like many of the biggest banks, Bank of America is known for its digital innovation. It has more than 37 million digital clients and is experiencing success after introducing its virtual assistant, Erica, that assists account holders with various tasks. Read Bankrate’s review of Bank of America.",
    image: Bank2,
    clientNumber: 540,
    creditsGivenOut: 40
  },
  {
    title: "Wells Fargo & Co.",
    text:
      "Wells Fargo was founded in 1852. Although the bank has focused on consolidating and eliminating branches, it still has the most branches of any bank in the country. In addition to its main app, Wells Fargo has introduced a savings app and a mobile banking app geared toward millennials. The bank has rebranded and is focusing on repairing its relationship with customers after a series of missteps. Read Bankrate’s review of Wells Fargo.",
    image: Bank3,
    clientNumber: 1610,
    creditsGivenOut: 400
  },
];

const ItemsContainer = () => {
  return (
    <div>
      <CardWrapper>
        {data.map(({ title, text, image, clientNumber, creditsGivenOut }, idx) => (
          <CardItem
            title={title}
            text={text}
            imageSrc={image}
            clientNumber={clientNumber}
            creditsGivenOut={creditsGivenOut}
            id={idx}
          />
        ))}
      </CardWrapper>
      <StyledButton type="text" shape="round">View more</StyledButton>
      </div>
  );
};

export default ItemsContainer;