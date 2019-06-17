import React from 'react';

import flag from './flag.png';
import visits from './visits.png';
import patients from './patients.png';
import doctors from './doctors.png';
import { Container, Row, Col } from 'react-grid-system';
import './MidList.css';



var data=[
    {
        logo: flag,
        title: "Leader in 10 countries",
        description:"Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile"
    },
    {
        logo: visits,
        title:"1.5 million appointments",
        description:"booked last month"
    },
    {
        logo: patients,
        title:"30 million unique patients",
        description:"visit us every month"
    },
    {
        logo: doctors,
        title:"2 million active doctors",
        description:"trust in our solutions"
    }
]

function MidCard(props){
    return(
        props.item.map((card,i)=>
        <div className="midcard" key={i}>

            <img className="MidLogo" src={card.logo}/>
            <h3>{card.title}</h3>
            <p>{card.description}</p>

        </div>)
    )
}

function MidList(){
    return(
    <div>
        
            <Row>
                <MidCard item={data}/>
            </Row>     
             
    </div>
    )
}
export default MidList;