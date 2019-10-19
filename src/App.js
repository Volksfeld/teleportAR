import React, { Component } from 'react';
import { View } from 'react-native';
import {
  ViroARSceneNavigator
} from 'react-viro';


const PortalScene = require('./ARScenes/PortalScene');

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ViroARSceneNavigator 
          initialScene={{scene: PortalScene}} />
          
      </React.Fragment>
    );
  }
}

