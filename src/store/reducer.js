export const reducer = (state, action)=> {
    switch (action.type) {
        case 'add':
            if (state.list.find(item=>item.name === action.newItem.name)) {
                return;
            }
            state.list.push(action.newItem);
            localStorage.setItem('data', JSON.stringify(state));
            return state;
        case 'remove':
            state.list = state.list.filter(item=>item.name != action.removeItem.name);
            state.finished = state.finished.filter(item=>item.name != action.removeItem.name);
            localStorage.setItem('data', JSON.stringify(state));
            return Object.assign({}, state);
        case 'finish':
            state.list = state.list.filter(item=>item.name != action.finishItem.name);
            state.finished.push(action.finishItem);
            localStorage.setItem('data', JSON.stringify(state));
            return Object.assign({}, state);
        case 'get':
            state.list = action.list || [];
            state.finished = action.finished || [];
            return state;
        case 'cancel':
            state.finished = state.finished.filter(item=>item.name != action.cancelItem.name);
            state.list.push(action.cancelItem);
            localStorage.setItem('data', JSON.stringify(state));
            return Object.assign({}, state);
        default:
            return {list: [], finished: []};
    }
};