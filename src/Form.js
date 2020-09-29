import React, {useState} from 'react';

const Form = (props) => {
    const [cityZip, setCityZip]=useState ('')

    const handleSubmit = e =>{
        console.log('handleSubmit clicked')
        e.preventDefault()
        setCityZip('')
    }

    const handleChange = e => {
        console.log('handleChange clicked')
        const zip =e.target.value
        setCityZip(zip)
    }


    return (
        <>
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={cityZip}
                onChange={handleChange}
            />
            <input
                type='submit'
                value='Submit'
            />
        </form>
    </>
    )
}

export default Form