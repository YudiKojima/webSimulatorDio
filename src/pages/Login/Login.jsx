import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import Button from '../../components/Button/Button'
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input'
import { api } from '../../services/Api';

import { Container, Title, Wrapper, Column, Row, TitleLogin, SubtitleLogin, EsqueciText, CriarText } from './styles'
import { AiTwotoneMail, AiFillLock } from "react-icons/ai";

// yup utilizado para validação das informações do useForm
const schema = yup.object({
    email: yup.string().email('E-Mail inválido').required('Campo obrigatorio'),
    password: yup.string().min('3', 'Mínimo 3 caracteres').required('Campo obrigatorio'),
  }).required();

function Login(){
    const navigate = useNavigate();

    // cada alteração feita na hora será verificado se esta dentro da validação
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    // async porque está trazendo a informação do "banco de dados", neste caso a API
    const onSubmit = async formData => {
        try{
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
            if(data.length === 1){
                navigate('/feed');
            }else{
                alert('Usuário não encontrado!');
            }
        }catch{
            alert('Houve um erro, tente novamente.')}
    };

    return (
        <>
        <Header autenticado={false}/>
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias 
                    e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubtitleLogin>Faça seu login e make the change.</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <Input name='email' errorMessage={errors?.email?.message} control={control} placeholder='Email' lefticon={<AiTwotoneMail />} />
                        <Input name='password' errorMessage={errors?.password?.message} control={control} placeholder='Senha' type='password' lefticon={<AiFillLock />}  />
                        <Button title='Entrar' variant='secondary'  type='submit' />
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText>Criar conta</CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
        </>
    )
}

export default Login