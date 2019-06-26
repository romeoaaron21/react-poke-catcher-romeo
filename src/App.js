import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

import { pokeApi } from './config/axiosConfig';
import NavHeader from './components/NavHeader';
import DisplayPokemon from './components/DisplayPokemon'


export default class App extends Component{
  constructor(){
    super();
      this.state = {
        regions: [],
        locations: [],
        areas: [],
        possibleEncounters: [],
        randomPokemonUrl: '',
        randomPokemonName: '',
        randomPokemonStats: [],
        capturedPokemonName: [],
        capturedPokemonUrl: [],
      }
  }

  componentDidMount(){
    pokeApi
    .get('region')
    .then(res => {
      return {
        regions: res.data.results,
      };
    })
    .then(customRes => {
      return pokeApi.get(`region/${customRes.regions[0].name}`).then(res => {
        customRes.locations = res.data.locations;
        return customRes;
      });
    })
    .then(customRes => {
      return pokeApi
        .get(`location/${customRes.locations[0].name}`)
        .then(res => {
          customRes.areas = res.data.areas;
          return customRes;
        });
    })
    .then(customRes => {
      return pokeApi
        .get(`location-area/${customRes.areas[0].name}`)
        .then(res => {
          customRes.possibleEncounters = res.data.pokemon_encounters;
          return customRes;
        });
    })
    .then(customRes => {
      this.setState({
        loading: false,
        regions: customRes.regions,
        locations: customRes.locations,
        areas: customRes.areas,
        possibleEncounters: customRes.possibleEncounters,
      });
    });
  }

  componentDidUpdate = (Url) => {
    if(`${Url}`.includes("region")){
      axios.get(Url).then(res => {
        this.setState({
          locations: res.data.locations
        })
      })
  //    console.log(this.state.locations)
    }
    else if(`${Url}`.includes("location")){
      axios.get(Url).then(res => {
        this.setState({
          areas: res.data.areas
        })
      })
  //    console.log(this.state.areas)
    }
  }

  componentDidUpdateArea = (Url) => {
    axios.get(Url).then(res => {
      this.setState({
        possibleEncounters: res.data.pokemon_encounters
      })
    })
 //   console.log(this.state.possibleEncounters)
  }

  displayRandomPokemon = (randomPokemon) => {
    axios
      .get(randomPokemon.pokemon.url)
      .then(res => {
        this.setState({
          randomPokemonUrl: res.data.sprites.front_default,
          randomPokemonName: res.data.name,
          randomPokemonStats: res.data.stats
        })
      })
  //    console.log(this.state.randomPokemonUrl, this.state.randomPokemonName)
  }

  displayCapture = (pokemonName, pokemonUrl) => {
    this.setState({
      capturedPokemonName: [...this.state.capturedPokemonName, pokemonName],
      capturedPokemonUrl: [...this.state.capturedPokemonUrl, pokemonUrl],
    })
  }





  render(){
    // console.log(this.state.capturedPokemonName)
    // console.log(this.state.capturedPokemonUrl)
    return (
      <React.Fragment>
        <div className="container">
        <NavHeader 
        regions = {this.state.regions}
        changeRegion={this.componentDidUpdate}

        locations = {this.state.locations}
        changeLocation={this.componentDidUpdate}

        areas = {this.state.areas}
        changeArea={this.componentDidUpdateArea}

        pokemonList = {this.state.possibleEncounters}
        displayPokemon = {this.displayRandomPokemon}
        />

      <DisplayPokemon 
      pokemonName = {this.state.randomPokemonName}
      pokemonUrl = {this.state.randomPokemonUrl}
      pokemonStats = {this.state.randomPokemonStats}
      displayCapture = {this.displayCapture}
      capturedName = {this.state.capturedPokemonName}
      capturedUrl = {this.state.capturedPokemonUrl}
      />
        </div>
      </React.Fragment>
      
    )
  }
}
