import { FETCH_ALL,CREATE,EDIT } from '../constants/actionTypes';
const reducer= (posts=[],action) => {
    switch(action.type)
    {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...posts,action.payload];
        case EDIT:
            return posts.map((post)=> (post._id===action.payload._id ? action.payload : post)); 
        default: return posts;
    }
};

export default reducer;
