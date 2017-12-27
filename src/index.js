import React from 'react';
import ReactDOM from 'react-dom'
import Article from './Article'
import {articles} from './fictures'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Article article={articles[0]}/>, document.getElementById('root'));
registerServiceWorker();
