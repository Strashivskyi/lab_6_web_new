import React from "react";
import { Layout } from 'antd';
import './App.css';
import AppHeader from './component/header.js'
import Footer from "./component/Footer";
import CopyrightText from "./component/Copyright";
import Home from "./component/home";
import CreditsContainer from "./component/CreditsContainer";
import CreditCardsContainer from "./component/CreditCardsContainer";
import HomeScreen from "./component/Homescreen";
import CartScreen from "./component/CartScreen";


import { BrowserRouter as Router, Route } from "react-router-dom";




const { Header, Content} = Layout;

function App() {
  return (
   <Router>
   <Layout>
   <Header>
      <AppHeader/>
   </Header>
   <Content className="content"> 
      <Route exact path="/" component={Home} />
      {/* <Route path="/info" component={CreditsContainer} /> */}
      <Route exact path="/products/:id" component={CreditCardsContainer} />
      <Route exact path="/products" component={HomeScreen} />
      <Route exact path="/cart" component={CartScreen} />
   </Content>
  <Footer/>
  <CopyrightText/>
 </Layout>
 </Router>
  );

}

export default App;

