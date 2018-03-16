import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ListOfCoursesApp from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ListOfCoursesApp />, document.getElementById('root'));
registerServiceWorker();
