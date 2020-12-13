import styled from 'styled-components';
import { Button } from 'antd';

export const StyledButton = styled(Button)`
    background: transparent;
    border-radius: 10px;
    color: white !important;
    height: 50px;
    font-size: 30px;
    border: 1px solid white !important; 
    padding-bottom: 50px;
    &:hover{
        background: linear-gradient(rgba(169,169,169, 0.6), rgba(169,169,169, 0.6))
    }
    margin: 40px;
    margin-right: 90px;
    margin-left: 0px;
`;

export const Name = styled.div`
    color: white;
    font-weight: 700;
    font-size: 50px;
    


`;

export const BankName = styled.div`
    color: white;
    font-weight: 500;
    font-size: 34px;
    


`;
export const Number = styled.span`
background-color: #333;
    color: white;
    font-weight: 500;
    font-size: 32x;
    margin-right: 350px;
    padding-left: 15px;
    padding-right: 15px;


    


`;export const Offer = styled.div`
color: #cccccc;
font-weight: 400;
font-size: 23px;
border: solid #cccccc 2px;
padding-left: 15px;
margin-left: -15px;
margin-top: 15px;
margin-bottom: 15px;




`;
export const Rate = styled.div`
color: white;
font-weight: 500;
font-size: 52x;



`;
export const Fee = styled.div`
color: white;
font-weight: 500;
font-size: 52x;



`;