import React from 'react';
import styled from 'styled-components'

export class ConversaMensagem extends React.Component{
    state = {
        mensagens: [
            {
            remetente: "",
            conteudo: ""
            } 
        ],
        valorInputRemetente: "",
        valorInputConteudo: ""
    }

    adicionaMensagem = () => {
        const novaMensagem = {
            remetente: this.state.valorInputRemetente,
            conteudo: this.state.valorInputConteudo
        }

        const novoMensagens = [...this.state.mensagens, novaMensagem]

        this.setState({mensagens: novoMensagens})
        this.setState({valorInputConteudo: ""})
    }

    onchangeInputRemetente = (event) => {
        this.setState({valorInputRemetente: event.target.value})
    }

    onChangeInputConteudo = (event) => {
        this.setState({valorInputConteudo: event.target.value})
    }

    render(){
        const listaDeMensagens = this.state.mensagens.map((mensagem) => {
            return(
                <p>
                    <spam>{mensagem.remetente}</spam>
                        {mensagem.conteudo}
                </p>
            )
        })
        return (
            <div>
                <form>
                    <input  value={this.state.valorInputRemetente} onChange ={this.onchangeInputRemetente} placeholder ={"Usuário"}/>
                    <input  value={this.state.valorInputConteudo} onChange={this.onChangeInputConteudo} placeholder ={"Mensagem"}/>
                    <button onClick={this.adicionaMensagem}>Enviar</button>
                </form>
                <div>{listaDeMensagens}</div>
            </div>
        )
    }  
 }