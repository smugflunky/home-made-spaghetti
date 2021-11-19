import React from 'react'
import { Link } from 'react-router-dom';
import {FaTwitter, FaFacebook, FaDiscord} from 'react-icons/fa';
const Footer=() =>{
    return (
      <>
       <section className="footer text-center">
        <p>© Copyright 2021 SkullVerse </p>
        <a href="https://twitter.com/Skullverse1" target="_blank"><FaTwitter /></a>
        <a href="https://discord.com/invite/C9NR29tYcr" target="_blank"><FaDiscord /></a>

       </section>
      </>
    )
}
export default Footer;
