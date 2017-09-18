import React from 'react';
import ReactDOM from 'react-dom';
import { Todos } from './Todos';
import registerServiceWorker from './registerServiceWorker';
import { TODOS } from './mock.data.js';


ReactDOM.render(<Todos todos={TODOS} />, document.getElementById('root'));
registerServiceWorker();
