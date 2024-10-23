import { useEffect } from "react";
import { useState } from "react";
import './Countries.css';
import Country from "../Country/country";

export default function Countries(){
    const [countries,setCountries]=useState([]);
    const [visitedCountry,setVisitedCountry]=useState([]);

    function handelVisitedCountry(country){
        // console.log("ok")
        const newVisitedCountry=[...visitedCountry,country];
        setVisitedCountry(newVisitedCountry);
    }


useEffect(()=>{
    fetch("https://restcountries.com/v3.1/all")
    .then((response)=>response.json())
    .then((data)=>setCountries(data))
},[]);
    return(
        <>

<div>
                <div>
                    <h3>Visited Country: {visitedCountry.length}</h3>
                    <div  className="country-container">
                    {
                        visitedCountry.map((country) => (
                     
                            <div className="country-visited"
                             key={country.cca3}>
                                <h4>Name: {country.name.common}</h4>
                                <img style={{ height: "100px" }} src={country.flags.png} alt={country.name.common} />
                                <p>Area: {country.area}</p>
                                <p>Population: {country.population}</p>
                            </div>
                          
                        ))
                    }
                      </div>
                </div>


            <h3>Total Countries: {countries.length}</h3>
          <div className="country-container">
            {
                countries.map(country=><Country
                key={country.cca3}
                country={country} 
                handelVisitedCountry={handelVisitedCountry}
                />)

            }
          </div>
          
        </div>
       
        
        
        
        </>
    )
}