import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App'
import {articles} from './fictures'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App articles={articles}/>, document.getElementById('root'));
registerServiceWorker();
