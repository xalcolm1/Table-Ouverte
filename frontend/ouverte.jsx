import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { searchRestaurants } from './actions/restaurant_actions';


document.addEventListener("DOMContentLoaded", () => {
    // let  window.currentUser = fetchCurrentUser()
    let preloadedState = {};
    if(window.currentUser){
        const { currentUser } = window;
        const { id } = currentUser;
        preloadedState = {
            entities: {
                users: {
                    [id]: currentUser
                }
            },
            session: { id }
        }
        
        delete window.currentUser
    }
    const store = configureStore(preloadedState);
    window.getState = store.getState

    window.searchRestaurants = searchRestaurants
    window.dispatch = store.dispatch

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root)
})
