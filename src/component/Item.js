import React from "react";



function Item ({ title='No title.', text, imageSrc, clientNumber, creditsGivenOut }) { 
  return(
  <div>
  <div>{title}</div>
  <div>{text}</div>
  <div>{imageSrc}</div>
  <div>{clientNumber}</div>
  <div>{creditsGivenOut}</div>
  </div>
  )
};

export default Item;

