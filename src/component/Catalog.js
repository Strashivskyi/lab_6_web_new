import React from "react";
// import { CatalogStyled } from "./Catalog.styled";
import CustomSelect from "./CustomSelect"
import ApplyButton from "./Catalog.styled"

const options=[
{label:'React', value:'react'},
{label:'ReactNative', value: 'react-native'},
]

function Catalog () { 
  return(
  <div style={{display: "flex", marginTop: "20px", backgroundColor: "white", height: "100px", paddingTop: "35px", justifyContent: "space-between", paddingLeft: "100px", paddingRight: "700px"}}>
      <CustomSelect options={options} activeStyle={{borderColor: "green"}}/>
      <CustomSelect options={options}/>
      <CustomSelect options={options}/>
      <ApplyButton type="primary" shape="round">Apply</ApplyButton>
  </div>
  )
};

export default Catalog;