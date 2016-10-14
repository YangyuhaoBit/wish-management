const counter = (state = 0, action)=> {
    if (!action) {
        return state;
    }
    switch (action.type) {
        case 'inc':
            return state + 1;
            break;
        case 'dec':
            return state - 1;
            break;
        default:
            return state;
            break;
    }
};

// console.log(counter(undefined, {type: 'inc'})); // 输出1
// console.log(counter(10, {type: 'dec'})); // 输出9

const createStore = (reducer) => {
    let state,
        listeners = [];
    const getState = ()=> {
        return state;
    };
    const dispatch = (action)=> {
        state = reducer(state, action);
        listeners.forEach(fn => fn());
    };
    dispatch();
    const subscribe = (listener)=> {
        listeners.push(listener);
        return function () {
            listeners = listeners.filter(fn => fn != listener);
        }
    };
    return {
        getState,
        dispatch,
        subscribe
    };
};

let store = createStore(counter);
const render = ()=> { // 实现一个简单的viewRender
    document.body.innerHTML = store.getState();
};
render();
let unsubscribe = store.subscribe(function(){ // 监听state的改变
    render();
    console.log(store.getState());
    if(store.getState() == 10){
        unsubscribe();
    }
});
document.addEventListener('click', function () { // 用户行为触发dispatch
    store.dispatch({type: 'inc'})
});
