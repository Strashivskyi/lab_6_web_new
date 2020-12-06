import React from "react";
import { Layout } from 'antd';
import './App.css';
import AppHeader from './component/header.js'
import Info from './component/info.js'
import Footer from "./component/Footer";
import CopyrightText from "./component/Copyright";
import Home from "./component/home";
import Options from "./component/Options";

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
      <Route path="/info" component={Options} />
      <Route path="/infoes" component={Info} />
   </Content>
  <Footer/>
  <CopyrightText/>
 </Layout>
 </Router>
  );



}

export default App;

