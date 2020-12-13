import styled from 'styled-components';
import { Button } from 'antd';

export const StyledButton = styled(Button)`
    background: transparent;
    border-radius: 10px;
    color: white !important;
    margin-left: 670px;
    height: 50px;
    font-size: 30px;
    border: 1px solid white !important; 
    padding-bottom: 50px;
    margin-bottom: 60px;
    &:hover{
        background: #680300;
    }
    


`;
export const CardWrapper = styled.div`
    min-height: 700px;
    max-height: 1400px;
    margin-bottom: 30px;
    margin-top: 30px;
    padding-right: 150px;
    margin-left: 70px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 30px;
    width: 100%;
    height: 100%;

`