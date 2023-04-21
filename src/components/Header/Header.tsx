import { useNavigate } from 'react-router-dom';

import Button from '../Button/Button';
import {
    BuscarInputContainer,
    ButtonHeader,
    Container,
    ImageDio,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles';

import logo from '../../assets/logo-dio.png';
import { useAuth } from '../../hooks/useAuth';

function Header(){
    
    const { user, handleLogout } = useAuth();

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
                    {user.id ? (
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
                    {user.id ? (
                        <>
                        <MenuRight>
                        <p>Nome do usuário: {user.name}</p>
                        <p>{user.email}</p>
                        <ButtonHeader onClick={handleLogout}> Sair </ButtonHeader>
                        </MenuRight>
                        <UserPicture src='https://avatars.githubusercontent.com/u/118221566?v=4' />

                        </>
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