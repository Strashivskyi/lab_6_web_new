import React from 'react'
import  {
    FacebookOutlined,
    InstagramOutlined,
    GooglePlusOutlined,
    YoutubeOutlined,
    // AliwangwangOutlined
  } from "@ant-design/icons";
  import { IconBase, DisplayInlineBlock, FooterText, Image } from "./Footer.styled";
  import Logo from '../assets/logo.png';


function Footer() {
    return(
    <DisplayInlineBlock>
        <FooterText>SERVING TO EMPOWER</FooterText>
        <Image className="logo" src={Logo} alt="website logo"/>  
        <IconBase component={FacebookOutlined} color='#4267B2'/>
        <IconBase component={YoutubeOutlined} color='#FF0000'/>
        <IconBase component={InstagramOutlined} color='#3A9F4'/>
        <IconBase component={GooglePlusOutlined} color='#ef6612'/>
     </DisplayInlineBlock>
    );
}
export default Footer;