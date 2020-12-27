import React, { useEffect, useState } from "react";
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import Filters from "./Filters"
import Loader from "./Loader"

import {
  CardWrapper,
} from "./CreditsContainer.styled";
import ItemInfo from "./ItemInfo";
import CreditCardItem from "./CreditCardItem";
import Search from "./Search"
import { getAllByFilters } from "../api/Crud.js";


const CreditsContainer = () => {

  const [items, setItems] = useState([]);
  const [bankNameFilter, setBankNameFilter] = useState('');
  const [annualFeeFilter, setAnnualFeeFilter] = useState();
  const [rewardsRateInPercentFilter, setRewardsRateInPercentFilter] = useState();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    (async function () {
      setItems(await getAllByFilters(bankNameFilter, annualFeeFilter, rewardsRateInPercentFilter));
      setLoading(false);
    })()}, [bankNameFilter, annualFeeFilter, rewardsRateInPercentFilter]);
  

  
    function filterByBankName(bank_name) {
      if (bank_name !== '') {
        setLoading(false);
        setBankNameFilter(bank_name);
        setLoading(true);
      }
    }
  
    function filterByAnnualFee(annualFee) {
      if (annualFee > 0) {
        setLoading(false);
        setAnnualFeeFilter(annualFee);
        setLoading(true);
      }
    }
  
    function filterByRewardsRate(rewardsRateInPercent) {
      if (rewardsRateInPercent > 0) {
        setLoading(false);
        setRewardsRateInPercentFilter(rewardsRateInPercent);
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
        <Search byBankName={filterByBankName} />
        <Filters byRewardsRate={filterByRewardsRate} byAnnualFee={filterByAnnualFee} byBankName={filterByBankName}/> 
        </div>
          <CardWrapper>
            {
               loading ? (
                <Loader />
               ):(
                
                items.map(item => (
                  <CreditCardItem
                    id={item.id}
                    title={item.title}
                    bank_name={item.bank_name}
                    image={item.image}
                    annualFee={item.annualFee}
                    introOffer={item.introOffer}
                    rewardsRateInPercent={item.rewardsRateInPercent}
                    
                  />

              )))
          }
           </CardWrapper>
        </Route>

      </Switch>
    </div>
  );
};

export default CreditsContainer;