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
          <ViroPortal position={[0, -0.28, -4.75]} scale={[1.80, 1.1, 0.30]}>
            <Viro3DObject source={require('./assets/portal_wood_frame/portal_wood_frame.vrx')}
              resources={[require('./assets/portal_wood_frame/portal_wood_frame_diffuse.png'),
                          require('./assets/portal_wood_frame/portal_wood_frame_normal.png'),
                          require('./assets/portal_wood_frame/portal_wood_frame_specular.png')]}
              type="VRX"/>
          </ViroPortal>
        <Viro360Image source={require("./assets/forest.jpg")} />
        </ViroPortalScene>
      </ViroARScene>
    );
  }
}

module.exports = PortalScene
