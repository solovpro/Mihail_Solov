import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Switch, Route, Redirect, HashRouter} from 'react-router-dom';
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import React from 'react';
import {withSuspense} from "./hoc/WithSuspense";
import {Provider} from "react-redux";
import store from "./redux/store-redux";

const Biography = React.lazy(() => import('./components/Biography/Biography.js'));
const BooksContainer = React.lazy(() => import('./components/Books/BooksContainer.js'));
const VideosContainer = React.lazy(() => import('./components/Video/VideosContainer.js'));
const NewsContainer = React.lazy(() => import('./components/News/NewsContainer.js'));

const App = () => {
    return (
        <HashRouter>
            <Provider store={store}>
                <div className='global'>
                    <div className='line'/>
                    <div className='App'>
                        <div className='h'>
                            <header><Header/></header>
                        </div>
                        <div className='navbar'><Navbar/></div>
                        <div className='content'>
                            <Switch>
                                <Route exact path={'/'}
                                       render={() => <Redirect to={'/main'}/>}/>
                                <Route path={'/main'} render={() => <Main/>}/>
                                <Route path={'/biography'} render={withSuspense(Biography)}/>
                                <Route path={'/books'} render={withSuspense(BooksContainer)}/>
                                <Route path={'/video'} render={withSuspense(VideosContainer)}/>
                                <Route path={'/news'} render={withSuspense(NewsContainer)}/>
                            </Switch>
                        </div>
                    </div>
                </div>
                <footer className='footer'><Footer/></footer>
            </Provider>
        </HashRouter>
    );
}


export default App;
