import React, { useState } from "react";
import credit1 from '../assets/credit1.jpg';
import credit2 from '../assets/CardCiti.png';
import credit3 from '../assets/credit3.jpg';
import credit4 from '../assets/credit4.jpg';
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import Filters from "./Filters"

import {
  CardWrapper,
} from "./CreditsContainer.styled";
import ItemInfo from "./ItemInfo";
import CreditCardItem from "./CreditCardItem";
import Search from "./Search"



const CreditsContainer = () => {

  const [items] = useState([
    { id: 1, title: "Cash Rewards credit card", bank_name: "Bank of America", image: credit1, annualFee: 20, introOffer: "INTRO OFFER: $200 online cash rewards bonus after you make at least $1,000 in purchases in the first 90 days of account opening", rewardsRateInPercent: 2 },
    { id: 2, title: "Diamond Preferred Card", bank_name: "Citi bank", image: credit2, annualFee: 50, introOffer: "INTRO OFFER: 0% on Purchases and Balance Transfers for 18 months", rewardsRateInPercent: 3.5 },
    { id: 3, title: "Blue Cash Preferred", bank_name: "American Express", image: credit3, annualFee: 10, introOffer: "$0 intro for the first year, then $95", rewardsRateInPercent: 2 },
    { id: 4, title: "Quicksilver Cash Rewards Credit Card", bank_name: "Capital One", image: credit4, annualFee: 5, introOffer: "INTRO OFFER: $200 online cash rewards bonus after you make at least $1,000 in purchases in the first 90 days of account opening", rewardsRateInPercent: 1.5 }
  ]);
  const [searched, setLSearched] = useState(items);
  const [filtered, setLFiltered] = useState(items);

  const [isSearched, setSearched] = useState(false);
  const [isFiltered, setFiltered] = useState(false);

  
  function triggerSearch(searchParameter) {
    if (searchParameter !== null && searchParameter !== "") {
      let array = []
      if (isFiltered && isSearched) {
        array = filtered.filter(value => searched.includes(value));
      } else if (isFiltered) {
        array = filtered;
      } else if (isSearched) {
        array = searched;
      } else {
        array = items;
      }

      setLSearched(array.filter(item => item.bank_name === searchParameter));
      setSearched(true);
    } else {
      setLSearched(items);
      setSearched(false);
    }
  }

  function filterByRewardsRate(rewardsRateInPercent) {
    if (rewardsRateInPercent > 0) {
      let array = []
      if (isFiltered && isSearched) {
        array = filtered.filter(value => searched.includes(value));
      } else if (isFiltered) {
        array = filtered;
      } else if (isSearched) {
        array = searched;
      } else {
        array = items;
      }

      setLFiltered(array.filter(item => item.rewardsRateInPercent >= rewardsRateInPercent));
      setFiltered(true);
    }
  }

  function filterByAnnualFee(annualFee) {
    if (annualFee > 0) {
      let array = []
      if (isFiltered && isSearched) {
        array = filtered.filter(value => searched.includes(value));
      } else if (isFiltered) {
        array = filtered;
      } else if (isSearched) {
        array = searched;
      } else {
        array = items;
      }

      setLFiltered(array.filter(item => item.annualFee <= annualFee));
      setFiltered(true);
    }
  }

  function filterByBankName(bank_name) {
    if (bank_name !== "") {
      let array = []
      if (isFiltered && isSearched) {
        array = filtered.filter(value => searched.includes(value));
      } else if (isFiltered) {
        array = filtered;
      } else if (isSearched) {
        array = searched;
      } else {
        array = items;
      }

      setLFiltered(array.filter(item => item.bank_name === bank_name));
      setFiltered(true);
    }
  }

  let match = useRouteMatch();
  return (
    <div>
      
      <Switch >
        <Route path={`${match.path}/:itemId`}>
          <ItemInfo items={items} />
        </Route>
        <Route path={match.path}>
        <div style={{ backgroundColor: "white",  paddingLeft: "100px"}}>
        <Search onSearch={triggerSearch} />
        <Filters byRewardsRate={filterByRewardsRate} byAnnualFee={filterByAnnualFee} byBankName={filterByBankName}/> 
        </div>
          <CardWrapper>
            {
              isSearched && isFiltered ? (
                filtered.map(item => (
                  <CreditCardItem
                    id={item.id}
                    title={item.title}
                    bank_name={item.bank_name}
                    image={item.image}
                    annualFee={item.annualFee}
                    introOffer={item.introOffer}
                    rewardsRateInPercent={item.rewardsRateInPercent}
                  />))
              ) : (
                  isSearched ? (
                    searched.map(item => (
                      <CreditCardItem
                        id={item.id}
                        title={item.title}
                        bank_name={item.bank_name}
                        image={item.image}
                        annualFee={item.annualFee}
                        introOffer={item.introOffer}
                        rewardsRateInPercent={item.rewardsRateInPercent}
                      />))) : (
                      isFiltered ? (
                        filtered.map(item => (
                          <CreditCardItem
                            id={item.id}
                            title={item.title}
                            bank_name={item.bank_name}
                            image={item.image}
                            annualFee={item.annualFee}
                            introOffer={item.introOffer}
                            rewardsRateInPercent={item.rewardsRateInPercent}
                          />))) : (
                          items.map(item => (
                            <CreditCardItem
                              id={item.id}
                              title={item.title}
                              bank_name={item.bank_name}
                              image={item.image}
                              annualFee={item.annualFee}
                              introOffer={item.introOffer}
                              rewardsRateInPercent={item.rewardsRateInPercent}
                            />)))
                    )
                )
            }

          </CardWrapper>
        </Route>

      </Switch>
    </div>
  );
};

export default CreditsContainer;