import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FancyMap from './FancyMap';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<FancyMap />, document.getElementById('root'));
registerServiceWorker();
