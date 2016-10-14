import {createStore} from 'redux';
import {reducer} from './reducer';

let store = createStore(reducer);

store.dispatch({
    type:'get',
    list: [
        {
            name:'MacBook',
            describe:'苹果电脑',
            status:'emerge'
        },
        {
            name:'iPhone',
            describe:'苹果手机',
            status:'normal'
        }
    ],
    finished:[
        {
            name:'React',
            describe:'书',
            status:'finished'
        }
    ]
});

export {store};