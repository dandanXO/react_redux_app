import React, { Component } from 'react'
import {connect} from 'react-redux'
import propsTypes from 'prop-types'
import {createPost} from '../actions/postAction'
import store from '../store'



class Postform extends Component {
    
    constructor(props){
        super(props)
        this.state={
            title:'',
            body:'',
            whattyouadd:''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }
    
    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit(e){
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        }
        this.props.createPost(post);
      
        console.log(this.props.addpost)
        
   }


  
    render() {
        
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit = {this.onSubmit}>
                    <div>
                        <label>Title:</label>
                        <br/>
                        <input type="text" name="title" onChange={this.onChange} value={this.state.title} />
                    </div>
                    <br />
                    <div>
                        <label>Body:</label>
                        <br/>
                        <textarea name="body" onChange={this.onChange} value={this.state.body}/>
                    </div>
                    <br />
                    <button type="submit" >Submit</button>
                    <br />
                    
                </form>
                <p  value='test'>what I add:</p>
                title:
               { this.props.addpost.item.title}
               <br/>
               body:
               { this.props.addpost.item.body}
            </div>
        )
    }

}

Postform.propTypes = {
    createPost:propsTypes.func.isRequired,
    addpost: propsTypes.object.isRequired
}

const  mapStateToProps = state => ({
    
    addpost: state.addpost
})

export default connect(mapStateToProps,{createPost})(Postform)