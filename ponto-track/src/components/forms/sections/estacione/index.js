import carroEstacionado from '../../../../utils/carroEstacionado.jpg';
import * as S from './styles';

function Estacione() {
    const handleButtonClick = () => {
        window.location.href = 'https://ponto-track-40cc3d399503.herokuapp.com/';
    };

    return (
        <S.Section>
            <S.ImageWrapper>
                <img src={carroEstacionado} alt="Carro estacionado" />
                <S.Overlay>
                    <h1>Fique Tranquilo(a)</h1>
                    <h2>Estacione sem MEDO</h2>
                    <button type='button' onClick={handleButtonClick}>EU QUERO!</button>
                </S.Overlay>
            </S.ImageWrapper>
        </S.Section>
    )
}







export default Estacione;