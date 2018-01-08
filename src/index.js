import React from 'react';
import ReactDOM from 'react-dom'
import Articlelist from './components/ArticleList'
import {articles} from './fictures'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Articlelist articles={articles}/>, document.getElementById('root'));
registerServiceWorker();
