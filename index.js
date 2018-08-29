// console.log("hola lola")

import React from 'react';
import { render } from 'react-dom';
import Playlist from './src/playlist/components/playlist';
import data from './src/api.json';

const app = document.getElementById('app');

//const holaMundo = <h1>Hola vatos locos!</h1>;
// ReactDOM.render(que voy a renderizar, donde lo hare);
render(<Playlist data={data} />, app);
