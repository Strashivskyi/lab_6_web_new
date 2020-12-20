import React from 'react'
import {Menu} from 'antd'
import Logo from '../assets/logo.png';
import NewHeader from "./header.styled";
import {
    Link
  } from "react-router-dom";


function AppHeader() {
    return(
    <div className="container-fluid">
        <NewHeader>
        <img className="logo" src={Logo} alt="website logo"/>
        <Menu mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
                <Link to="/" style={{color:"#680300"}}>Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to="/info" style={{color:"#680300"}}>Catalog</Link>
            </Menu.Item>
            <Menu.Item key="3">
                <Link to="/infoes" style={{color:"#680300"}}>Cart</Link>
            </Menu.Item>

            </Menu>
            </NewHeader>
     </div>
    );
}
export default AppHeader;