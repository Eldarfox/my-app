const initialState = {
    title: "geeks",
    aboutTitle: "hello geeks ",
    contactsTitle: '' ,
    count: 0
}

export default function reducer(state = initialState, action){
    if (action.type === 'CHANGE_TITLE'){
        return {...state ,title: 'geeks online '}
    }else if (action.type === 'CHANGE_ABOUT_TITLE') {
        return {...state, aboutTitle: 'GOOD BYE '}
    }else if (action.type === 'WITH_PARAMS') {
        return {...state, contactsTitle: action.payload}
    }else if (action.type === 'FROM_INPUT') {
        return {...state, contactsTitle: action.payload}
    }else if (action.type === 'PLUS_ONE') {
        return { count: state.count + 1 };
    } else if (action.type === 'MINUS_ONE') {
        return { count: state.count > 0 ? state.count - 1 : 0 };
    } else if (action.type === 'PLUS_TEN') {
        return { count: state.count + 10 };
    } else if (action.type === 'MINUS_TEN') {
        return { count: state.count > 10 ? state.count - 10 : 0 };
    } else if (action.type === 'RESET') {
        return { count: 0 };
    }

    return state
}


