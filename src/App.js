import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const WhatsContainer = styled.div`
  border: 1px solid gray;
  width: 45vw;
  height: 100vh;
  display: flex;
  display: flex;
  flex-direction: column;
  background-color: lightgray;
    
`

const WhatsMain = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column-reverse;
  height: 100%;
  
`

const WhatsFooter = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 5px;

   
`
const PrimeiroInput = styled.input`
  width: 15vh;
  border-radius: 10px;
  padding: 5px;
  margin: 0 5px;
`
const SegundoInput = styled.input`
  width: 100%;
  border-radius: 10px;
  padding: 5px;
  margin: 0 5px;
`
const StiloButton = styled.button` 
  width: 15vh;
  border-radius: 10px;
  padding: 5px;
  margin: 0 5px;
  background-color: lightgreen;
`




class App extends React.Component {
  state = {
    chat: [
      {
        usuario: '',
        mensagem: ''
      },
      {
        usuarioEnviar: '',
        mensagemEnviar: ''
      }
      ],
  };

  adicionaMensagem = () => {
    const comentario = {
      usuario: this.state.usuarioEnviar,
      mensagem: this.state.mensagemEnviar,
      

    };

    const comentarios = [comentario, ...this.state.chat];

    this.setState({
      chat: comentarios,
      usuarioEnviar: "",
      mensagemEnviar: ""
    });
  };

  onChangeUsuario = (event) => {
     this.setState({usuarioEnviar: event.target.value})
  }

  onChangeMensagem = (event) => {
    this.setState({mensagemEnviar: event.target.value})
 }

  render(){

    const listaDeComponentes = this.state.chat.map((chat) => {
      return(
        
         <p>
         <strong>{chat.usuario}</strong> {chat.mensagem}

         </p>
         
      
      );
    });  
    
    return (

    <MainContainer>
        <WhatsContainer>
   
            <WhatsMain>
                {listaDeComponentes}
            </WhatsMain>

            <WhatsFooter>
            <PrimeiroInput
                placeholder="Usuário"
                value={this.state.usuarioEnviar}
                onChange={this.onChangeUsuario}
            />
            <SegundoInput
                placeholder="Mensagem"
                value={this.state.mensagemEnviar}
                onChange={this.onChangeMensagem}
            />
            <StiloButton onClick={this.adicionaMensagem}>Enviar</StiloButton>
        
             </WhatsFooter>
      
     
        </WhatsContainer>

    
      </MainContainer> 
    )
  }
}

export default App;