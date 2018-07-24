import {NEW_POST} from '../actions/types'

const initialState = {
    items:[],
    item:{}
}

export default function(state = initialState, action) {
    //console.log('rudtest')
    switch(action.type){
        case NEW_POST:
            return{
                ...state,
                item:action.payload
            }

        default:
            return state
    }
}