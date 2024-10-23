import './Country.css'
import { useState } from 'react';
export default function Country({handelVisitedCountry,country}){

   const {name,area,flags,population}=country;
   const [visit,setVisit]=useState("Visit");
   function handelVisit(){
    if(visit=="Visit"){
        setVisit("Visited");
    }
    else{
        setVisit("Visit");
    }
   }

  
    return(
        <>
        <div className={visit=="Visited"? "visited":"country"}>
            <h4>Name: {name.common}</h4>
            <img style={{height:"100px"}} src={flags.png} alt="" />
            <p>Area: {area}</p>
            <p>Area: {population}</p>
            <button className={visit=="Visited"? "visited-btn":"visit-btn"} onClick={handelVisit}>{visit}</button>
            <div>
            <button onClick={()=>handelVisitedCountry(country)} className='visit-btn'>Mark as visited</button>
          </div>
        </div>
       
        
        </>
    )
}