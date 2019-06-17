import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import docLogo from './docLogo.png';
import ListTop from './Components/ListTop';
import one from './logos/one.PNG';import two from './logos/two.PNG';import three from './logos/three.PNG';import four from './logos/four.PNG';import five from './logos/five.PNG';
import MidList from './Components/MidList';
import CityList from './Components/CityList';
import { Container, Row, Col } from 'react-grid-system';


function App() {
  
    return(
      <div>
        
        <header>
          <Navbar/>
        </header>

        <body>
          <div className="container">
            <img className="DocLogo" src={docLogo}/>
            <h2 className="TopTitle">Making the healthcare experience more human</h2>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <p>We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.</p>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <p>We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.</p>
              </div>
            </div>

              <ListTop/>

            
            
            <div className="row">
              <div className="col-lg-3">
            
                <h3 className="h3">We are a global company with local culture</h3>
              </div>
              
              <div className="col-lg-8">
                <ul className="LogosList">
                  <li><a href="#"><img src={one}/></a></li>
                  <li><a href="#"><img src={two}/></a></li>
                  <li><a href="#"><img src={three}/></a></li>
                  <li><a href="#"><img src={four}/></a></li>
                  <li><a href="#"><img src={five}/></a></li>
                </ul>
              </div>
            
            </div>
          </div>

          <div className="FluidSection">
            <div className="container" style={{padding:'0px'}}>
              
              <div className="row">
                <div className="col-lg-6">

                  <h3 className="FluidTitle">The world's<br/> biggest healthcare platform</h3>
                  <p>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
              
                </div>
                <div className="col-lg-6">
                  <MidList/>
                </div>
              
              </div>
            
            </div>
          </div>
          
          <div className="BottomSection">
            <div className="container">
              <h3>Improve the lives of millions.<br/> Change yours forever</h3>
              <p>More than 1000 team mates share our same vision, goals and passion.<br/> With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and<br/> Curitiba, our search for great talent never stops.</p>
              <CityList/>
            </div>  
             
            </div>  
              
            
        </body>
        <footer className="footer">
          <p>We are leaders in 10 countries: Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Colombia, Brazil, Argentina and Chile</p>
          <p>This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.</p>
          <p>www.docplanner.com © 2019</p>

        </footer>

      
      </div>
    )
  
}

export default App;