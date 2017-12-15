var MAX_TRAIL_VERTICES = 500;

function scalePlanet(x,planet){
  planet.scale.x = x;
  planet.scale.y = x;
  planet.scale.z = x;
}


function rotateAroundObjectAxis(object, axis, radians) {
    var rotObjectMatrix = new THREE.Matrix4();
    rotObjectMatrix.makeRotationAxis(axis.normalize(), radians);
    object.matrix.multiply(rotObjectMatrix);
    object.rotation.setFromRotationMatrix(object.matrix);
}

function rotateAroundWorldAxis(object, axis, radians) {
    rotWorldMatrix = new THREE.Matrix4();
    rotWorldMatrix.makeRotationAxis(axis.normalize(), radians);
    rotWorldMatrix.multiply(object.matrix);                // pre-multiply
    object.matrix = rotWorldMatrix;
    object.rotation.setFromRotationMatrix(object.matrix);
}

function createLineOrbit(x,y,z){
  var trailGeometry = new THREE.Geometry();

  for(var i = 0; i< MAX_TRAIL_VERTICES;i++){
    trailGeometry.vertices.push(new THREE.Vector3(x,y,z));
  }
  var trailMaterial = new THREE.LineBasicMaterial({linewidth: 100});

  var line = new THREE.Line(trailGeometry,trailMaterial);
  return line;
}

function leaveTrail(orbit) {
  orbit.line.geometry.vertices.unshift(new THREE.Vector3().copy(orbit.position));
  orbit.line.geometry.vertices.length = MAX_TRAIL_VERTICES;
  orbit.line.geometry.verticesNeedUpdate = true;
};

function rotation(planet,x){
  var rot = planet.matrix.makeRotationX(x)
  var r_y = new THREE.Matrix4();
  var c_y = Math.cos(Math.PI/4);
  var s_y = Math.sin(Math.PI/4);
  r_y.set(
    c_y,0,s_y,0,
    0,1,0,0,
    -s_y,0,c_y,0,
    0,0,0,1
  );

  planet.applyMatrix(r_y);

}
