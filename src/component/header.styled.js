import styled from 'styled-components';

export const NewHeader = styled.div`
    display: flex;
    align-items: center;
    padding: 15px 0;
    background-color: #f8f8f8;
    height: auto;
    line-height: 1.6;
    position: relative;
    padding-left: 200px;
    margin-left: -200px;
    width: 150%;
    color: #680300 !important;
    z-index: 10;
        .logo { 
        height: 70px;
      }
    
    .ant-layout-header {
        background-color: #f8f8f8;
    padding: 0;
    height: auto;
    line-height: 1.6;
    position: relative;
    left: 0;
    right: 0;
    z-index: 999;
    background-color: #f8f8f8;
  
  }
    .ant-menu {
        
        border: 0;
        background: none !important;
        padding-left: 250px;
        display: flex;
        background-color: #f8f8f8;
      
      }
    .ant-menu li.ant-menu-item {
        position: relative;
        border: 0 !important;
        font-size: 24px;
        color: #680300;
        margin-right: 50px;
        padding-right: 20px;
        padding-left: 20px;
        &:after{
            content: '';
            background: #680300;
            width: 1.5px;
            position: absolute;
            top: 2px;
            bottom: 2px;
            left: 30%;
            opacity: 0;
            transition: all 0.3s linear;
            left: auto;
            right: 30%;
        }
        &:before{
            content: '';
            
            background: #680300;
            width: 1.5px;
            position: absolute;
            top: 2px;
            bottom: 2px;
            left: 30%;
            opacity: 0;
            transition: all 0.3s linear;
        }
        &:hover{
            color: #680300 !important;
            background: none;
            &:before{
                left: -20%;
                opacity: 2;
            }
            &:after{
                right: -20%;
                opacity: 2;
            }
        }
      }
      .ant-menu li.ant-menu-item-selected{
        background: none;
        &:before{
            left: -20%;
            opacity: 2;
        }
        &:after{
            right: -20%;
            opacity: 2;
        }
        
      }
    
`;
export default NewHeader; 