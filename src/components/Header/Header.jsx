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

    function handleClickSignIN(){
        navigate('/');
    }

    return (
        <Wrapper>
            <Container>
                <Row>
                    <ImageDio src={logo} alt="Logo da Dio" onClick={handleClickSignIN} />
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
                        <Button title='Home' onClick={handleClickSignIN} />
                        </MenuRight>
                        <Button title='Entrar'/>
                        <Button title='Cadastrar'/>
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
}

export default Header