import React, {Fragment} from 'react';

class noControlado extends React.Component{

    constructor(props){
      super(props);

      this.state = {
        tamaño: '',
        tipo: '',
      };    
    } 

   render() {

      const {
        onChangeTamaño,
        onChangeTipo,
        onClickAceptar,
      }=this.props; 

      const {
        tamaño,
        tipo,
      }=this.state; 


      return (
        <Fragment>
          
          <h1>Hamburguesas</h1>
          
          <h3>Elije Tamaño:</h3>          
          <ul> 
            <li><input onChange={e => this.setState({tamaño: e.target.value})} checked={tamaño === 'chico'} value='chico' type="radio" />Chico</li>
            <li><input onChange={e => this.setState({tamaño: e.target.value})} checked={tamaño === 'mediano'} value='mediano' type="radio" />Mediano</li>
            <li><input onChange={e => this.setState({tamaño: e.target.value})} checked={tamaño === 'grande'} value='grande' type="radio" />Grande</li>
          </ul>

          <h3>Elije tipo de carne:</h3>
          <ul> 
            <li><input onChange={e => this.setState({tipo: e.target.value})} checked={tipo === 'pollo'} value ='pollo' type="radio" />Pollo</li>
            <li><input onChange={e => this.setState({tipo: e.target.value})} checked={tipo === 'res'} value ='res' type="radio" />Res</li>
            <li><input onChange={e => this.setState({tipo: e.target.value})} checked={tipo === 'cerdo'} value ='cerdo' type="radio" />Cerdo</li>
          </ul>

          <button onClick={()=> onClickAceptar(this.state)}>
            Aceptar
          </button>


        </Fragment>
      );
   };
}


export default noControlado;
