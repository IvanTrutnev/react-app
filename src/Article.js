import React, { Component } from 'react';
import CommentsList from './CommentsList';

export default class Article extends Component {
    constructor(props){
        super(props);

        this.state = {
          isOpen: true
        };

    }
    render() {
        const {article} = this.props;
        const {isOpen} = this.state;

        return (
          <div>
            <h2>{article.title}</h2>
            <button onClick={this.toggleOpen}>{isOpen ? 'close': 'open'}</button>
            {this.getBody()}
          </div>
        )
    }

    getBody() {
        if(!this.state.isOpen){
          return null;
        } else {
          const {article} = this.props;
          return <section>
            {article.text}
            <CommentsList comments={article.comments}/>
          </section>
       }
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

}
