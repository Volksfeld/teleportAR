import React, { Component } from 'react';

import {
  ViroSceneNavigator,
  ViroScene,
  ViroARScene,
  ViroAmbientLight,
  Viro360Video,
  Viro360Image,
  ViroUtils,
  ViroPortal,
  ViroPortalScene,
  Viro3DObject,
} from 'react-viro';

export default class PortalScene extends Component {
  

  render() {
    return (
      <ViroARScene>
        <ViroAmbientLight color="#ffffff" intensity={200}/>
        <ViroPortalScene passable={true} dragType="FixedDistance" onDrag={()=>{}}>
          <ViroPortal position={[0, 0, -1]} scale={[.1, .1, .1]}>
            <Viro3DObject source={require('./assets/portal_ship/portal_ship.vrx')}
              resources={[require('./assets/portal_ship/portal_ship_diffuse.png'),
                          require('./assets/portal_ship/portal_ship_normal.png'),
                          require('./assets/portal_ship/portal_ship_specular.png')]}
              type="VRX"/>
          </ViroPortal>
        <Viro360Image source={require("./assets/forest.jpg")} />
        </ViroPortalScene>
        <ViroPortalScene passable={true} dragType="FixedDistance" onDrag={()=>{}}>
          <ViroPortal position={[1, 0, -1]} scale={[0.15, 0.15, 0.15]}>
            <Viro3DObject source={require('./assets/portal_ship/portal_ship.vrx')}
              resources={[require('./assets/portal_ship/portal_ship_diffuse.png'),
                          require('./assets/portal_ship/portal_ship_normal.png'),
                          require('./assets/portal_ship/portal_ship_specular.png')]}
              type="VRX"/>
          </ViroPortal>
          <Viro360Image source={require("./assets/360_island.jpg")} />
        </ViroPortalScene>
      </ViroARScene>
    );
  }
}

module.exports = PortalScene
