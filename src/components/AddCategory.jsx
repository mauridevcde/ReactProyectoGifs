import { useState } from 'react';

export const AddCategory = ( { onNewCategory } ) => {

    const [inputValue, setInputValue] = useState('one punch')

    const onInputChange = (event) => {

        setInputValue(event.target.value);

    }

    const onSubmit = (event) => {

        event.preventDefault();

        console.log(inputValue)

        if( inputValue.trim().length <= 0 ) return;

        onNewCategory(inputValue);

        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}