import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import Button from '../../components/Button/Button'
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input'

import { Container, Title, Wrapper, Column, Row, TitleLogin, SubtitleLogin } from './styles'
import { AiTwotoneMail, AiFillLock } from "react-icons/ai";

// yup utilizado para validação das informações do useForm
const schema = yup.object({
    name: yup.string().required('Campo obrigatorio'),
    date: yup.string().required('Campo obrigatorio'),
    email: yup.string().email('E-Mail inválido').required('Campo obrigatorio'),
    emailConfirm: yup.string().oneOf([yup.ref('email'), 'null'], 'Email está diferente').required('Campo obrigatorio'),
    password: yup.string().min(3, 'Mínimo 3 caracteres').required('Campo obrigatorio'),
    passwordConfirm: yup.string().oneOf([yup.ref('password'), 'null'], 'Senha está diferente').required('Campo obrigatorio'),
  }).required();

function Create(){
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
        <Header/>
        <Container>
            <Column>
                <Title>
                    Uma plataforma totalmente inovadora e fácil de aprender.
                    Não perca seu tempo e faça já o <strong>CADASTRO!</strong>
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu Cadastro</TitleLogin>
                    <SubtitleLogin>Cria a sua conta para descobrir um novo mundo.</SubtitleLogin>
                    <form>
                        <Input name='name' errorMessage={errors?.name?.message} control={control} placeholder='Nome completo' lefticon={<AiTwotoneMail />} />
                        <Input name='date' type='date' errorMessage={errors?.date?.message} control={control} placeholder='Data de nascimento' lefticon={<AiTwotoneMail />} />
                        <Input name='email' errorMessage={errors?.email?.message} control={control} placeholder='Email' lefticon={<AiTwotoneMail />} />
                        <Input name='emailConfirm' errorMessage={errors?.emailConfirm?.message} control={control} placeholder='Confirmar Email' lefticon={<AiTwotoneMail />} />
                        <Input name='password' errorMessage={errors?.password?.message} control={control} placeholder='Senha' type='password' lefticon={<AiFillLock />}  />
                        <Input name='passwordConfirm' errorMessage={errors?.passwordConfirm?.message} control={control} placeholder='Confirmar Senha' type='password' lefticon={<AiFillLock />}  />
                        <Button title='Cadastrar' variant='secondary' onClick={handleClickCreate} />
                    </form>
                    <Row>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
        </>
    )
}

export default Create