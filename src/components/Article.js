import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import CommentsList from './CommentsList';
import toggleOpen from '../decorators/toggleOpen'

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired
    }

    componentWillReceiveProps(nextProps){
      console.log('update', this.props.isOpen, nextProps.isOpen);
    }

    componentWillMount() {
      console.log('will mount');
    }

    render() {
        const {article, isOpen, toggleOpen} = this.props;

        return (
          <div ref = {this.setContainerRef}>
            <h2>{article.title}</h2>
            <button onClick={toggleOpen}>{isOpen ? 'close': 'open'}</button>
            {this.getBody()}
          </div>
        )
    }

    setContainerRef = ref => {
      this.container = ref;
      console.log(ref);
    }

    componentDidMount() {
      console.log('did mount');
    }

    getBody() {
      const {article, isOpen} = this.props;
        if(!isOpen){
          return null;
        } else {
          return <section>
            {article.text}
            <CommentsList comments={article.comments} ref = {this.setCommentsRef}/>
          </section>
       }
    }

    setCommentsRef = ref => {
      console.log(findDOMNode(ref));
    }


}

export default Article
