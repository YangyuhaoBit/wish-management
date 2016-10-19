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

/*let store = createStore(counter);
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

 function fn() {
 return function(next){
 return function(action){
 return next(action);
 }
 }
 }*/

function compose(...funcs) {

    if (funcs.length === 0) {
        return function (arg) {
            return arg;
        };
    }

    if (funcs.length === 1) {
        return funcs[0];
    }

    funcs.reverse();

    let first = funcs[0];
    var rest = funcs.slice(1);
    return function () {
        return rest.reduce(function (composed, f) {
            return f(composed);
        }, first.apply(undefined, arguments));
    };
}

function applyMiddleware(...middlewares) {
    return (next) => (reducer, initialState) => {
        var store = next(reducer, initialState); // 这里的 next 为原先的 createStore
        var dispatch = store.dispatch;
        var chain = [];

        var middlewareAPI = {
            getState: store.getState,
            dispatch: (action) => dispatch(action)
        };
        chain = middlewares.map(middleware => middleware(middlewareAPI));
        dispatch = compose(...chain)(store.dispatch);

        return Object.assign({},store,{dispatch});
    };
}

function middleware({dispatch,getState}){
    return function (next) {
        return function (action) {
            console.log(2);
            return next(action);
        }
    }
}

/*const middleware = ()=> {

};*/

function reducer() {
    console.log(1);
}

let newCreate = applyMiddleware(middleware)(createStore);

let store = newCreate(reducer);

store.dispatch({type: '1111'});