import React from 'react';
import Card from './Card';
import Paginacion from './Paginacion';

const Resultado = (props)=>{
    console.log("PROPS->",props)
    const{pokemons,page,setPage,total} = props;

    const previoIndex = () =>{
        const previoPage = Math.max(page,0)
        setPage(previoPage)
    }

    const nextIndex = () =>{
        const nextPage = Math.min(page,total)
        setPage(nextPage)
    }

    return(
        <div>
            <div className="header">
                <h2>POKEMON</h2>
                <Paginacion page={page+1} totalPaginas={100} onLeftClick={previoIndex} onRightClick={nextIndex}/>
            </div>
            <div className="resultado-grid">
                {pokemons.map((pokemon,idx)=>{
                    return(
                        <Card pokemon={pokemon} key={pokemon.name}></Card>
                        //<div key={idx}>*{idx+1}: {pokemon.name}</div>
                    )
                })}
            </div>
        </div>
    )
}

export default Resultado;