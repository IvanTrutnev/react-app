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
    const {comments} = this.props;
    const {isOpen} = this.state;

    const commentElements = comments.map((comment) => <li key={comment.id}><Comment comment={comment}/></li>);
    return (
      <div>
        <button>showComments</button>
        <ul>
          {commentElements}
          </ul>
      </div>
    )
  }
}
