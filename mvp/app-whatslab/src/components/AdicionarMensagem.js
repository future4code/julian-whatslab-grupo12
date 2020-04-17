import React from 'react';
import styled from 'styled-components'

export function AdicionarMensagem (){
    return(
        <div>
            <form>
                <input placeholder ={"Usuário"}/>
                <input placeholder ={"Mensagem"}/>
                <button>Enviar</button>
            </form>
        </div>
    )
}