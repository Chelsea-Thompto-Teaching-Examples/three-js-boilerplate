// client-side js
// run by the browser each time your view template is loaded

// Extract globals, otherwise linting gets angry
const { THREE } = window;

// Create a scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0xdfdfdf);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth/2, window.innerHeight/2);
document.body.appendChild(renderer.domElement);

// Add a polygon to the scene
const geometry = new THREE.IcosahedronGeometry(1, 0);
const material = new THREE.MeshStandardMaterial({ color: 0x2E8E99});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Add Torus
//const geometry2 = new THREE.TorusGeometry( 1, .4, 16, 100 );
//const material2 = new THREE.MeshBasicMaterial( { color: 0xfdff02 } );
//const torus = new THREE.Mesh( geometry2, material2 );
//scene.add( torus );

// add wireframe to shape
const wireframe = new THREE.WireframeGeometry( geometry );
const line = new THREE.LineSegments( wireframe );
line.material.depthTest = false;
line.material.opacity = 0.8;
line.material.transparent = false;
scene.add(line);

// Position our camera so we can see the shape
camera.position.z = 5;

// Add a directional light to the scene
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
scene.add(directionalLight);

// Add an ambient light to the scene
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);

// Start the render loop
function render() {
  requestAnimationFrame(render);

  // Rotate our shape
  cube.rotation.x += 0.02;
  cube.rotation.y += 0.02;
  line.rotation.x += 0.02;
  line.rotation.y += 0.02;
  //camera.rotation.z += .1;
  //torus.rotation.x += 0.01;
  

  renderer.render(scene, camera);
}
render();

function onWindowResize() {
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth/2, window.innerHeight/2);
  render();
}