import React from 'react'
import EconomyPicture from '../assets/credit.jpg'
import {
    SectionWrapper,
    SecondSectionWrapper,
  } from "./info.styled";

function Info() {
    return(
        <SectionWrapper>
        <a><img src={EconomyPicture} style={{width:'540px', border: "1px solid white", borderRadius: "4px", padding: "20px"}}/></a>
        <SecondSectionWrapper>
        <div style={{marginTop:"50px", marginLeft:"-60px", marginRight: "100px", color: "white", fontWeight:"900", fontSize:"50px"}}>CREDIT/DEBIT CARDS</div>
        <hr style={{marginLeft:"-30px", border: "2px dashed #FFFFFF", marginRight: "100px"}}></hr>
        <div style={{marginTop:"30px", marginLeft:"-40px", marginRight: "140px", color: "white", fontStyle: "italic",fontWeight:"500", fontSize:"20px", fontFamily: 'Open Sans'}}>Most debit cards function on a fundamental level. They’re issued by banks so that cardholders can easily and quickly move money from one bank account to another electronically. When making a purchase, money is withdrawn directly from the cardholder's bank account, and is deducted. If you didn't get a debit card yet, it's high time to do so. Only the best American banks are represented here.</div>
        </SecondSectionWrapper>
        </SectionWrapper>
    );
}
export default Info;