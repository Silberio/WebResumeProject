import React, { Component } from 'react';
import './App.css';
import { Carousel } from 'react-responsive-carousel';
import rcDemoVid from './media/rentcalcdemo.mp4';
import bmDemoVid from './media/bancusdemo.mp4';
import noThirthy from './media/nothirty.mp4';
import writingDemo from './media/writing.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
        </header>
        <MainBanner />
        <Projects />
        <Biography />
        <DangerButton />
      </div>
    );
  }
}

/*MAIN BANNER aka Jumbotron */
class MainBanner extends Component {
  render() {
    return(
      <div className="Jumbotron">
        <div className="banner_text">
          <h1 className="display-4"> Erinn Bastias</h1>
          <p>Welcome to my web Resumé</p>
          <a id="learnmore" className="btn btn-light" href="#projectshowcase">Learn more</a>
        </div>
      </div>
      );
  }
}

/* projects side */
class Projects extends Component {
  render(){
    return(
      <div className="projects_page" id="projectshowcase">
       <Carousel interval={20000} stopOnHover={true} autoPlay={false} infiniteLoop={true} showThumbs={false}>
                <div className="firstSlide">
                    <video className="video-container video-container-overlay" autoPlay={true} loop={true} muted={true} data-reactid=".0.1.0.0">
                    <source type="video/mp4" data-reactid=".0.1.0.0.0" src={rcDemoVid} />
                  </video>

                  <div className="showcasedescription">
                    <h2>RentCalc</h2>
                    <p>
                      A simple tool for roomates who wanna go a lil' RED
                      when it comes to dividing the rent. This neat little
                      app will calculate how much each household member should
                       pay depending on their respective income.
                    </p>
                  </div>
                </div>

                <div className="secondSlide">
                    <video className="video-container video-container-overlay" controls={true} autoPlay={false} loop={true} muted={false} data-reactid=".0.1.0.0">
                    <source type="video/mp4" data-reactid=".0.1.0.0.0" src={noThirthy} />
                    </video>

                  <div className="showcasedescription">
                    <h2>Music Projects</h2>
                    <p>
                      <i>NOTHIRTY</i> is presented as such. Nothing more, nothing less.
                      A musical project from my experimental phase, 
                      with elements of shoegaze, drone, country, synthpop, vaporwave,
                      you name it. 
                      <br/>
                      You can check out other musical projects of mine <a href="music">right here</a>!
                      Or, I highly urge you to check out <a href="https://pinkpeppercorn.bandcamp.com/releases">my self produced Album</a>
                    </p>
                  </div>
                </div>

                <div className="thirdSlide">
                    <img src={writingDemo} />

                    <div className="showcasedescription">
                    <h2>WRITTEN WORKS</h2>
                    <p>
                      Not much more to it. I write, albeit very occasionally. 
                      My written works are mainly fictional, but mostly philosophic,
                      As is the case of <a href="#">20:34</a>, which is my first work on 
                      philosophical fiction.
<br/>
                      <a href="#">Distress</a> is a piece of historic fiction, set in the 16th 
                      century Polish-Lithuanian Commonwealth, it follows the life of a girl seeking 
                      refuge from a past life. Yeah, basically I put a trans gal in the period right 
                      before the 30-years war on a quest to find her brother, another trans, in Amsterdaam. 
                      <br/>
                      Another work worth mentioning is my Thesis on Erraticism, where I explore and 
                      try to lay the foundation for my W.I.P. philosophical theory, as well as explore 
                      my transition and exploration of the consciousness in sort of a memoir fashion.                    
                    </p>
                  </div>
                </div>

                <div className="fourthSlide">
                    <video className="video-container video-container-overlay" controls={false} autoPlay={true} loop={true} muted={true} data-reactid=".0.1.0.0">
                    <source type="video/mp4" data-reactid=".0.1.0.0.0" src={bmDemoVid} />
                    </video>

                  <div className="showcasedescription">
                    <h2>BANCUS MAXIMUS XXIIX</h2>
                    <p>
                      A fake ATM. 
                      Why did I create this? I had the idea while playing the Moomin board game 
                      with my roomates. Somehow, the thought of betting came up to make it more hardcore, 
                      and where'd my brain go with that? Why not play Casino style games (Which I've liked 
                        since childhood) and instead of betting against a company, or other people, I could bet 
                      against a savings account. Whenever I lose, I'll deposit, if I win, I'll withdraw. 
                      <br />
                      I made this app to test my idea on the long run to see if it would be of any profit 
                      to bet against my own self. Now I just needa make the Casino games...
                    </p>
                  </div>
                </div>

            </Carousel>
      </div>
      );
  }
}

/* BIOGRAPHY */
class Biography extends Component {
  
  constructor(props) {
    super(props);
    this.state = {visible: false};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      visible: !state.visible
    }));
  }

  render() {
    const me = <div id="me"> pic of me</div>

    return(
      <div className="biography_page">
      <h1>Biography</h1>
      <p>
      My story probably starts in Stockholm, 1993. It's been a long winding road. Bumps and flat tires along the way, 
      tumult and plot twists. Though the biggest plot twist in my story came late 2014 when I realized I had to come out, 
      sooner or later. It all ended up pretty okay after that. More than okay. 
      <br />
      Born to Chilean parents, both political refugees, I've spent most of my life moving between nation states. At 5 years old 
      I got my first memorable trip to the southwest. Lived mainly in Santiago, but moved around with my mother to both Cartagena 
      and Puerto Montt, both coastal cities. 
      <br />
      In 2002 (ish, if my memory serves me well) I was back in Stockholm, and a few years later I get diagnosed with severe depression 
      and autism. Moving from place to place and radically shifting of cultural environment probably isn't too merciful on my young, already 
      kinda wonky mind; in afterthought, it's all useful experience, but it lent itself for some traumatic few formative years.
      <br />
      Fast forward to around 2006 and we're in Chile again. I haven't been to school in two years, and instead I've focused on becoming a 
      cybernaut. I forge some of my first genuine friendships on long distance and discover internet forums and multiplayer gaming. During 
      this time, I work on polishing my English to fluency. A few years later I start at  Rapa Nui school in Lo Prado, a small municipality 
      located in mid-northwestern Santiago. These are my last two years in Chile and where I learn guitar. 
      <br />
      I would argue these are some of the most important of my formative years. Through trial and error, I learn what human communication is 
      supposed (and not supposed) to be like. I "burst out of my shell", so to speak, and this is where I start to form some semblance of 
      cohesion as an individual. It's hard, it's rough, I could retell the countless times I cried in a corner feeling helplessa and forlorn; 
      but I make good friends, people I shall never forget, people who brought me up and people who brought me down. 

      </p>

        <div id="danger">
        {this.state.visible ? me : ''}
        </div>
        <button type="button" className="btn btn-primary" onClick={this.handleClick}>Me</button>
      </div>
      )
  } 
}

/* SHARK BUTTON */
class DangerButton extends Component {
  
  constructor(props) {
    super(props);
    this.state = {visible: false};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      visible: !state.visible
    }));
  }

  render() {
    const shark = <a href="http://www.animatedimages.org/cat-sharks-516.htm"><img src="http://www.animatedimages.org/data/media/516/animated-shark-image-0085.gif" border="0" alt="animated-shark-image-0085" /></a>;

    return(
      <div className="danger_container">
        <div id="danger">
        {this.state.visible ? shark : ''}
        </div>
        <button type="button" className="btn btn-primary" onClick={this.handleClick}>Danger</button>
      </div>
      )
  } 
}

export default App;
