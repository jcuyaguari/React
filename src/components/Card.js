import React from 'react';

const Card = (props) =>{
    const {pokemon} = props;
    console.log("Cards",pokemon)
    return (
        <div className="card">
            <div className="car-img-container">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} className="card-img"></img>
            </div>
            <div className="card-body">                
                <div className="card-top">
                    <h3>{pokemon.name}</h3>
                    <div># {pokemon.id}</div>
                </div>
                <div className="card-bottom">
                    <div className="card-type">
                        {pokemon.types.map((type,idx)=>{
                            return (
                                <div key={idx} className="card-type-text"> {type.type.name}</div>
                            )
                        })}
                    </div>
                    <div className="favorito">👑</div>
                </div>
            </div>
        </div>
    );
}

export default Card;