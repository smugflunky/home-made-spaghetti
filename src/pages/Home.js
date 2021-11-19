import React,{useState} from 'react'
import {Navbar,Nav,Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaTwitter, FaFacebook, FaDiscord} from 'react-icons/fa';
import {GiHamburgerMenu} from 'react-icons/gi';
import Card from '../components/Card';
import Accordion from 'react-bootstrap/Accordion'
import Teammember from '../components/Teammember';
import Roadmap from '../components/Roadmap';
import Mint from './Mint';
const Home=() =>{

    return (
        <>
   <section id="banner" className="text-center">
     <img className="img-title" src="images/main.png" alt="" />
    
   
</section>
<section className="container ">
<div className="small-container  mobile-view">
        <h1 className="intro-hook">Just beyond the world you know,<br/> there’s another SkullVerse .</h1>
        <p className="intro-description"> 5000 limited Skeleton collections. Be part of this adventure in SkullVerse.</p>
        <h1 className="intro-question mt-50">What will the Skullverse Population  find on their journey?</h1>
        <h1 className="intro-question">Will you join them?</h1>
      </div>
</section>
{/* section About Start */}
<section id="about" className="container-fluid about-home">
  <div className="container">

 
  <div className="row">
    <div className="col-md-4 mt-100" >
     <img className="rounded img-fluid" src="images/banner4.jpeg"/>
     <img className="rounded img-fluid mt-4" src="images/banner6.jpeg"/>
    </div>
    <div className="col-md-8 about-desc">
      <h1>About us</h1>
      <p>In an alternate universe,</p>
      <p>Which the world as we know it is different due to alternate events that’s taken place in history.<br/>
      A sorcerer tried necromancy but didn’t succeed, instead turned humans into living skeletons in the process, the world is in chaos!.<br/>
      Over 5000 skeletons now exist in this skullverse. In the addition to the curse, in this withered universe chaos has overtaken this earth. If the skeleton race hasn’t already been turned to dust, chances are their insane, driven out of their minds by the horror that has fallen onto this universe.<br/>
      Over 5000 skeletons now exist in this skullverse. In the addition to the curse, in this withered universe chaos has overtaken this earth. If the skeleton race hasn’t already been turned to dust, chances are their insane, driven out of their minds by the horror that has fallen onto this universe.
      <br/>
      Legend has it few of these characters have their minds intact and know how to retrieve the keys into breaking the curse of the enchantment. But then there are the insane who are determined on destroying the keys and stop the chosen ones by any means necessary, as if all that wasn’t enough there’s a time limit where the chosen one have to retrieve the keys. So will you join the skullverse and to see if you’re the chosen ones to find the keys and save humanity.</p>
      <span class="join-text">JOIN US!</span>
      <ul>
        <li><a href="https://discord.com/invite/C9NR29tYcr" target="_blank"><FaDiscord /></a></li>
        <li><a href="https://twitter.com/Skullverse1" target="_blank"><FaTwitter /></a></li>
      </ul>
      
    </div>
  </div>
  <div className="row" id="mint">
  <div className="text-center about-more col-md-12 col-lg-12">
  <h3 className="about-more-h3">Wen Skullverse ? </h3>
        <p><span>MINTING STARTED</span>  it hasnt started yet </p>
        <a class="space-bums-button blue-button mb-4" href="/mint">Mint!</a>
        <p><span>TOTAL SUPPLY:</span> 5000 Mint </p>
        <p><span>MINT PRICE:</span>  1 SOL.</p>
      </div>
  </div>
  </div>
</section>
{/* creed start */}
<section id="skullversepopulation" className="container text-center home-creed">
<div className="intro-container text-center">
 <h1> SKULLVERSE POPULATION</h1>
 <p>Over decades when no one has been able to locate the keys the population has increased and now 5000 Skulls who have their minds intact are on a journey to locate the keys and re-do what has happened to them  decades ago. The fate all depends on those who find the keys.</p>
</div>
<section className="container">
<div className="row ">
  {/* card start */}

<Card 
 title="BOTS"
 img="images/image4.jpg"

 />
<Card 
 title="HALOS"
 img="images/image5.jpg"

 />
<Card 
 title="PREDATORS"
 img="images/image6.jpg"

 />

      {/* card end */}

</div>
{/* spaceship start */}
<div className="intro-container text-center">
<p className="main-title">SKULL</p>
<p className="main-title">Collectors limited edition give away cards</p>

<div className="row">
  <div className="col-md-6">

<img className="img-fluid" src="images/skull1.gif" class="rocket-gif"/>
  </div>
  <div className="col-md-6">

<img className="img-fluid" src="images/skull2.gif" class="rocket-gif"/>
  </div>
</div>

</div>
{/* spaceship end */}


</section>

</section>
{/* creed end */}

{/* section About end */}


{/* section road map start */}

<div id="roadmap" className="container mb-4">
<p class="title text-center">ROADMAP</p>
        <div className="row">
        <Roadmap />
        
        </div>
      </div>
{/* section road map end */}

{/* Section FAQ start */}
<section className="container mt-40">
<p class="title text-center">FAQ</p>
<div className="intro-container">


<Accordion className="faq-accordion ">
  <Accordion.Item className="faq-accordion-item " eventKey="0">
    <Accordion.Header className="acheader br-20">What are SkullVerse Skeletons?</Accordion.Header>
    <Accordion.Body>
    SkullVerse Skeletons are just like us but from a different universe they have Good Skulls as well as Evil Skulls, Each Skull is unique and randomly generated they are stored on the Solana Blockchain with a max quantity 5000 skulls available.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header className="acheader">How much does it cost to mint?</Accordion.Header>
    <Accordion.Body>
    Each Unique SkullVerse skull costs 1 Sol. 
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header className="acheader">How can i purchase a SkullVerse?</Accordion.Header>
    <Accordion.Body>
    Skullverse NFT’s are minted directly on our website.
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="3">
    <Accordion.Header className="acheader">How many Skulls can I buy?</Accordion.Header>
    <Accordion.Body>
    It will be unlimited but limited to 1 per transaction. 
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item class="citem" eventKey="4">
    <Accordion.Header className="acheader">What wallet can I use to Mint?</Accordion.Header>
    <Accordion.Body>
    Phantom wallet-<br/>
To view your collection simply click on NFT tab within the wallet to view them.

    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="5">
    <Accordion.Header className="acheader">Which Secondary market will SkullVerse be listed?</Accordion.Header>
    <Accordion.Body>
    It will be listed on Magic Eden to start with and then soon after we will have it ready for Digital Eyes.

    </Accordion.Body>
  </Accordion.Item>

</Accordion>
</div>
</section>
{/* Section FAQ end */}

{/* section Team start */}
<section className="container mt-40">
<p class="title text-center">TEAM MEMBERS</p>
  <div className="intro-container">
    <div className="row">
      <Teammember 
      image="images/image7.jpg"
      name="Skullee—Founder" 
      url="#" 
      />
      <Teammember 
      image="images/image8.jpg"
      name="Draco—Co Founder" 
      url="#" 
      />
      <Teammember 
      image="images/image9.jpg"
      name="JayJay – Lead Marketer" 
      url="#" 
      />
     
      <Teammember 
      image="images/image10.jpg"
      name="Goldie – Lead Dev" 
      url="#" 
      />
     
    </div>
  </div>
</section>

{/* section Team end */}

        </>
    )
}
export default Home;
