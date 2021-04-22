import React from 'react'
import { 

} from 'react-native'
import { RectButtonProps } from 'react-native-gesture-handler'

import {
    ButtonContainer,
    Title,
} from './styles'

interface EnviromentButtonProps extends RectButtonProps {
    title: string
    active?: boolean
}

export default function EnviromentButton ({
    title,
    active = false,
    ...rest
} : EnviromentButtonProps){
    return(
        <ButtonContainer active={active} {...rest}>
            <Title active={active}>
                {title}
            </Title>
        </ButtonContainer>
    )
}