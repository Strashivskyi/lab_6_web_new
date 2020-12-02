import Icon from '@ant-design/icons';
import styled from 'styled-components';

export const IconBase = styled(Icon)`
    font-size: 33px;
    color: ${({color}) => color};
    margin-right: 20px;
    
`;
export const DisplayInlineBlock = styled.div`
    dipslay: flex;
    flex-direction: row;
    background-color: #f8f8f8;
    justify-content: center;
    height: 80px;
    padding-top: 20px;
`;
export const Image = styled.img`
    height: 50px;
    margin-right: 400px;

`;
export const FooterText = styled.span`
    font-weight: 700;
    font-size: 20px;
    margin-right: 430px;
    margin-left: 80px;

`;

