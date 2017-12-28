import React, {Component} from 'react';
import Comment from './Comment';

export default class CommentsList extends Component {
  static defaultProps = {
    comments: []
  }
  // ES6 Syntax
  // constructor(props){
  //     super(props);
  //
  //     this.state = {
  //       isOpen: true
  //     };
  //
  // }

  //ES7 Syntax
  state = {
    isOpen: true
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

  toggleComments = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}
