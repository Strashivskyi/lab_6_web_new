import React, {useState} from "react";
import Bank1 from '../assets/Bank1.jpg';
import Bank2 from '../assets/Bank2.jpg';
import Bank3 from '../assets/Bank3.jpg';
import Bank4 from '../assets/Bank4.jpg';
import Bank5 from '../assets/Bank5.webp';
import Bank6 from '../assets/Bank6.jpg';

import '../App.css';
import {
  StyledButton,
  CardWrapper,
} from "./ItemsContainer.styled";
import CardItem from "./CardItem";

function remove() {
  var myobj = document.getElementById("button");
  myobj.remove();
}

const ItemsContainer = () => {
  
    
  const [items, setItems]= useState([
    {
      id: 1,
      title: "JPMorgan Chase & Co.",
      text: "Chase Bank is the consumer banking division of JPMorgan Chase. Unlike its competitors, Chase is taking steps to expand its branch network in key markets. The bank currently has nearly 5,000 branches and 16,000 ATMs. According to the bank, nearly half of the country’s households are Chase customers. Read Bankrate’s review of Chase Bank.",
      image: Bank1,
      clientNumber: 715,
      creditsGivenOut: 200
    },
    {
      id: 2,
      title: "Bank of America Corp.",
      text:
        "Bank of America serves about 66 million consumers and small business clients worldwide. Like many of the biggest banks, Bank of America is known for its digital innovation. It has more than 37 million digital clients and is experiencing success after introducing its virtual assistant, Erica, that assists account holders with various tasks. Read Bankrate’s review of Bank of America.",
      image: Bank2,
      clientNumber: 540,
      creditsGivenOut: 40
    },
    {
      id: 3,
      title: "Wells Fargo & Co.",
      text:
        "Wells Fargo was founded in 1852. Although the bank has focused on consolidating and eliminating branches, it still has the most branches of any bank in the country. In addition to its main app, Wells Fargo has introduced a savings app and a mobile banking app geared toward millennials. The bank has rebranded and is focusing on repairing its relationship with customers after a series of missteps. Read Bankrate’s review of Wells Fargo.",
      image: Bank3,
      clientNumber: 1610,
      creditsGivenOut: 400
    }
  ]);
  const addThreeMoreItems = () =>{
    let threeMoreObjects=[
      {
        id: 4,
        title: "Citigroup Inc.",
        text: "Citigroup is a global financial services corporation. Its retail banking division, Citibank, is based in Sioux Falls, South Dakota. Citibank has approximately 700 branches in the U.S. and more than 1,800 branches outside of the country. U.S. customers can also access more than 65,000 fee-free ATMs. Read Bankrate’s review of Citibank.",
        image: Bank4,
        clientNumber: 20000,
        creditsGivenOut: 30000
      },
      {
        id: 5,
        title: "U.S. Bancorp",
        text:
          "U.S. Bancorp is the bank holding company and parent company of U.S. Bank. What we’ve come to know as the fifth-largest commercial bank by assets began in 1863 as the First National Bank of Cincinnati. Multiple mergers led to the formation of the bank known today for its extensive branch network and investment in improving its digital offerings. Read Bankrate’s review of U.S. Bank.",
        image: Bank5,
        clientNumber: 540,
        creditsGivenOut: 700
      },
      {
        id: 6,
        title: "Truist",
        text:
          "Truist is the bank formed by the merger of equals of BB&T and SunTrust. Truist provides financial services to around 10 million consumer households. The new company brings BB&T and SunTrust, which were respectively ranked 11th and 12th in bank assets as of Sept. 30, 2019, together to form the sixth-largest bank.",
        image: Bank6,
        clientNumber: 2000,
        creditsGivenOut: 1200
      }
    ]
    let expandedBankList = items.concat(threeMoreObjects);
    setItems(expandedBankList);
    remove(this);
  }
  return (
    
    <div>
      <CardWrapper>
      {items.map(item => (
          <CardItem style={{paddingTop:"600px"}}
            title={item.title}
            text={item.text}
            imageSrc={item.image}
            clientNumber={item.clientNumber}
            creditsGivenOut={item.creditsGivenOut}            
          />
        ))}
      </CardWrapper>
      <StyledButton id="button" type="text" shape="round" onClick={addThreeMoreItems}>View more</StyledButton>
      </div>
  );
};

export default ItemsContainer;