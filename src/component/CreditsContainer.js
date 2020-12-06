import React from "react";
import credit1 from '../assets/credit1.jpg';
import credit2 from '../assets/credit2.jpg';
import credit3 from '../assets/credit3.jpg';
import credit4 from '../assets/credit4.jpg';

import {
  CardWrapper,
} from "./CreditsContainer.styled";
import CreditCardItem from "./CreditCardItem";

const data = [
  {
    title: "Cash Rewards credit card",
    bank_name: "Bank of America",
    image: credit1,
    annualFee: "0",
    introOffer: "INTRO OFFER: $200 online cash rewards bonus after you make at least $1,000 in purchases in the first 90 days of account opening",
    rewardsRateInPercent: 2
  },
  {
    title: "Diamond Preferred Card",
    bank_name: "Citibank",
    image: credit2,
    annualFee: "0",
    introOffer: "INTRO OFFER: 0% on Purchases and Balance Transfers for 18 months",
    rewardsRateInPercent: 0
  },
  {
    title: "Blue Cash Preferred",
    bank_name: "American Express",
    image: credit3,
    annualFee: "$0 intro for the first year, then $95",
    introOffer: "INTRO OFFER: $300",
    rewardsRateInPercent: 3.5
  },
  {
    title: "Quicksilver Cash Rewards Credit Card",
    bank_name: "Capital One",
    image: credit4,
    annualFee: "0",
    introOffer: "INTRO OFFER: One-time $200 cash bonus after you spend $500 on purchases within 3 months from account opening",
    rewardsRateInPercent: 1.5
  },
];

const CreditsContainer = () => {
  return (
    <div>
      <CardWrapper>
        {data.map(({ title, bank_name, image, annualFee, introOffer, rewardsRateInPercent }, idx) => (
          <CreditCardItem
            title={title}
            bank_name={bank_name}
            imageSrc={image}
            annualFee={annualFee}
            introOffer={introOffer}
            rewardsRateInPercent={rewardsRateInPercent}
            id={idx}
          />
        ))}
      </CardWrapper>
      </div>
  );
};

export default CreditsContainer;