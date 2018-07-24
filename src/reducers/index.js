import {combineReducers} from 'redux'
import postRuducer from './postRuducer'
import addPostRudcer from './addPostRudcer'

export default combineReducers({
    posts: postRuducer,
    addpost: addPostRudcer
})