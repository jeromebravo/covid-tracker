import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Main from './components/Main';
import './App.css';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Main />
                </div>
            </Router>
        </Provider>
    );
}

export default App;
