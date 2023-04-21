import { useNavigate } from 'react-router-dom'

import Button from '../../components/Button/Button'
import { Container, Title, TitleHighLight, TextContent } from './styles'
import banner from '../../assets/banner.png'
import Header from '../../components/Header/Header'

function Home(){

    const navigate = useNavigate();

    // Navigate para passar para outra page
    function handleClickSignIN(){
        navigate('/login');
    }

    return (
        <>
        <Header/>
        <Container>
            <div>
                <Title>
                    <TitleHighLight>
                        Implemente <br /> 
                    </TitleHighLight> 
                    O seu futoro global agora!
                </Title>
                <TextContent>
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e 
                    encare seu novo desafio profissional, evoluindo com os melhores experts.
                </TextContent>
                <Button title='Começar agora' variant="secondary" onClick={(handleClickSignIN)}></Button>
            </div>
            <div>
                <img src={banner} alt="Imagem principal" />
            </div>
        </Container>
        </>
    )
}

export default Home