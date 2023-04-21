import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";

import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';

import { AiFillLock, AiTwotoneMail } from "react-icons/ai";
import { useAuth } from '../../hooks/useAuth';
import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from './styles';
import { IFormData } from './types';

// yup utilizado para validação das informações do useForm
const schema = yup.object({
    email: yup.string().email('E-Mail inválido').required('Campo obrigatorio'),
    password: yup.string().min(3, 'Mínimo 3 caracteres').required('Campo obrigatorio'),
  }).required();

function Login(){
    const navigate = useNavigate();

    const { handleLogin } = useAuth();
    
    // cada alteração feita na hora será verificado se esta dentro da validação
    const { control, handleSubmit, formState: { errors } } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    // async porque está trazendo a informação do "banco de dados", neste caso a API
    const onSubmit = async (formData: IFormData) => {
       handleLogin(formData);
    };

    function handleClickCreate(){
        navigate('/create');
    }

    function handleClickForgot(){
        navigate('/forgot');
    }

    return (
        <>
        <Header/>
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias 
                    e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu Login</TitleLogin>
                    <SubtitleLogin>Faça seu login e make the change.</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <Input name='email' errorMessage={errors?.email?.message} control={control} placeholder='Email' lefticon={<AiTwotoneMail />} />
                        <Input name='password' errorMessage={errors?.password?.message} control={control} placeholder='Senha' type='password' lefticon={<AiFillLock />}  />
                        <Button title='Entrar' variant='secondary'  type='submit' />
                    </form>
                    <Row>
                        <EsqueciText onClick={handleClickForgot}>Esqueci minha senha</EsqueciText>
                        <CriarText onClick={handleClickCreate}>Criar conta</CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
        </>
    )
}

export default Login