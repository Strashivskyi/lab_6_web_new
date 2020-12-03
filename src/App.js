import React from "react";
import { Layout } from 'antd';
import './App.css';
import AppHeader from './component/header.js'
import Info from './component/info.js'
import ItemsContainer from "./component/ItemsContainer";
import Footer from "./component/Footer";
import CopyrightText from "./component/Copyright";




const { Header, Content} = Layout;

function App() {
  return (
   <Layout>
   <Header>
      <AppHeader/>
   </Header>
   <Content className="content"> 
      <Info/>
      <div style={{color:"white", fontWeight: "600", fontSize:"40px", textAlign: "center", borderBottom: "1px solid #FFFFFF",borderTop: "1px solid #FFFFFF", marginTop:"-100px", marginBottom:"40px", marginRight: "100px", marginLeft: "100px"}}>The most trusted banks in the USA</div>
      <ItemsContainer/>
   </Content>
  <Footer/>
  <CopyrightText/>
 </Layout>
  );



}

export default App;

