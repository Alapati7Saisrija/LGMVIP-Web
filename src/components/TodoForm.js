import React, {useState,useEffect,useRef} from 'react';

function TodoForm(props) {
    const[input, setInput]= useState('');
    const inputRef=useRef(null)
    useEffect(()=>{
        inputRef.current.focus()
    })
    const handleChange=e=>{
        setInput(e.target.value);
    };
    const handleSubmit=e=>{
        e.preventDefault();
        props.onSubmit({
            id:Math.floor(Math.random()*10000),
            text:input
        });
        setInput('');
    };
  return (
    <form className='Todo-form' onSubmit={handleSubmit}>
        <input
            type='text'
            placeholder='Title....'
            value={input}
            name='text'
            className='Todo-input'
            onChange={handleChange}
            ref={inputRef}
        />
        <button className='Todo-button'>Add</button>

    </form>
 
  );
}
export default TodoForm;