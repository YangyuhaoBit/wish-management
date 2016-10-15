import {createStore} from 'redux';
import {reducer} from './reducer';

let store = createStore(reducer);

let {list, finished} = JSON.parse(localStorage.getItem('data')) || [];

store.dispatch({
    type: 'get',
    list,
    finished
});

export {store};
