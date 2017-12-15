#!/bin/bash

LIST_PLANET="earth jupiter mars mercury moon neptune pluto saturn sun uranus venus"

FILE="planet.js"

if [[ ! -f "$FILE" ]]; then
  echo -e "Création du fichier \n"
  touch "$FILE"
else
  echo -e "Suppression + création \n"
  rm "$FILE"
  touch "$FILE"
fi
echo -e "var sphereGeometry = new THREE.SphereGeometry(1,20,20);" >> "$FILE"
echo -e "var light = new THREE.PointLight(0xffffff,2,100);" >> "$FILE"

for planet in $LIST_PLANET; do
  myVertexShader="${planet}VertexShader"
  echo -e "// VertexShader pour la planet ${planet}" >> "$FILE"
  echo -e "var $myVertexShader =\`uniform vec3 lightPosition;" >> "$FILE"
  echo -e "varying vec2 vUv;" >> "$FILE"
  echo -e "varying vec3 lightDir;" >> "$FILE"
  echo -e "varying vec3 eyeDir;" >> "$FILE"
  echo -e "varying vec3 normalV;" >> "$FILE"
  echo -e "void main()" >> "$FILE"
  echo -e "{" >> "$FILE"
  echo -e "vec4 worldPos = modelMatrix * vec4(position, 1.0); " >> "$FILE"
  echo -e "lightDir = lightPosition - worldPos.xyz; " >> "$FILE"
  echo -e "eyeDir = cameraPosition - worldPos.xyz;" >> "$FILE"
  echo -e "gl_Position = projectionMatrix * viewMatrix * worldPos;" >> "$FILE"
  echo -e "normalV = normal;" >> "$FILE"
  echo -e "vUv = uv;" >> "$FILE"
  echo -e "}\`" >> "$FILE"
  myFragmentShader="${planet}FragmentShader"
  echo -e "// FragmentShader pour la planet ${planet}" >> "$FILE"
  echo -e "var $myFragmentShader = \`varying vec3 worldPosition;" >> "$FILE"
  echo -e "varying vec2 vUv;" >> "$FILE"
  echo -e "varying vec3 lightDir;" >> "$FILE"
  echo -e "varying vec3 eyeDir;" >> "$FILE"
  echo -e "varying vec3 normalV;" >> "$FILE"
  echo -e "uniform sampler2D ${planet}map;" >> "$FILE"
  echo -e "uniform vec4 lightColor;" >> "$FILE"
  echo -e "uniform float lightShininess;" >> "$FILE"
  echo -e "void main()" >> "$FILE"
  echo -e "{" >> "$FILE"
  echo -e "vec3 N = normalize(normalV);" >> "$FILE"
  echo -e "vec3 L = normalize(lightDir);" >> "$FILE"
  echo -e "vec4 texture = texture2D(${planet}map,vUv);" >> "$FILE"
  echo -e "float l = clamp(dot(N,L),0.0,1.0);" >> "$FILE"
  echo -e "vec4 color = l * (lightColor*texture);" >> "$FILE"
  echo -e "vec3 E = normalize(eyeDir);" >> "$FILE"
  echo -e "vec3 R = -L - 2.0 * dot(-L,N)*N;" >> "$FILE"
  echo -e "float specular = pow(max(dot(R,N),0.0),lightShininess);" >> "$FILE"
  echo -e "color += lightColor * specular;" >> "$FILE"
  echo -e "gl_FragColor = vec4(color.rgb, 1.0);" >> "$FILE"
  echo -e "}\`\n" >> "$FILE"
  echo -e "// Construction pour $planet \n"  >> "$FILE"
  myVertexShader="${planet}VertexShader"
  echo -e "var $myVertexShader = document.getElementById(\"$myVertexShader\").textContent" >> "$FILE"
  myFragmentShader="${planet}FragmentShader"
  echo -e "var $myFragmentShader = document.getElementById(\"$myFragmentShader\").textContent" >> "$FILE"
  myTexture="${planet}Texture"
  echo -e "var $myTexture = THREE.ImageUtils.loadTexture(\"images/${planet}map.png\")\n" >> "$FILE"
  myTextureUniform="${planet}TextureUniform"
  echo -e "var $myTextureUniform = {type:\"t\",value:${myTexture}}" >> "$FILE"
  myLightPosition="lightPosition"
  echo -e "var $myLightPosition = {type:\"v3\",value:light.position}" >> "$FILE"
  myLightColors="${planet}LightColors"
  echo -e "var $myLightColors = {type:\"v3\",value:light.color}" >> "$FILE"
  mysphereShininess="${planet}Shininess"
  echo -e "var $mysphereShininess = {type:\"f\",value:light.intensity}" >> "$FILE"
  myUniforms="${planet}Uniforms"
  echo -e "var $myUniforms = {${planet}map : $myTextureUniform,lightPosition :$myLightPosition,lightColor:$myLightColors,lightShininess:$mysphereShininess}" >> "$FILE"
  sphereMaterialParams="${planet}MaterialParams"
  echo -e "var $sphereMaterialParams = {vertexShader: $myVertexShader, fragmentShader: $myFragmentShader ,uniforms: $myUniforms}" >> "$FILE"
  sphereMaterial="${planet}Material"
  echo -e "var $sphereMaterial = new THREE.ShaderMaterial($sphereMaterialParams)" >> "$FILE"
  sphere="${planet}"
  if [[ "$planet" == "sun" ]]; then
    echo -e "var $sphere = new THREE.Mesh(sphereGeometry,$sphereMaterial)\n" >> "$FILE"
  else
    echo -e "var $sphere = new THREE.Mesh(sphereGeometry,new THREE.MeshPhongMaterial({map:${myTexture},specular: new THREE.Color('grey')}))\n" >> "$FILE"
  fi
  echo -e "${sphere}.add(new THREE.AxisHelper(2));" >> "$FILE"
  echo -e "${sphere}.receiveShadow = true;" >> "$FILE"
  echo -e "${sphere}.castShadow = true;" >> "$FILE"
  # var myVertexShader =  document.getElementById('myVertexShader').textContent;
  # var myFragmentShader =  document.getElementById('myFragmentShader').textContent;
  # var myTexture = THREE.ImageUtils.loadTexture("images/Lenna.png");
  # myTextureUniform = { type: "t", value: myTexture };
  # myUniforms = { lenna : myTextureUniform };
  # sphereMaterialParams = { vertexShader: myVertexShader, fragmentShader: myFragmentShader, uniforms: myUniforms };
  # sphereMaterial = new THREE.ShaderMaterial(sphereMaterialParams);
  # lune = new THREE.Mesh(sphereGeometry, sphereMaterial);

  echo -e $planet
done
