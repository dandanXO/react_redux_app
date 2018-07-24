import {NEW_POST} from '../actions/types'

const initialState = {
    items:[],
    item:{}
}

export default function(state = initialState, action) {
    console.log(state.items)
    switch(action.type){
        case NEW_POST:
            state.items.push(action.payload)
            return{
                ...state,
                item:action.payload,
               
            }

        default:
            return state
    }
}