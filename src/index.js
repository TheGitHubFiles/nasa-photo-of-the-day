import React from "react";
import theme from './theme/index.js'
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from 'styled-components'

ReactDOM.render(<ThemeProvider theme={theme}><App /></ThemeProvider>, document.getElementById("root"));
