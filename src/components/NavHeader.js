import React from 'react';
import './../App.css';

import NavLogo from './NavLogo'

function UpdateSelect({items, componentDidUpdate}){
    return(
        <React.Fragment>
            <div className="select"> 
                <select onClick={e => componentDidUpdate(e.target.value)}>
                    {items.map(item => (
                        <option key={item.name} value={item.url}>{item.name}</option>
                    ))}
                </select> 
            </div> 
        </React.Fragment>
    )
}

function DisplayButton({pokemonList, displayRandomPokemon}){
    
    return (
        <div className="con2">
                <div className="con2-greetings">
                    HI! PLAYER!
                </div>

                <div className="con2-explore">

                    <button 
                        onClick = {function() {
                        var id = Math.floor(Math.random() * pokemonList.length);
                        var randomPokemon = pokemonList[id];
                        displayRandomPokemon(randomPokemon)}} className="button btn-round" id="explore">Explore
                    </button>

                </div>
            </div>
    )
}


function NavHeader({regions = [], changeRegion = [], locations = [], changeLocation = [], areas = [], changeArea = [], pokemonList, displayPokemon}){
    return (
        <React.Fragment>
            
        <div className="con1">
            <NavLogo />
            <div className="con1-place">
                <label>Region:</label>
                <UpdateSelect items = {regions} componentDidUpdate={changeRegion}/>
                <label>Location:</label>
                <UpdateSelect items = {locations} componentDidUpdate={changeLocation}/>
                <label>Areas:</label>
                <UpdateSelect items = {areas} componentDidUpdate={changeArea}/>
            </div>
        </div>
        <DisplayButton pokemonList = {pokemonList} displayRandomPokemon = {displayPokemon}
        />
        </React.Fragment>
    )
}

export default NavHeader;