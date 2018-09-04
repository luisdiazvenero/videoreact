// console.log("hola lola")

import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
// import Playlist from './src/playlist/components/playlist';
import data from '../api.json';

const homeContainer = document.getElementById('home-container');

//const holaMundo = <h1>Hola vatos locos!</h1>;
// ReactDOM.render(que voy a renderizar, donde lo hare);
render(<Home data={data}/>, homeContainer);
