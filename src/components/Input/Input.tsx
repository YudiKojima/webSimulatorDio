import { Controller } from 'react-hook-form'

import { InputContainer, IconContainer, InputText, ErroText } from './styles'
import {IInput} from './types';

function Input({ lefticon, name, control, type, errorMessage, ...rest }: IInput) {
    return (
        <div>
        <InputContainer>
            {lefticon ? (<IconContainer>{lefticon}</IconContainer>): null}
            <Controller 
            name={name}
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => <InputText type={type} value={value} onChange={onChange} {...rest} />}
            />
        </InputContainer>
        {errorMessage ? <ErroText>{errorMessage}</ErroText> : null}
        </div>
    )
}

export default Input