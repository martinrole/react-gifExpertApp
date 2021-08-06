import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({setCategorias}) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputValue = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (inputValue.trim())  {
            setCategorias(categorias => [ inputValue, ...categorias])
            setInputValue('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                value={inputValue}
                onChange={handleInputValue}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategorias : PropTypes.func.isRequired
}

export default AddCategory
