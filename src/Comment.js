// add Comment component here
import React, {Component} from 'react'
class BlogContent extends React.Component{
  render(){
    return(
      <div class="comment">
      {this.props.commentText}
      </div>
    )
  }
}
