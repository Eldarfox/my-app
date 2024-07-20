import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const CounterPage = () => {
    const count = useSelector(state => state.titleReducer.count)
    const dispatch = useDispatch()
    const plusOne = () => {
        dispatch({
            type: 'PLUS_ONE'
        })
    };
    const minusOne = () => {
        dispatch({
            type: 'MINUS_ONE'
        })
    };
    const plusTen = () => {
        dispatch({
            type: 'PLUS_TEN'
        })
    };
    const minusTen = () => {
        dispatch({
            type: 'MINUS_TEN'
        })
    };
    const reset = () => {
        dispatch({
            type: 'RESET'
        })
    };
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={plusOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={plusTen}>+10</button>
            <button onClick={minusTen}>-10</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};


export default CounterPage;