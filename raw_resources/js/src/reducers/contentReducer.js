export default function reducer(state={
    content: {
        id: null,
        title: null,
        excerpt: null,
        body: null,
        date: null,
        author: null
    },
    fetched: false,
    fetching: false,
    error: null
}, action) {
    switch(action.type) {
    case "FETCH_CONTENT": {
        return {...state, fetching:true};
    }
    case "FETCH_CONTENT_FULFILLED": {
        return {...state, fetching:false, fetched:true, content:action.payload};
    }
    }
    return state;
}