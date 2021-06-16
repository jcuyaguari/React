import React from 'react';

const Paginacion = (props)=>{
    console.log("PAGINACIOn",props)
    const{clickDerecho,clickIzquierdo,page,totalPaginas} = props;
    return(
        <div className="paginacion">
            <button onClick={clickDerecho}>🔙</button>
            <div>b {page} de {totalPaginas} páginas</div>
            <button onClick={clickIzquierdo}>🔜</button>
        </div>
    )
}

export default Paginacion;