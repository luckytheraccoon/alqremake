import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import MainContainer from "./components/main";

class MainApp extends React.Component {

    render() {
        return (
            <MainContainer />
        );
    }
}

ReactDOM.render(
    <Provider store={store}> 
        <MainApp /> 
    </Provider>,
    document.getElementById("root")
);

/*
store.dispatch({
    type: "FETCH_USERS",
    payload: axios.get("http://rest.learncode.academy/api/lucastest/users")
});
store.dispatch((dispatch)=>{
    dispatch({type: "FETCH_USERS_START"});

    axios.get("http://rest.learncode.academy/api/lucastest/users")
        .then((response)=> {
            dispatch({type: "RECEIVE_USERS", payload: response.data});
        })
        .catch((error)=>{
            dispatch({type: "FETCH_USERS_ERROR", payload: error});
        });

    dispatch({type: "bar"});
});

*/