import React, { Component, Fragment } from 'react';
import Controlado from './controlado';
import NoControlado from './noControlado';

class App extends Component{
  
  constructor(props){
    super(props);

    this.state = {
      tamaño: '',
      tipo: '',
    };    
  }

  render(){
    const { tamaño, tipo } = this.state;

    return (
      <Fragment>

          {/*Este es un Componente Controlado*/}

          <Controlado
            tamaño={tamaño}
            tipo={tipo}
            onChangeTamaño={(tamaño)=>{
              this.setState({tamaño})
            }}
            onChangeTipo={(tipo)=>{
              this.setState({tipo})
            }}
            onClickAceptar={()=>{
              console.log('Controlado',this.state);
            }}
          />

          {/*Este es un Componente No Controlado*/}

          <NoControlado
            onClickAceptar={(datos)=>{
              console.log('noControlado',datos);
            }}
          />

      </Fragment>
    );
  }


}


export default App;
