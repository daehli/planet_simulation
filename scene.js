/*
http://learningthreejs.com/blog/2013/09/16/how-to-make-the-earth-in-webgl/
*/
var W = 1000;
var H = 700;
var list_planet = [mercury,venus,earth,mars,jupiter,saturn,uranus,neptune,pluto,sun];
var container = document.querySelector('#threejsContainer');
var renderer = new THREE.WebGLRenderer();
renderer.setClearColor( 0x000000, 1.0);
//initialisation de la scène Three.js
var scene = new THREE.Scene();
var ratio = H/W;
var sceneExtend = 5;
var sceneExtendH = ratio * sceneExtend;
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var axisHelper = new THREE.AxisHelper( 5 );
renderer.setSize( window.innerWidth, window.innerHeight );
var controls = new THREE.OrbitControls( camera, renderer.domElement );
var ambmLight = new THREE.AmbientLight();
// sun.add(ambmLight);
controls.enableZoom = false;
camera.position.set(0, 0, 10);
camera.lookAt(scene.position);
scene.add(camera);
// scene.add(axisHelper);
container.appendChild(renderer.domElement);
console.log(light);
sun.add(light);
// Groupe
var systemeSolaire = new THREE.Group();
systemeSolaire.add(new THREE.AxisHelper(4));
var espacePlanet = new THREE.Group();
var distance = 3;
var list_orbit = []
for(planet in list_planet){
  var planet1 = list_planet[planet];
  list_orbit.push(new THREE.Group());
  planet1["orbitRadius"] = distance;
  planet1["angle"] = 0;
  var random1 = (Math.random() * 10)%2;
  if(Math.floor(random1)%2)
    random1 = -random1
  planet1["speed"] = random1;
  systemeSolaire.add(list_orbit[planet]);
  list_orbit[planet].add(planet1);
  var random2 =((Math.random()* 10)%2)+6;
  list_orbit[planet].position.x = random2;
  var line = createLineOrbit(list_orbit[planet].position.x,list_orbit[planet].position.y,list_orbit[planet].position.z);
  list_orbit[planet]["line"] = line;
  systemeSolaire.add(line);
  distance += random2;
}
console.log(list_orbit[3]);
// Ajout des composantes
systemeSolaire.add(sun);
list_orbit[2].add(espacePlanet);
espacePlanet.add(moon);
espacePlanet.add(earth);
scene.add(systemeSolaire);
moon.position.x = 2;

// Inclinaison des planètes
earth.rotation.z = 23.439281 * Math.PI / 180;
moon.rotation.z = 23.439281 * Math.PI / 180;
mercury.rotation.z = 0.01 * Math.PI / 180;
venus.rotation.z = 177.3 * Math.PI / 180;
mars.rotation.z = 25.19 * Math.PI / 180;
jupiter.rotation.z = 3.13 * Math.PI / 180;
saturn.rotation.z = 26.73 * Math.PI / 180;
saturn.rotation.z = 97.77 * Math.PI / 180;
saturn.rotation.z = 28.32 * Math.PI / 180;
// Pluto Inconnu.

// Inclinaison des orbits
list_orbit[0].position.y = 7.005 * Math.PI/180; // Mercure
list_orbit[1].position.y = 3.39 * Math.PI/180; // Venus
list_orbit[3].position.y = 1.8506 * Math.PI/180; // Mars
list_orbit[4].position.y = 1.304 * Math.PI/180; // Jupiter
list_orbit[5].position.y = 2.4845 * Math.PI/180; // Saturne
list_orbit[6].position.y = 0.7725 * Math.PI/180; // Uranus
list_orbit[7].position.y = 1.7692 * Math.PI/180; // Nepture
list_orbit[8].position.y = 17.1417 * Math.PI/180; // Pluton


// Grosseur des planets
scalePlanet(6,sun);
scalePlanet(0.1,moon);
scalePlanet(0.7,mercury);
scalePlanet(1.2,venus);
scalePlanet(0.8,mars);
scalePlanet(3.4,jupiter);
scalePlanet(3,saturn);
scalePlanet(2.4,uranus);
scalePlanet(2.2,neptune);
scalePlanet(0.2,pluto);

// Animation
var lineOrbit = []
function animate() {

requestAnimationFrame(animate);
renderer.render(scene, camera);
for (planet in list_planet){
  var pla = list_planet[planet]
  pla.angle += pla.speed;
  var radius = pla.angle * Math.PI/180;
  var orbi = list_orbit[planet]
  var line = orbi.line;
  pla.rotation.y += 0.01;
  orbi.position.x = Math.cos(radius) * pla.orbitRadius;
  orbi.position.z = Math.sin(radius) * pla.orbitRadius;
  if (Math.floor((Math.random()*10)%2)==0)
    leaveTrail(orbi);

  // orbi.line.geometry.vertices.push(new THREE.Vector3(orbi.position.x,orbi.position.y,orbi.position.z));
  // trailGeometry.vertices.push(new THREE.Vector3(orbi.position.x,orbi.position.y,orbi.position.z));
}
espacePlanet.rotation.y += 0.020;
systemeSolaire.rotation.y += 0.01;
sun.rotation.y += 0.001;
moon.rotation.y += 0.02;
}

animate();

// https://fr.wikipedia.org/wiki/Inclinaison_de_l%27axe
