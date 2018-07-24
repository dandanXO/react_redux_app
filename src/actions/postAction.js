import {FETCH_POSTS,NEW_POST} from './types'

export const fetchPosts = () =>dispatch => {
        //console.log('fetching')
        fetch   ('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posttts => dispatch({
            type: FETCH_POSTS,
            payload: posttts
        })
        
    )

}

export const createPost = (postData) =>dispatch => {
    dispatch({
        type: NEW_POST,
        payload: postData
    }) 

}

