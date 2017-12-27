import React, {Component} from 'react';

export default class Comment extends Component {
    constructor(props){
        super(props);

        this.state = {
            isOpen: true
        };

    }
    render() {
        const {comment} = this.props;
        const {isOpen} = this.state;

        return (
          <div>
            <h3>autor: {comment.user}</h3>
            <section>{comment.text}</section>
          </div>
        )
    }


}
