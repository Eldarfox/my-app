import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

const ContactsPage = () => {
    const title = useSelector(state => state.titleReducer.contactsTitle)
    const dispatch = useDispatch()
    const [input , setInput] = useState('')
    const withParams = () => {
        dispatch({
            type: "WITH_PARAMS",
            payload: 12345
        })
    }

    const addInput = () => {
        dispatch({
            type: "FROM_INPUT" ,
            payload: input
        })
    }
    return (
        <div>

            <h1>{title}</h1>
            <button onClick={withParams}>change title with params</button>
            <p>---------------------------</p>
            <input value={input} type='text' onChange={(e) => setInput(e.target.value)}/>
            <button onClick={addInput}>add</button>
        </div>
    );
};

export default ContactsPage;