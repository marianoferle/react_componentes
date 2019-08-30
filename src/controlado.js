import React, { Fragment } from 'react';

function Controlado(props){

  const {tamaño,tipo,onChangeTamaño,onChangeTipo,onClickAceptar}=props;

    return (
        <Fragment>          
          <h1>Hamburguesas</h1>
          
          <h3>Elije Tamaño:</h3>          
          <ul> 
            <li><input onChange={e => onChangeTamaño(e.target.value)} checked={tamaño === 'chico'} value='chico' type="radio" />Chico</li>
            <li><input onChange={e => onChangeTamaño(e.target.value)} checked={tamaño === 'mediano'} value='mediano' type="radio" />Mediano</li>
            <li><input onChange={e => onChangeTamaño(e.target.value)} checked={tamaño === 'grande'} value='grande' type="radio" />Grande</li>
          </ul>

          <h3>Elije tipo de carne:</h3>
          <ul> 
            <li><input onChange={e => onChangeTipo(e.target.value)} checked={tipo === 'pollo'} value ='pollo' type="radio" />Pollo</li>
            <li><input onChange={e => onChangeTipo(e.target.value)} checked={tipo === 'res'} value ='res' type="radio" />Res</li>
            <li><input onChange={e => onChangeTipo(e.target.value)} checked={tipo === 'cerdo'} value ='cerdo' type="radio" />Cerdo</li>
          </ul>

          <button onClick={onClickAceptar}
          >Aceptar</button>
        </Fragment>
    );

}


export default Controlado;
