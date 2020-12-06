import React from 'react'
import Info from './info'
import ItemsContainer from './ItemsContainer'

const Home = () => { 
    return(
        <div>
            <Info/>
            <div style={{color:"white", fontWeight: "600", fontSize:"40px", textAlign: "center", borderBottom: "1px solid #FFFFFF",borderTop: "1px solid #FFFFFF", marginTop:"-100px", marginBottom:"40px", marginRight: "100px", marginLeft: "100px"}}>The most trusted banks in the USA</div>
            <ItemsContainer/>
        </div>
    
    )
  };
  
  export default Home;