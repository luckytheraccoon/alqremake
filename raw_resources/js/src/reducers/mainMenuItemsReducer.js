export default function reducer(state={
    mainMenuItems: [],
    fetched: false,
    fetching: false,
    error: null
}, action) {
    switch(action.type) {
    case "FETCH_MAIN_MENU_ITEMS": {
        return {...state, fetching:true};
    }
    case "FETCH_MAIN_MENU_ITEMS_FULFILLED": {
        return {...state, fetching:false, fetched:true, mainMenuItems:action.payload};
    }
    }
    return state;
}