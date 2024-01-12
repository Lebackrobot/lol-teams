import 'bootstrap/dist/css/bootstrap.min.css';

const TextInput = (props) => {
    return (
        <div className='form-group'>
            <label htmlFor={ props.id }>{ props.label }</label>
            <input type='text' className='form-control' placeholder={ props.placeholder } id={ props.id }/>
        </div>
    )
}

export default TextInput