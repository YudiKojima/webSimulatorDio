import { useNavigate } from 'react-router-dom';

import Button from '../Button/Button';
import {
    Container,
    Row,
    Wrapper,
    BuscarInputContainer,
    Menu,
    MenuRight,
    Input,
    UserPicture,
    ImageDio
} from './styles';

import logo from '../../assets/logo-dio.png'

function Header({ autenticado }){
    const navigate = useNavigate();

    function handleClickHome(){
        navigate('/');
    }

    function handleClickLogin(){
        navigate('/login');
    }

    function handleClickSignIn(){
        navigate('/create');
    }

    return (
        <Wrapper>
            <Container>
                <Row>
                    <ImageDio src={logo} alt="Logo da Dio" onClick={handleClickHome} />
                    {autenticado ? (
                    <>
                        <BuscarInputContainer>
                            <Input placeholder='Buscar...' />
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>
                    ) : null}
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src='https://avatars.githubusercontent.com/u/118221566?v=4' />
                    ) : (
                        <> 
                        <MenuRight>
                        <Button title='Home' onClick={handleClickHome} />
                        </MenuRight>
                        <Button title='Entrar' onClick={handleClickLogin}/>
                        <Button title='Cadastrar' onClick={handleClickSignIn}/>
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
}

export default Header