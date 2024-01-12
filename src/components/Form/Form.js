import './Form.css'
import React from 'react';

import TextInput from '../InputText/InputText';

const Form = ({ metadata }) => {
    return (
        <form>
            {metadata.map(field => {
                return <TextInput key={ field.id } label={field.label} placeholder={field.placeholder} id={field.id }></TextInput>
            })}
        </form>
    )
}

export default Form