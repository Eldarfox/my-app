import React from 'react';
import {useSelector, useDispatch} from "react-redux";

const MainPage = () => {
    const mainTitle = useSelector(state => state.title)
    const dispach = useDispatch()

    const changeTitle = () => {
        dispach({
            type: 'CHANGE_TITLE'
        })
    }

    return (
        <div>
            <h1>{ mainTitle }</h1>
            <button onClick={changeTitle}>Change title</button>
        </div>
    );
}

export default MainPage;





