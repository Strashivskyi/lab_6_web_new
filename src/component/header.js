import React from 'react'
import {Menu} from 'antd'
import Logo from '../assets/Vector(1).png';
import NewHeader from "./header.styled";




function AppHeader() {
    return(
    <div className="container-fluid">
        <NewHeader>
        <img className="logo" src={Logo} alt="website logo"/>
        <Menu mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Catalog</Menu.Item>
            <Menu.Item key="3">Cart</Menu.Item>
        </Menu>
        </NewHeader>
     </div>
    );
}
export default AppHeader;