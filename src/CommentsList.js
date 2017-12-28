import React, {Component} from 'react';
import Comment from './Comment';

// export default function CommentsList({comments}) {
//   const commentElements = comments.map((comment) => <li key={comment.id}><Comment comment={comment}/></li>);
//   return (
//     <div>
//       <button>showComments</button>
//       <ul>
//         {commentElements}
//         </ul>
//     </div>
//   )
// }

export default class CommentsList extends Component {
  constructor(props){
      super(props);

      this.state = {
          isOpen: true
      };

  }

  render() {
    const {isOpen} = this.state;

    return (
      <div>
        <button onClick={this.toggleComments}>{isOpen ? 'Hide Comments': 'Show Comments'}</button>
        {this.getBody()}
      </div>
    )
  }

  getBody() {
    if(this.state.isOpen){
      const {comments} = this.props;
      if(!comments.length) {
        return (
          <span>
          No comments
          </span>
        )
      } else {
        const commentElements = comments.map((comment) => <li key={comment.id}><Comment comment={comment}/></li>);
        return (
          <ul>
            {commentElements}
          </ul>
          )
      }
    } else {
      return null;
    }

  }

  toggleComments = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}
