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
            return state;
        case 'finish':
            state.list = state.list.filter(item=>item.name != action.finishItem.name);
            state.finished.push(action.finishItem);
            return state;
        case 'get':
            state.list = action.list;
            state.finished = action.finished;
            return state;
        default:
            return {list: [], finished: []};
    }
};