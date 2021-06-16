import './App.css';
import React, { Component } from 'react';

import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Resultado from './components/Resultado';
import { getPokemonData, getPokemons } from './api';


export class App extends Component{
    constructor(props){
      super(props);

      this.state = { 
        data: [],
        pokemons:[],
        pagina:[],
        setPage:[],
        total:[],
        loading:true,
        isFetch:true,
      };
       
    }
  //Trae los pokemones desde la API
  async fetchPokemons (){
    try{
      const datap = await getPokemons(24,25*this.state.pagina);
      console.log('fetchPokemons',datap)
      //this.setState({pokemons:datap.results});
      //Crea 10 promesas diferentes
      const promises = datap.results.map(async(pokemon)=>{
        return await getPokemonData(pokemon.url)
      });
      const results = await Promise.all(promises);
      console.log('',datap)
      this.setState({pokemons:results})
      this.setState({loading:false});
    }catch(e){

    }
  }

  async componentDidMount(){
    this.fetchPokemons();
    this.setState({pagina:this.state.pagina})
    fetch('https://rickandmortyapi.com/api/character/183')
        .then(response=>response.json())
        .then(datos=>{this.setState({datos,isFetch:false});
          console.log('Data->',datos);
        })
        .catch(error=>console.error("Erro->",error));
  }

  render(){
    if(this.state.isFetch){
      return 'Loading...'
    }
    const data = this.state;
    console.log('Este->',data)

    
     return <React.Fragment>
       <div>
         {/* <Funcion></Funcion> */}
         {/* <Form></Form> */}
         <Navbar></Navbar>
         <Searchbar/>
         { this.state.loading ? <div>Cargando Pokemones..🚀</div>: //Si loading es TRUE hace esto this.setState({loading:false});
         <Resultado pokemons={this.state.pokemons} pagina={this.state.pagina} setPage={this.state.setPage}/>
         }
         {this.state.data.map((dat,i)=>{
           return <div key={i}>
             
             <span>{i} <strong>{dat.name}</strong> </span>
           </div>
         })}
       </div>
     </React.Fragment>
   }
}

export default App;
