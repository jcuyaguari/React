import React,{useState,useEffect}  from "react";
import { searchPokemon } from "../api"
import Search from '@material-ui/icons/Search'

const Searchbar = () =>{
    const[busqueda,setBusqueda]= useState("");
    const[pokemon,setPokemon]=useState();

    const onChange = (e)=>{
        setBusqueda(e.target.value)
    }

    const onClick = async(e)=>{
        const data = await searchPokemon(busqueda);
        setPokemon(data);
    }

    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="BUSCAR" onChange={onChange}></input>
            </div>
                
            <div className="searchbar-btn">
                <button starticon={<Search/>} onClick={onClick}>BUSCAR</button>
                <a>{busqueda}</a>
            </div>
            
        </div>
    )
}

export default Searchbar;