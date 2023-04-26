import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import AppRouter from './routers/AppRouter';

import './styles/styles.scss'

ReactDOMClient.createRoot(document.getElementById('app')).render(<AppRouter/>);
