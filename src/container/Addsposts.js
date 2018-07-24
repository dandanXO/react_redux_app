import React from 'react';


export const  Addsposts = (props) => {
    console.log(props)
    return (
        <div>

            {props.posts.items.map((item,index) =>{
                return (
                    <div key={index+index}>
                        <h2 key={index}>{item.title}</h2> <p key={index+item}>{item.body}</p>
                    </div>
                );               
            })}
        </div>
    )
}

