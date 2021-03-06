import React from 'react';
import { AR, Asset } from 'expo';
import { View } from 'react-native'

// Let's alias ExpoTHREE.AR as ThreeAR so it doesn't collide with Expo.AR.
import ExpoTHREE, { AR as ThreeAR, THREE } from 'expo-three';
// Let's also import `expo-graphics`
// expo-graphics manages the setup/teardown of the gl context/ar session, creates a frame-loop, and observes size/orientation changes.
// it also provides debug information with `isArCameraStateEnabled`
import { View as GraphicsView } from 'expo-graphics';



class AugmentedGame extends React.Component {
  // constructor(props){
  //   super(props)
  //   this.navigationOptions = this.navigationOptions.bind(this)
  // }
  static navigationOptions = {
    title: 'See Other Planets',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  }
  componentDidMount() {
    // Turn off extra warnings
    THREE.suppressExpoWarnings(true)
    ThreeAR.suppressWarnings()
  }
  
  render() {
    // You need to add the `isArEnabled` & `arTrackingConfiguration` props.
    // `isArRunningStateEnabled` Will show us the play/pause button in the corner.
    // `isArCameraStateEnabled` Will render the camera tracking information on the screen.
    // `arTrackingConfiguration` denotes which camera the AR Session will use. 
    // World for rear, Face for front (iPhone X only)
    return (
      <GraphicsView
        style={{ flex: 1 }}
        onContextCreate={this.onContextCreate}
        onRender={this.onRender}
        onResize={this.onResize}
        isArEnabled={true}
        isArRunningStateEnabled
        // isArCameraStateEnabled
        arTrackingConfiguration={AR.TrackingConfiguration.World}
      />
    );
  }

  // When our context is built we can start coding 3D things.
  onContextCreate = async ({ gl, scale: pixelRatio, width, height }) => {
    // This will allow ARKit to collect Horizontal surfaces
    AR.setPlaneDetection(AR.PlaneDetection.Horizontal);

    // Create a 3D renderer
    this.renderer = new ExpoTHREE.Renderer({
      gl,
      pixelRatio,
      width,
      height,
    });

    // We will add all of our meshes to this scene.
    this.scene = new THREE.Scene();
    // This will create a camera texture and use it as the background for our scene
    this.scene.background = new ThreeAR.BackgroundTexture(this.renderer);
    // Now we make a camera that matches the device orientation. 
    // Ex: When we look down this camera will rotate to look down too!
    this.camera = new ThreeAR.Camera(width, height, 0.01, 1000);
    
    //sun
    const geometry = new THREE.SphereGeometry(0.2, 0.2, 0.2); //passes the data for a circle
    const material = new THREE.MeshPhongMaterial({
      color: 0xFCD440,
    });
    this.sun = new THREE.Mesh(geometry, material);
    // Place the box 0.4 meters in front of us.
    this.sun.position.z = -0.4 //potentially used to change position based on user data as they move
    this.scene.add(this.sun);

    //neptune
    const neptuneGeometry = new THREE.SphereGeometry(0.1, 0.1, 0.1); //passes the data for a circle
    const neptuneMaterial = new THREE.MeshPhongMaterial({
      color: 0x00BFFF,
    });
    this.neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
    // Place the box 0.4 meters in front of us.
    this.neptune.position.z = -0.6 //potentially used to change position based on user data as they move
    this.neptune.position.y = 0.9
    console.log(this.neptune.position)
    this.scene.add(this.neptune);

    //Mars
     const marsGeometry = new THREE.SphereGeometry(0.1, 0.1, 0.1); //passes the data for a circle
     const marsMaterial = new THREE.MeshPhongMaterial({
       color: 0xC1440E,
     });
     this.mars = new THREE.Mesh(marsGeometry, marsMaterial);
     // Place the box 0.4 meters in front of us.
     this.mars.position.z = 0.6 //potentially used to change position based on user data as they move
     this.mars.position.y = 0.9
     this.mars.position.x = 0.1
     this.scene.add(this.mars);
    
    // Setup a light so we can see the cube color
    // AmbientLight colors all things in the scene equally.
    this.scene.add(new THREE.AmbientLight(0xffffff));

    // Create this cool utility function that let's us see all the raw data points.
    this.points = new ThreeAR.Points();
    // Add the points to our scene...
    this.scene.add(this.points)
  };

  // When the phone rotates, or the view changes size, this method will be called.
  onResize = ({ x, y, scale, width, height }) => {
    // Let's stop the function if we haven't setup our scene yet
    if (!this.renderer) {
      return;
    }
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setPixelRatio(scale);
    this.renderer.setSize(width, height);
  };

  // Called every frame.
  onRender = () => {
    // This will make the points get more rawDataPoints from Expo.AR
    this.points.update()
    // Finally render the scene with the AR Camera
    this.renderer.render(this.scene, this.camera);
  };
}


export default AugmentedGame
