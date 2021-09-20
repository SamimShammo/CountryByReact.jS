import './Person.css';
import React from 'react';

const Person = (props) => {

    const {flag, population, name, region, alpha2Code} = props.country
    return (
        <div className="Coun">
          <div>
              
             <h2 className="population">This is: {name}</h2>
             <img className="flagImg" src={flag} alt="" />
             <h3 className="population">Population: {population}</h3>
             <h4 className="population">Region: {region} </h4>
             {/* <h4 className="population">Region: {alpha2Code} </h4> */}
             <h4 className="population">Symbol: {props.currencies.symbol} </h4>
          </div>

        </div>
    );
};

export default Person;