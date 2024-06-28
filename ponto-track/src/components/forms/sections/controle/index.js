import * as S from './styles';
import note from '../../../../utils/note.webp';
import celulares from '../../../../utils/celulares.webp';

function Controle(){
    return(
        <>
        <S.Section>
            <S.Aside>
                <img src={note} />
            </S.Aside>
            <S.Container>
                <h1>No seu computador</h1>
                <h4>No seu computador Um dos recursos disponíveis para a segurança dos veículos é o bloqueador. O bloqueador tem como função o bloqueio do funcionamento do carro, um recurso que impede que o veículo seja levado por criminosos, cortando a alimentação de combustível. Assim o veículo fica parado, sem ter como sair do lugar e facilita ainda mais a recuperação, tendo então um rastreador com segurança extra.</h4>
            </S.Container>
        </S.Section>
        <S.Section>
            <S.Container>
                <h1>No seu celular</h1>
                <h4>Utilizando o sistema de rastreamento da Ponto Track, você terá total visibilidade e controle sobre o veículo utilizado por você e sua família. Nossa ferramenta permite que você saiba onde os motoristas se encontram, como estão dirigindo, qual carro se encontra ligado e outras informações que permite você ter maior segurança e conforto dentro de sua família.</h4>
            </S.Container>
            <S.Aside>
                <img src={celulares} />
            </S.Aside>
        </S.Section>
        </>
    )
}


export default Controle;