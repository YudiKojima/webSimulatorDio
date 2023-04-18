import { Controller } from 'react-hook-form'

import { InputContainer, IconContainer, InputText, ErroText } from './styles'

function Input({ lefticon, name, control, errorMessage, ...rest }) {
    return (
        <div>
        <InputContainer>
            {lefticon ? (<IconContainer>{lefticon}</IconContainer>): null}
            <Controller 
            name={name}
            control={control}
            rules={{ required: true }}
            render={({ field }) => <InputText {...field} {...rest} />}
            />
        </InputContainer>
        {errorMessage ? <ErroText>{errorMessage}</ErroText> : null}
        </div>
    )
}

export default Input