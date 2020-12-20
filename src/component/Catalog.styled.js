import styled from 'styled-components';
import { Button } from 'antd';

export const ApplyButton = styled(Button)`
left: 500px;
font-size: 20px;
height: 40px;
background-color: gray;
border-color: white;
&:hover{
   background-color: white;
   border-color: gray;
   color: gray;
}
--antd-wave-shadow-color: black;
    
`;

export default ApplyButton;