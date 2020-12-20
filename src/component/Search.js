import React from 'react';
import {
    Input,
    InputButton
  } from "./Search.styled";

  

function Search(props) {


    function doSearch(e) {
        e.preventDefault();          
        let param = document.getElementById('bank-name').value;
        props.byBankName(param);
      }

          return(
<div>       
        <form style={{paddingTop: "50px", marginBottom: "70px"}}onSubmit={doSearch}>
            <Input id="bank-name" type="text" placeholder="Search by bank name..." />
            <InputButton type="submit" id="search-button" value="Search" />
        </form>
        
    </div>
    );
}
export default Search;