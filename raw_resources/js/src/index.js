import React from "react";
import ReactDOM from "react-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { Provider, connect } from "react-redux";
import store from "./store";
import MainContainer from "./components/main";
import { fetchMainMenu } from "./actions/menuActions";


@connect((store)=>{
    return {
        user: store.user.user,
        userFetched: store.user.fetched,
        tweets: store.tweets.tweets
    };
})
export default class MainApp extends React.Component {
    componentWillMount() {
        this.props.dispatch(fetchUser());
    }

    fetchTweets() {
        this.props.dispatch(fetchTweets());
    }

    render() {
      /*  const { user, tweets } = this.props;

        if(!tweets.length) {
            return <button onClick={this.fetchTweets.bind(this)} > Load twits </button>;
        }*/

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