import React from 'react';
import { createAppContainer } from 'react-navigation';
import AppContainer from './src/route'
import './src/config/statusBar'


export default createAppContainer(AppContainer);