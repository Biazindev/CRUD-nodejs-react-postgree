import React from 'react';
import * as S from './styles';

function Estacione() {
    return (
        <S.Section>
            <S.TituloContainer>Números da Ponto Track</S.TituloContainer>
            <div className="numbers">
                <div>
                    <h1>+50</h1>
                    <h4>Colaboradores</h4>
                </div>
                <div>
                    <h1>+129</h1>
                    <h4>Pontos<br/> de Atendimento</h4>
                </div>
                <div>
                    <h1>+1400</h1>
                    <h4>Empresas <br/>confiam na <br/> Ponto Track</h4>
                </div>
            </div>
        </S.Section>
    )
}

export default Estacione;
