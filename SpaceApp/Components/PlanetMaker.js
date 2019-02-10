import ExpoTHREE, { AR as ThreeAR, THREE } from 'expo-three';

// const getX = (centerX, angle, radius) => centerX + Math.cos(angle) * radius
// const getY = (centerY, angle, radius) => centerY + Math.sin(angle) * radius

export const planetMaker = (x, y, z, radius, color, size, angle) => {
  const geometry = new THREE.SphereGeometry(size, size, size);
  const material = new THREE.MeshPhongMaterial({
    color
  });
  const planet = new THREE.Mesh(geometry, material);
  console.log(planet.position)
  planet.position.z = z;
  planet.position.y = y;
  planet.position.x = x;
  return planet
}


export default planetMaker

// 'Mercury'
// Venus
// Earth
// Mars
// Jupiter
// Saturn
// Uranus
// Neptune
