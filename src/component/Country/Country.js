import React, { useEffect, useState } from 'react';
import Person from '../Person/Person';
import './Country.css'

const Country = () => {
    const [country, setCountry] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
          .then(res => res.json())
          .then(data => setCountry(data))
    },[])

    return (
        <div>
        <h1 style={{textAlign: 'center'}}>All Country Information by React.js</h1>
        <div className="CountryData">
           {/* <h1>This is all data: {country.length}</h1> */}
           {  
               country.map(country => <Person
                key = {country.alpha3Code}
                country={country}
                 currencies={country.currencies[0]
                }></Person>)
               
           }
        </div>
        </div>
    );
};

export default Country;