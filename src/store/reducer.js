export const reducer = (state, action)=> {
    switch (action.type) {
        case 'add':
            if (state.list.find(item=>item.name === action.newItem.name)) {
                return;
            }
            state.list.push(action.newItem);
            return state;
        case 'remove':
            state.list = state.list.filter(item=>item.name != action.removeItem.name);
            state.finished = state.finished.filter(item=>item.name != action.removeItem.name);
            return Object.assign({}, state);
        case 'finish':
            state.list = state.list.filter(item=>item.name != action.finishItem.name);
            state.finished.push(action.finishItem);
            return Object.assign({}, state);
        case 'get':
            state.list = action.list || [];
            state.finished = action.finished || [];
            return state;
        case 'cancel':
            state.finished = state.finished.filter(item=>item.name != action.cancelItem.name);
            state.list.push(action.cancelItem);
            return Object.assign({}, state);
        default:
            return {list: [], finished: []};
    }
};