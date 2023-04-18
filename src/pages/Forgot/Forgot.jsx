import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import Button from '../../components/Button/Button'
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input'

import { Container, Wrapper, Row, TitleLogin, SubtitleLogin } from './styles'
import { AiFillLock } from "react-icons/ai";

// yup utilizado para validação das informações do useForm
const schema = yup.object({
    password: yup.string().min('3', 'Mínimo 3 caracteres').required('Campo obrigatorio'),
    passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'Senha está diferente').required('Campo obrigatorio'),
  }).required();

function Forgot(){
    const navigate = useNavigate();

    // cada alteração feita na hora será verificado se esta dentro da validação
    const { control, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    function handleClickCreate(){
        navigate('/login');
    }

    return (
        <>
        <Header autenticado={false}/>
        <Container>
                <Wrapper>
                    <TitleLogin>Faça seu Login</TitleLogin>
                    <SubtitleLogin>Faça seu login e make the change.</SubtitleLogin>
                    <form>
                        <Input name='password' errorMessage={errors?.password?.message} control={control} placeholder='Senha' type='password' lefticon={<AiFillLock />} />
                        <Input name='passwordConfirm' errorMessage={errors?.passwordConfirm?.message} control={control} placeholder='Confirmar Senha' type='password' lefticon={<AiFillLock />}  />
                        <Button title='Entrar' variant='secondary'  onClick={handleClickCreate} />
                    </form>
                    <Row>
                    </Row>
                </Wrapper>
        </Container>
        </>
    )
}

export default Forgot