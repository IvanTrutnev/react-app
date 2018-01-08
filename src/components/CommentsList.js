import React, {Component} from 'react';
import Comment from './Comment';
import toggleOpen from '../decorators/toggleOpen'

class CommentsList extends Component {

  static defaultProps = {
    comments: []
  }

  render() {
    const {isOpen} = this.props;

    return (
      <div>
        <button onClick={this.props.toggleOpen}>{isOpen ? 'Hide Comments': 'Show Comments'}</button>
        {this.getBody()}
      </div>
    )
  }

  getBody() {
    const {comments, isOpen} = this.props;
    if(isOpen){
      if(!comments.length) {
        return (
          <div>
            No comments
          </div>
        )
      }
      return (
        <ul>
          {comments.map((comment) => <li key={comment.id}><Comment comment={comment}/></li>)}
        </ul>
        )
    }
  }
}

export default toggleOpen(CommentsList)
