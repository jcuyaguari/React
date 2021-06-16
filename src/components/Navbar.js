import React from 'react';

const Navbar = ()=>{
    let urlimg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
    return (
        <nav>
            <div>
            <img src= {urlimg} alt="logo" className="navbar-logo"></img>
            </div>
            <div>
                🏠  
            </div>
        </nav>
    )    
}

export default Navbar;