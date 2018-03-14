import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppArtist from './components/App-artist';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppArtist />, document.getElementById('root'));
registerServiceWorker();
