import carroMoto from '../../../../utils/download-5.png';
import * as S from './styles';

function Soluction(){
    const handleButtonClick = () => {
        window.location.href = 'https://ponto-track-40cc3d399503.herokuapp.com/';
    }
    return(
        <S.Section>
            <S.Container>
                <S.Titulo>Tenha a <span>solução</span><br/> para seus medos</S.Titulo>
                <h4>A função primordial de um rastreador veicular é informar a localização exata de seu carro, moto, caminhão ou qualquer outro veículo que esteja sob sua responsabilidade. O percentual de recuperação da Ponto Track é de 100%, o que deixa claro a chance de recuperar seu carro com o melhor rastreador para carro e moto disponível por um preço acessível.</h4>
                <S.Botao type='button' onClick={handleButtonClick}>APROVEITAR PROMOÇÃO</S.Botao>
            </S.Container>
            <S.Aside>
                <img src={carroMoto} />
            </S.Aside>
        </S.Section>
    )
}





export default Soluction;