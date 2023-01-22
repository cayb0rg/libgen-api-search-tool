import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from '/src/components/App.js';
import '/src/index.scss';

ReactDOM.render(<Router><App/></Router>, document.getElementById('main'));
