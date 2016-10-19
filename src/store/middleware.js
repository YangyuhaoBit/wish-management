export const storageMiddleware = store=>next=>action=>{
    let result = next(action);
    if(action.type !== 'get'){
        localStorage.setItem('data',JSON.stringify(store.getState()));
    }
    return result;
};