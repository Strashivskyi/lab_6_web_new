import React, { useEffect, useState } from "react";
import credit1 from '../assets/credit1.jpg';
import credit2 from '../assets/credit2.jpg';
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
import { getAllByFilters } from "../../api/Crud.js";


const CreditsContainer = () => {

  const [items, setItems] = useState([]);
  const [titleFilter, setTitleFilter] = useState('');
  const [bankNameFilter, setBankNameFilter] = useState();
  const [annualFeeFilter, setAnnualFeeFilter] = useState();
  const [introOfferFilter, setIntroOfferFilter] = useState('');
  const [rewardsRateInPercentFilter, setRewardsRateInPercentFilter] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function () {
      setItems(await getAllByFilters(titleFilter, bankNameFilter, annualFeeFilter, introOfferFilter, rewardsRateInPercentFilter));
      setLoading(false);
    })()}, [titleFilter, bankNameFilter, annualFeeFilter, introOfferFilter, rewardsRateInPercentFilter]);
  
    function filterByTitle(T=title) {
      if (title !== '') {
        setLoading(false);
        setTitleFilter(title);
        setLoading(true);
      }
    }
  
    function filterByBankName(bank_name) {
      if (bank_name !== '') {
        setLoading(false);
        setPriceFilter(bank_name);
        setLoading(true);
      }
    }
  
    function filterByAnnualFee(annualFee) {
      if (annualFee > 0) {
        setLoading(false);
        setHeightFilter(annualFee);
        setLoading(true);
      }
    }
  
    function filterByIntroOffer(color) {
      if (color !== "") {
        setLoading(false);
        setColorFilter(color);
        setLoading(true);
      }
    }

    function filterByRewardsRate(rewardsRateInPercent) {
      if (rewardsRateInPercent > 0) {
        setLoading(false);
        setHeightFilter(rewardsRateInPercent);
        setLoading(true);
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