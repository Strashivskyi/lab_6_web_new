import React from "react";
import {Input, InputButton, Select, Option, Button} from "./Filters.styled";

function Filters(props) { 
    function cancelSearch() {
        window.location.reload();
    } 

    function doFilterByRewardsRate(e) {
        e.preventDefault();          
        let rewardsRateInPercent = document.getElementById('rewardsRateInPercent').value;
        props.byRewardsRate(rewardsRateInPercent);
    }

    function doFilterByAnnualFee(e) {
        e.preventDefault();
        let annualFee = document.getElementById('annualFee').value;
        props.byAnnualFee(annualFee);
    }

    function doFilterByBankName(e) {
        e.preventDefault();
        let bank_name = document.getElementById('bank_name').value;
        props.byBankName(bank_name);
    }

    
    return (
        <div style={{display: "flex", flexDirection: "row", marginLeft:"500px", marginTop:"-107px", paddingBottom:"15px",}}>
            <form  onSubmit={doFilterByRewardsRate}>
                <Input id="rewardsRateInPercent" type="number" placeholder="Higher than by rewards" min="0.1" max="10" step="0.1"/>
                <InputButton type="submit" id="search-button" value="Filter" />
            </form>
            <form  onSubmit={doFilterByAnnualFee}>
                <Input id="annualFee" type="number" placeholder="Lower than by fee" min="5" max="100" step="5"/>
                <InputButton type="submit" id="search-button" value="Filter" />
            </form>
            <form  onSubmit={doFilterByBankName}>
                <Select id="bank_name" placeholder="Choose bank..." required>
                    <Option value="Select a bank" disabled selected>Select a bank...</Option>
                    <Option value="Bank of America">Bank of America</Option>
                    <Option value="Citi">Citi</Option>
                    <Option value="American Express">American Express</Option>
                    <Option value="Discover it">Discover it</Option>
                </Select>
                <InputButton type="submit" id="search-button" value="Filter" />
            </form>
            <Button onClick={cancelSearch}>Cancel</Button> 
        </div>
    );

}

export default Filters;