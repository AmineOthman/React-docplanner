import React from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import './ListTop.css';
import { Container, Row, Col } from 'react-grid-system';
import ForPatients from './ForPatients.png';
import ForDoctors from './ForDoctors.png';


var data=[
    {
        for:"For patients",
        description:"Find a doctor, book a visit and solve any health-related doubt",
        pic: ForPatients,
        button:true,
        couleur: '#00ccb1'
        
        
        
    },
    {
        for:"For doctors",
        description:"Save time managing visits and cut no-shows by half",
        pic: ForDoctors,
        couleur: '#3d83df'
        
        

        
    }
]

function TopCard(props){
    return(
        
        data.map((card,i)=>

        <div  className="TopCard" key={i} style={{backgroundColor : card.couleur}}>
            
            
            <h6 className="ForWho">{card.for}</h6>
            <h3 className="Description">{card.description}</h3>
            <div className="Dropdown">
                {card.button && <DropdownButton  id="dropdown-basic-button" title="CHOOSE COUNTRY">
                    <Dropdown.Item href="#/action-1">Compton</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Detroit</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Chicago</Dropdown.Item>
                </DropdownButton>} 
            
            </div>
            <img className="CardLogo"src={card.pic}/>
            
           
        </div>) 
    )
}

function ListTop(){
    return(
        <div>
            <Row>
                     <TopCard item={data}/>
            </Row>
        </div>
    )
}
    
export default ListTop;