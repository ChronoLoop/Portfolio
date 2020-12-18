import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { ThemeProvider } from 'styled-components';
import theme from './themes/theme';
import App from './App';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
    document.getElementById('root')
);
