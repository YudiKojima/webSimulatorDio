import { createContext, useState } from 'react';
import { IAuthContextProviderProps, IAuthContext, ILoginData } from './types'
import { IUser } from '../types/user';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/Api';

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthContextProvider = ({children}: IAuthContextProviderProps) => {
    const [user, setUser] = useState<IUser>({} as IUser);

    const navigate = useNavigate();

    const handleLogin = async (loginData: ILoginData) => {
        try{
            const { data } = await api.get(`users?email=${loginData.email}&password=${loginData.password}`);
            if(data.length === 1){
                setUser(data[0]);
                navigate('/feed');
            }else{
                alert('Usuário não encontrado!');
            }
        }catch{
            alert('Houve um erro, tente novamente.')} 
    }

    const handleLogout = () => {
        setUser({} as IUser);
        navigate('/');
    }

    return (<AuthContext.Provider value={{ user, handleLogin, handleLogout}}>
        {children}
    </AuthContext.Provider>
    );
};