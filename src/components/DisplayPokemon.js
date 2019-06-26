import React from 'react';
import './../App.css';


function Pokemon({pokemonName, pokemonUrl, pokemonStats=[], displayCapture, capturedName=[], capturedUrl=[]}){

let pokeBase = pokemonStats[0];
console.log(pokeBase)


let captured = {name: capturedName, url:capturedUrl}
let capName = captured.name;
let capUrl = captured.url;





    return(
        <div class="con3">

                <div class="con3-pokemon">
                    <div class="con3-pokemon-header">
                        <span>ENCOUNTER</span>
                    </div>
                    
                    <div class="display-pokemon">

                    <div class="pokemon-name" id="pokemon-name"><span id="pname">{pokemonName.toUpperCase()}</span></div>
                    <div class="encountered-pokemon"><img id="ppic" src={pokemonUrl} name={pokemonName} height="250"/></div>
                    <div class="capture-button">
                    <button class="capture button1" onClick={function(){
                            displayCapture(pokemonName, pokemonUrl)
                    }}>CAPTURE</button>
                    </div>
                    </div>

                

                    <div class="con3-details">


                    <div class="con3-det">
                        <span className="pokeStat">DETAILS</span>
                    </div>
                    

                    <div class="con3-information"></div>
                    {pokemonStats.map(stats => {
                        return  (
                            <React.Fragment>
                            <span className="pokeStat">{stats.stat.name} : {stats.base_stat}</span><br/>
                            </React.Fragment>
                            ) 
                        
                        })}
                    </div>
                </div>


                

                <div class="con3-catch">
                    <div class="con3-catch-header">
                        <span>CAPTURED</span>
                        <span class="counter"></span>
                    </div>

                    <div class="pokeList">

                    <div class="pokemon 1" id="pokemon">
                    <div class="poke-img"><img src={capUrl[0]} name={capName[0]} height="220"/></div>
                    <div class="poke-name">
                    <span>{capName[0]}</span>
                    </div>
                    </div>

                    <div class="pokemon 2" id="pokemon">
                    <div class="poke-img"><img src={capUrl[1]} name={capName[1]} height="220"/></div>
                    <div class="poke-name">
                    <span>{capName[1]}</span>
                    </div>
                    </div>

                    <div class="pokemon 3" id="pokemon">
                    <div class="poke-img"><img src={capUrl[2]} name={capName[2]} height="220"/></div>
                    <div class="poke-name">
                    <span>{capName[2]}</span>
                    </div>
                    </div>

                    <div class="pokemon 4" id="pokemon">
                    <div class="poke-img"><img src={capUrl[3]} name={capName[3]} height="220"/></div>
                    <div class="poke-name">
                    <span>{capName[3]}</span>
                    </div>
                    </div>

                    <div class="pokemon 5" id="pokemon">
                    <div class="poke-img"><img src={capUrl[4]} name={capName[4]} height="220"/></div>
                    <div class="poke-name">
                    <span>{capName[4]}</span>
                    </div>
                    </div>

                    <div class="pokemon 6" id="pokemon">
                    <div class="poke-img"><img src={capUrl[5]} name={capName[5]} height="220"/></div>
                    <div class="poke-name">
                    <span>{capName[5]}</span>
                    </div>
                    </div>
                   

                       
                        
                    </div>

                </div>


            </div>
    )
}


function DisplayPokemon({pokemonName, pokemonUrl, pokemonStats=[], displayCapture, capturedName=[], capturedUrl=[]}){
    return(
    <Pokemon 
    pokemonName = {pokemonName} 
    pokemonUrl = {pokemonUrl} 
    pokemonStats = {pokemonStats} 
    displayCapture = {displayCapture} 
    capturedName = {capturedName} 
    capturedUrl = {capturedUrl}/>
    )
    
}

export default DisplayPokemon;