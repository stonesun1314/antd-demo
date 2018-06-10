import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import WrappedFormDemo from './Form/form'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<WrappedFormDemo />, document.getElementById('root'));
registerServiceWorker();

