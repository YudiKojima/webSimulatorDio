import Card from '../../components/Card/Card'
import { Container, Title, TitleHighLight, Column } from './styles'
import UserInfo from '../../components/UserInfo/UserInfo'
import Header from '../../components/Header/Header'

function Feed(){
    return (
        <>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighLight># RANKING 5 TOP DA SEMANA</TitleHighLight>
            <UserInfo nome='Yudi Kojima' percentual={100} image='https://avatars.githubusercontent.com/u/118221566?v=4' />
            <UserInfo nome='Yudi Kojima' percentual={65} image='https://avatars.githubusercontent.com/u/118221566?v=4' />
            <UserInfo nome='Yudi Kojima' percentual={45} image='https://avatars.githubusercontent.com/u/118221566?v=4' />
            <UserInfo nome='Yudi Kojima' percentual={23} image='https://avatars.githubusercontent.com/u/118221566?v=4' />
            <UserInfo nome='Yudi Kojima' percentual={12} image='https://avatars.githubusercontent.com/u/118221566?v=4' />
            </Column>    
        </Container>
        </>
    )
}

export default Feed