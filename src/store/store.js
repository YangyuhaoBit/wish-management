import {createStore, applyMiddleware} from 'redux';
import {reducer} from './reducer';
import {storageMiddleware} from './middleware';

const createStoreWithMiddleware = applyMiddleware(storageMiddleware)(createStore);

let store = createStoreWithMiddleware(reducer);

let {list = [], finished = []} = JSON.parse(localStorage.getItem('data'));

store.dispatch({
    type: 'get',
    list,
    finished
});

export {store};
