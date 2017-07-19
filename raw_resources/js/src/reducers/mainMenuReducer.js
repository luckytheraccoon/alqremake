export default function reducer(state={
    mainMenu: [],
    fetched: false,
    fetching: false,
    error: null
}, action) {
    switch(action.type) {
    case "FETCH_MAIN_MENU": {
        return {...state, fetching:true};
    }
    }
    return state;
}