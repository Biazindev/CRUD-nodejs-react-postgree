import * as S from './styles';
import callcenter from '../../../../utils/CALLCENTER.webp';
import rastreador from '../../../../utils/rastreador.webp';
import localizacao from '../../../../utils/localização.webp';
import territorio from '../../../../utils/territorio.webp';

function Works() {

    return(
    <S.Container>
        <S.Titulo>Muitos <span>serviços</span> para você</S.Titulo>
       <S.Card>
       <S.CardA>
       <img src={callcenter} />
            <h3>Central 24Hrs</h3>
            <h5>Atendimento humanizado, pronto para te atender</h5>
       </S.CardA>
        <S.CardB>
        <img src={rastreador} />
            <h3>Rastreador e Bloqueador</h3>
            <h5>Mantenha seu carro seguro o tempo todo</h5>
        </S.CardB>
        <S.CardC>
        <img src={localizacao} />
            <h3>Em todo o território nacional</h3>
            <h5>Seu veículo seguro em qualquer lugar do país</h5>
        </S.CardC>
        <S.CardD>
        <img src={territorio} />
            <h3>Localização exata</h3>
            <h5>Em ruas, matas, ou galpões, não importa. Nós encontramos</h5>
       </S.CardD>
       </S.Card>
    </S.Container>
    )
}

export default Works;