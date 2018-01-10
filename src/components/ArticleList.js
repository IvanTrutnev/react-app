import React, { Component } from 'react';
import Article from './Article';
import Accordeon from '../decorators/Accordeon'

class ArticleList extends Component{

  render() {
    const articleElements = this.props.articles.map((article) => <li key={article.id}>
      <Article article={article} isOpen = {article.id === this.props.accordeon.openItemID} toggleOpen = {this.props.accordeon.toggleItem(article.id)}/>
    </li>);
    return (
      <ul>
        {articleElements}
      </ul>
    )
  }

}

export default Accordeon(ArticleList);
