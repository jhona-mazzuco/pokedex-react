import React from 'react';
import ReactDOM from 'react-dom';
import PokedexCenter from "./components/PokedexCenter";
import PokedexLeftPad from "./components/PokedexLeftPad";
import PokedexRightPad from "./components/PokedexRightPad";
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Application, Pokedex } from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <Application>
      <Pokedex>
        <PokedexLeftPad/>
        <PokedexCenter/>
        <PokedexRightPad/>
      </Pokedex>
    </Application>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
