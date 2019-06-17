import React from 'react';
import './CityList.css';
import warsaw from './warsaw.png';
import barcelona from './barcelona.png';
import istanbul from './istanbul.png';
import rome from './rome.png';
import mexico from './mexico.png';
import curitiba from './curitiba.png';
import { Container, Row, Col } from 'react-grid-system';

var data=[
    {
        pic: warsaw,
        name: "Warsaw"
        
    },
    {
        pic: barcelona,
        name:"Barcelona"
        
    },
    {
        pic: istanbul,
        name:"Istanbul"
    
    },
    {
        pic: rome,
        name:"Rome"
        
    },
    {
        pic: mexico,
        name:"Mexico-city"
        
    },
    {
        pic: curitiba,
        name:"Curitiba"
        
    }
]

function CityCard(props){
    return(
        props.item.map((card,i)=>
        
        <div className="citycard" key={i}>

            <img className="CityLogo" src={card.pic} alt="test"/>
            
            <div className="flex">
                <h6>{card.name}</h6>
                <button className="button">SEE OPENING</button>

                 
            </div>

        </div>)
    )
}

function CityList(){
    return(
    <div>
        
            <Row>
                <CityCard item={data}/>
            </Row>     
             
    </div>
    )
}
export default CityList;