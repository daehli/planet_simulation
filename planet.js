var sphereGeometry = new THREE.SphereGeometry(1,20,20);
var light = new THREE.PointLight(0xffffff,2,100);
// VertexShader pour la planet earth
var earthVertexShader =`uniform vec3 lightPosition;
varying vec2 vUv;
varying vec3 lightDir;
varying vec3 eyeDir;
varying vec3 normalV;
void main()
{
vec4 worldPos = modelMatrix * vec4(position, 1.0);
lightDir = lightPosition - worldPos.xyz;
eyeDir = cameraPosition - worldPos.xyz;
gl_Position = projectionMatrix * viewMatrix * worldPos;
normalV = normal;
vUv = uv;
}`
// FragmentShader pour la planet earth
var earthFragmentShader = `varying vec3 worldPosition;
varying vec2 vUv;
varying vec3 lightDir;
varying vec3 eyeDir;
varying vec3 normalV;
uniform sampler2D earthmap;
uniform vec4 lightColor;
uniform float lightShininess;
void main()
{
vec3 N = normalize(normalV);
vec3 L = normalize(lightDir);
vec4 texture = texture2D(earthmap,vUv);
float l = clamp(dot(N,L),0.0,1.0);
vec4 color = l * (lightColor*texture);
vec3 E = normalize(eyeDir);
vec3 R = -L - 2.0 * dot(-L,N)*N;
float specular = pow(max(dot(R,N),0.0),lightShininess);
color += lightColor * specular;
gl_FragColor = vec4(color.rgb, 1.0);
}`

// Construction pour earth

var earthVertexShader = document.getElementById("earthVertexShader").textContent
var earthFragmentShader = document.getElementById("earthFragmentShader").textContent
var earthTexture = THREE.ImageUtils.loadTexture("images/earthmap.png")

var earthTextureUniform = {type:"t",value:earthTexture}
var lightPosition = {type:"v3",value:light.position}
var earthLightColors = {type:"v3",value:light.color}
var earthShininess = {type:"f",value:light.intensity}
var earthUniforms = {earthmap : earthTextureUniform,lightPosition :lightPosition,lightColor:earthLightColors,lightShininess:earthShininess}
var earthMaterialParams = {vertexShader: earthVertexShader, fragmentShader: earthFragmentShader ,uniforms: earthUniforms}
var earthMaterial = new THREE.ShaderMaterial(earthMaterialParams)
var earth = new THREE.Mesh(sphereGeometry,new THREE.MeshPhongMaterial({map:earthTexture,specular: new THREE.Color('grey')}))

earth.add(new THREE.AxisHelper(2));
earth.receiveShadow = true;
earth.castShadow = true;
// VertexShader pour la planet jupiter
var jupiterVertexShader =`uniform vec3 lightPosition;
varying vec2 vUv;
varying vec3 lightDir;
varying vec3 eyeDir;
varying vec3 normalV;
void main()
{
vec4 worldPos = modelMatrix * vec4(position, 1.0);
lightDir = lightPosition - worldPos.xyz;
eyeDir = cameraPosition - worldPos.xyz;
gl_Position = projectionMatrix * viewMatrix * worldPos;
normalV = normal;
vUv = uv;
}`
// FragmentShader pour la planet jupiter
var jupiterFragmentShader = `varying vec3 worldPosition;
varying vec2 vUv;
varying vec3 lightDir;
varying vec3 eyeDir;
varying vec3 normalV;
uniform sampler2D jupitermap;
uniform vec4 lightColor;
uniform float lightShininess;
void main()
{
vec3 N = normalize(normalV);
vec3 L = normalize(lightDir);
vec4 texture = texture2D(jupitermap,vUv);
float l = clamp(dot(N,L),0.0,1.0);
vec4 color = l * (lightColor*texture);
vec3 E = normalize(eyeDir);
vec3 R = -L - 2.0 * dot(-L,N)*N;
float specular = pow(max(dot(R,N),0.0),lightShininess);
color += lightColor * specular;
gl_FragColor = vec4(color.rgb, 1.0);
}`

// Construction pour jupiter

var jupiterVertexShader = document.getElementById("jupiterVertexShader").textContent
var jupiterFragmentShader = document.getElementById("jupiterFragmentShader").textContent
var jupiterTexture = THREE.ImageUtils.loadTexture("images/jupitermap.png")

var jupiterTextureUniform = {type:"t",value:jupiterTexture}
var lightPosition = {type:"v3",value:light.position}
var jupiterLightColors = {type:"v3",value:light.color}
var jupiterShininess = {type:"f",value:light.intensity}
var jupiterUniforms = {jupitermap : jupiterTextureUniform,lightPosition :lightPosition,lightColor:jupiterLightColors,lightShininess:jupiterShininess}
var jupiterMaterialParams = {vertexShader: jupiterVertexShader, fragmentShader: jupiterFragmentShader ,uniforms: jupiterUniforms}
var jupiterMaterial = new THREE.ShaderMaterial(jupiterMaterialParams)
var jupiter = new THREE.Mesh(sphereGeometry,new THREE.MeshPhongMaterial({map:jupiterTexture,specular: new THREE.Color('grey')}))

jupiter.add(new THREE.AxisHelper(2));
jupiter.receiveShadow = true;
jupiter.castShadow = true;
// VertexShader pour la planet mars
var marsVertexShader =`uniform vec3 lightPosition;
varying vec2 vUv;
varying vec3 lightDir;
varying vec3 eyeDir;
varying vec3 normalV;
void main()
{
vec4 worldPos = modelMatrix * vec4(position, 1.0);
lightDir = lightPosition - worldPos.xyz;
eyeDir = cameraPosition - worldPos.xyz;
gl_Position = projectionMatrix * viewMatrix * worldPos;
normalV = normal;
vUv = uv;
}`
// FragmentShader pour la planet mars
var marsFragmentShader = `varying vec3 worldPosition;
varying vec2 vUv;
varying vec3 lightDir;
varying vec3 eyeDir;
varying vec3 normalV;
uniform sampler2D marsmap;
uniform vec4 lightColor;
uniform float lightShininess;
void main()
{
vec3 N = normalize(normalV);
vec3 L = normalize(lightDir);
vec4 texture = texture2D(marsmap,vUv);
float l = clamp(dot(N,L),0.0,1.0);
vec4 color = l * (lightColor*texture);
vec3 E = normalize(eyeDir);
vec3 R = -L - 2.0 * dot(-L,N)*N;
float specular = pow(max(dot(R,N),0.0),lightShininess);
color += lightColor * specular;
gl_FragColor = vec4(color.rgb, 1.0);
}`

// Construction pour mars

var marsVertexShader = document.getElementById("marsVertexShader").textContent
var marsFragmentShader = document.getElementById("marsFragmentShader").textContent
var marsTexture = THREE.ImageUtils.loadTexture("images/marsmap.png")

var marsTextureUniform = {type:"t",value:marsTexture}
var lightPosition = {type:"v3",value:light.position}
var marsLightColors = {type:"v3",value:light.color}
var marsShininess = {type:"f",value:light.intensity}
var marsUniforms = {marsmap : marsTextureUniform,lightPosition :lightPosition,lightColor:marsLightColors,lightShininess:marsShininess}
var marsMaterialParams = {vertexShader: marsVertexShader, fragmentShader: marsFragmentShader ,uniforms: marsUniforms}
var marsMaterial = new THREE.ShaderMaterial(marsMaterialParams)
var mars = new THREE.Mesh(sphereGeometry,new THREE.MeshPhongMaterial({map:marsTexture,specular: new THREE.Color('grey')}))

mars.add(new THREE.AxisHelper(2));
mars.receiveShadow = true;
mars.castShadow = true;
// VertexShader pour la planet mercury
var mercuryVertexShader =`uniform vec3 lightPosition;
varying vec2 vUv;
varying vec3 lightDir;
varying vec3 eyeDir;
varying vec3 normalV;
void main()
{
vec4 worldPos = modelMatrix * vec4(position, 1.0);
lightDir = lightPosition - worldPos.xyz;
eyeDir = cameraPosition - worldPos.xyz;
gl_Position = projectionMatrix * viewMatrix * worldPos;
normalV = normal;
vUv = uv;
}`
// FragmentShader pour la planet mercury
var mercuryFragmentShader = `varying vec3 worldPosition;
varying vec2 vUv;
varying vec3 lightDir;
varying vec3 eyeDir;
varying vec3 normalV;
uniform sampler2D mercurymap;
uniform vec4 lightColor;
uniform float lightShininess;
void main()
{
vec3 N = normalize(normalV);
vec3 L = normalize(lightDir);
vec4 texture = texture2D(mercurymap,vUv);
float l = clamp(dot(N,L),0.0,1.0);
vec4 color = l * (lightColor*texture);
vec3 E = normalize(eyeDir);
vec3 R = -L - 2.0 * dot(-L,N)*N;
float specular = pow(max(dot(R,N),0.0),lightShininess);
color += lightColor * specular;
gl_FragColor = vec4(color.rgb, 1.0);
}`

// Construction pour mercury

var mercuryVertexShader = document.getElementById("mercuryVertexShader").textContent
var mercuryFragmentShader = document.getElementById("mercuryFragmentShader").textContent
var mercuryTexture = THREE.ImageUtils.loadTexture("images/mercurymap.png")

var mercuryTextureUniform = {type:"t",value:mercuryTexture}
var lightPosition = {type:"v3",value:light.position}
var mercuryLightColors = {type:"v3",value:light.color}
var mercuryShininess = {type:"f",value:light.intensity}
var mercuryUniforms = {mercurymap : mercuryTextureUniform,lightPosition :lightPosition,lightColor:mercuryLightColors,lightShininess:mercuryShininess}
var mercuryMaterialParams = {vertexShader: mercuryVertexShader, fragmentShader: mercuryFragmentShader ,uniforms: mercuryUniforms}
var mercuryMaterial = new THREE.ShaderMaterial(mercuryMaterialParams)
var mercury = new THREE.Mesh(sphereGeometry,new THREE.MeshPhongMaterial({map:mercuryTexture,specular: new THREE.Color('grey')}))

mercury.add(new THREE.AxisHelper(2));
mercury.receiveShadow = true;
mercury.castShadow = true;
// VertexShader pour la planet moon
var moonVertexShader =`uniform vec3 lightPosition;
varying vec2 vUv;
varying vec3 lightDir;
varying vec3 eyeDir;
varying vec3 normalV;
void main()
{
vec4 worldPos = modelMatrix * vec4(position, 1.0);
lightDir = lightPosition - worldPos.xyz;
eyeDir = cameraPosition - worldPos.xyz;
gl_Position = projectionMatrix * viewMatrix * worldPos;
normalV = normal;
vUv = uv;
}`
// FragmentShader pour la planet moon
var moonFragmentShader = `varying vec3 worldPosition;
varying vec2 vUv;
varying vec3 lightDir;
varying vec3 eyeDir;
varying vec3 normalV;
uniform sampler2D moonmap;
uniform vec4 lightColor;
uniform float lightShininess;
void main()
{
vec3 N = normalize(normalV);
vec3 L = normalize(lightDir);
vec4 texture = texture2D(moonmap,vUv);
float l = clamp(dot(N,L),0.0,1.0);
vec4 color = l * (lightColor*texture);
vec3 E = normalize(eyeDir);
vec3 R = -L - 2.0 * dot(-L,N)*N;
float specular = pow(max(dot(R,N),0.0),lightShininess);
color += lightColor * specular;
gl_FragColor = vec4(color.rgb, 1.0);
}`

// Construction pour moon

var moonVertexShader = document.getElementById("moonVertexShader").textContent
var moonFragmentShader = document.getElementById("moonFragmentShader").textContent
var moonTexture = THREE.ImageUtils.loadTexture("images/moonmap.png")

var moonTextureUniform = {type:"t",value:moonTexture}
var lightPosition = {type:"v3",value:light.position}
var moonLightColors = {type:"v3",value:light.color}
var moonShininess = {type:"f",value:light.intensity}
var moonUniforms = {moonmap : moonTextureUniform,lightPosition :lightPosition,lightColor:moonLightColors,lightShininess:moonShininess}
var moonMaterialParams = {vertexShader: moonVertexShader, fragmentShader: moonFragmentShader ,uniforms: moonUniforms}
var moonMaterial = new THREE.ShaderMaterial(moonMaterialParams)
var moon = new THREE.Mesh(sphereGeometry,new THREE.MeshPhongMaterial({map:moonTexture,specular: new THREE.Color('grey')}))

moon.add(new THREE.AxisHelper(2));
moon.receiveShadow = true;
moon.castShadow = true;
// VertexShader pour la planet neptune
var neptuneVertexShader =`uniform vec3 lightPosition;
varying vec2 vUv;
varying vec3 lightDir;
varying vec3 eyeDir;
varying vec3 normalV;
void main()
{
vec4 worldPos = modelMatrix * vec4(position, 1.0);
lightDir = lightPosition - worldPos.xyz;
eyeDir = cameraPosition - worldPos.xyz;
gl_Position = projectionMatrix * viewMatrix * worldPos;
normalV = normal;
vUv = uv;
}`
// FragmentShader pour la planet neptune
var neptuneFragmentShader = `varying vec3 worldPosition;
varying vec2 vUv;
varying vec3 lightDir;
varying vec3 eyeDir;
varying vec3 normalV;
uniform sampler2D neptunemap;
uniform vec4 lightColor;
uniform float lightShininess;
void main()
{
vec3 N = normalize(normalV);
vec3 L = normalize(lightDir);
vec4 texture = texture2D(neptunemap,vUv);
float l = clamp(dot(N,L),0.0,1.0);
vec4 color = l * (lightColor*texture);
vec3 E = normalize(eyeDir);
vec3 R = -L - 2.0 * dot(-L,N)*N;
float specular = pow(max(dot(R,N),0.0),lightShininess);
color += lightColor * specular;
gl_FragColor = vec4(color.rgb, 1.0);
}`

// Construction pour neptune

var neptuneVertexShader = document.getElementById("neptuneVertexShader").textContent
var neptuneFragmentShader = document.getElementById("neptuneFragmentShader").textContent
var neptuneTexture = THREE.ImageUtils.loadTexture("images/neptunemap.png")

var neptuneTextureUniform = {type:"t",value:neptuneTexture}
var lightPosition = {type:"v3",value:light.position}
var neptuneLightColors = {type:"v3",value:light.color}
var neptuneShininess = {type:"f",value:light.intensity}
var neptuneUniforms = {neptunemap : neptuneTextureUniform,lightPosition :lightPosition,lightColor:neptuneLightColors,lightShininess:neptuneShininess}
var neptuneMaterialParams = {vertexShader: neptuneVertexShader, fragmentShader: neptuneFragmentShader ,uniforms: neptuneUniforms}
var neptuneMaterial = new THREE.ShaderMaterial(neptuneMaterialParams)
var neptune = new THREE.Mesh(sphereGeometry,new THREE.MeshPhongMaterial({map:neptuneTexture,specular: new THREE.Color('grey')}))

neptune.add(new THREE.AxisHelper(2));
neptune.receiveShadow = true;
neptune.castShadow = true;
// VertexShader pour la planet pluto
var plutoVertexShader =`uniform vec3 lightPosition;
varying vec2 vUv;
varying vec3 lightDir;
varying vec3 eyeDir;
varying vec3 normalV;
void main()
{
vec4 worldPos = modelMatrix * vec4(position, 1.0);
lightDir = lightPosition - worldPos.xyz;
eyeDir = cameraPosition - worldPos.xyz;
gl_Position = projectionMatrix * viewMatrix * worldPos;
normalV = normal;
vUv = uv;
}`
// FragmentShader pour la planet pluto
var plutoFragmentShader = `varying vec3 worldPosition;
varying vec2 vUv;
varying vec3 lightDir;
varying vec3 eyeDir;
varying vec3 normalV;
uniform sampler2D plutomap;
uniform vec4 lightColor;
uniform float lightShininess;
void main()
{
vec3 N = normalize(normalV);
vec3 L = normalize(lightDir);
vec4 texture = texture2D(plutomap,vUv);
float l = clamp(dot(N,L),0.0,1.0);
vec4 color = l * (lightColor*texture);
vec3 E = normalize(eyeDir);
vec3 R = -L - 2.0 * dot(-L,N)*N;
float specular = pow(max(dot(R,N),0.0),lightShininess);
color += lightColor * specular;
gl_FragColor = vec4(color.rgb, 1.0);
}`

// Construction pour pluto

var plutoVertexShader = document.getElementById("plutoVertexShader").textContent
var plutoFragmentShader = document.getElementById("plutoFragmentShader").textContent
var plutoTexture = THREE.ImageUtils.loadTexture("images/plutomap.png")

var plutoTextureUniform = {type:"t",value:plutoTexture}
var lightPosition = {type:"v3",value:light.position}
var plutoLightColors = {type:"v3",value:light.color}
var plutoShininess = {type:"f",value:light.intensity}
var plutoUniforms = {plutomap : plutoTextureUniform,lightPosition :lightPosition,lightColor:plutoLightColors,lightShininess:plutoShininess}
var plutoMaterialParams = {vertexShader: plutoVertexShader, fragmentShader: plutoFragmentShader ,uniforms: plutoUniforms}
var plutoMaterial = new THREE.ShaderMaterial(plutoMaterialParams)
var pluto = new THREE.Mesh(sphereGeometry,new THREE.MeshPhongMaterial({map:plutoTexture,specular: new THREE.Color('grey')}))

pluto.add(new THREE.AxisHelper(2));
pluto.receiveShadow = true;
pluto.castShadow = true;
// VertexShader pour la planet saturn
var saturnVertexShader =`uniform vec3 lightPosition;
varying vec2 vUv;
varying vec3 lightDir;
varying vec3 eyeDir;
varying vec3 normalV;
void main()
{
vec4 worldPos = modelMatrix * vec4(position, 1.0);
lightDir = lightPosition - worldPos.xyz;
eyeDir = cameraPosition - worldPos.xyz;
gl_Position = projectionMatrix * viewMatrix * worldPos;
normalV = normal;
vUv = uv;
}`
// FragmentShader pour la planet saturn
var saturnFragmentShader = `varying vec3 worldPosition;
varying vec2 vUv;
varying vec3 lightDir;
varying vec3 eyeDir;
varying vec3 normalV;
uniform sampler2D saturnmap;
uniform vec4 lightColor;
uniform float lightShininess;
void main()
{
vec3 N = normalize(normalV);
vec3 L = normalize(lightDir);
vec4 texture = texture2D(saturnmap,vUv);
float l = clamp(dot(N,L),0.0,1.0);
vec4 color = l * (lightColor*texture);
vec3 E = normalize(eyeDir);
vec3 R = -L - 2.0 * dot(-L,N)*N;
float specular = pow(max(dot(R,N),0.0),lightShininess);
color += lightColor * specular;
gl_FragColor = vec4(color.rgb, 1.0);
}`

// Construction pour saturn

var saturnVertexShader = document.getElementById("saturnVertexShader").textContent
var saturnFragmentShader = document.getElementById("saturnFragmentShader").textContent
var saturnTexture = THREE.ImageUtils.loadTexture("images/saturnmap.png")

var saturnTextureUniform = {type:"t",value:saturnTexture}
var lightPosition = {type:"v3",value:light.position}
var saturnLightColors = {type:"v3",value:light.color}
var saturnShininess = {type:"f",value:light.intensity}
var saturnUniforms = {saturnmap : saturnTextureUniform,lightPosition :lightPosition,lightColor:saturnLightColors,lightShininess:saturnShininess}
var saturnMaterialParams = {vertexShader: saturnVertexShader, fragmentShader: saturnFragmentShader ,uniforms: saturnUniforms}
var saturnMaterial = new THREE.ShaderMaterial(saturnMaterialParams)
var saturn = new THREE.Mesh(sphereGeometry,new THREE.MeshPhongMaterial({map:saturnTexture,specular: new THREE.Color('grey')}))

saturn.add(new THREE.AxisHelper(2));
saturn.receiveShadow = true;
saturn.castShadow = true;
// VertexShader pour la planet sun
var sunVertexShader =`uniform vec3 lightPosition;
varying vec2 vUv;
varying vec3 lightDir;
varying vec3 eyeDir;
varying vec3 normalV;
void main()
{
vec4 worldPos = modelMatrix * vec4(position, 1.0);
lightDir = lightPosition - worldPos.xyz;
eyeDir = cameraPosition - worldPos.xyz;
gl_Position = projectionMatrix * viewMatrix * worldPos;
normalV = normal;
vUv = uv;
}`
// FragmentShader pour la planet sun
var sunFragmentShader = `varying vec3 worldPosition;
varying vec2 vUv;
varying vec3 lightDir;
varying vec3 eyeDir;
varying vec3 normalV;
uniform sampler2D sunmap;
uniform vec4 lightColor;
uniform float lightShininess;
void main()
{
vec3 N = normalize(normalV);
vec3 L = normalize(lightDir);
vec4 texture = texture2D(sunmap,vUv);
float l = clamp(dot(N,L),0.0,1.0);
vec4 color = l * (lightColor*texture);
vec3 E = normalize(eyeDir);
vec3 R = -L - 2.0 * dot(-L,N)*N;
float specular = pow(max(dot(R,N),0.0),lightShininess);
color += lightColor * specular;
gl_FragColor = vec4(color.rgb, 1.0);
}`

// Construction pour sun

var sunVertexShader = document.getElementById("sunVertexShader").textContent
var sunFragmentShader = document.getElementById("sunFragmentShader").textContent
var sunTexture = THREE.ImageUtils.loadTexture("images/sunmap.png")

var sunTextureUniform = {type:"t",value:sunTexture}
var lightPosition = {type:"v3",value:light.position}
var sunLightColors = {type:"v3",value:light.color}
var sunShininess = {type:"f",value:light.intensity}
var sunUniforms = {sunmap : sunTextureUniform,lightPosition :lightPosition,lightColor:sunLightColors,lightShininess:sunShininess}
var sunMaterialParams = {vertexShader: sunVertexShader, fragmentShader: sunFragmentShader ,uniforms: sunUniforms}
var sunMaterial = new THREE.ShaderMaterial(sunMaterialParams)
var sun = new THREE.Mesh(sphereGeometry,sunMaterial)

sun.add(new THREE.AxisHelper(2));
sun.receiveShadow = true;
sun.castShadow = true;
// VertexShader pour la planet uranus
var uranusVertexShader =`uniform vec3 lightPosition;
varying vec2 vUv;
varying vec3 lightDir;
varying vec3 eyeDir;
varying vec3 normalV;
void main()
{
vec4 worldPos = modelMatrix * vec4(position, 1.0);
lightDir = lightPosition - worldPos.xyz;
eyeDir = cameraPosition - worldPos.xyz;
gl_Position = projectionMatrix * viewMatrix * worldPos;
normalV = normal;
vUv = uv;
}`
// FragmentShader pour la planet uranus
var uranusFragmentShader = `varying vec3 worldPosition;
varying vec2 vUv;
varying vec3 lightDir;
varying vec3 eyeDir;
varying vec3 normalV;
uniform sampler2D uranusmap;
uniform vec4 lightColor;
uniform float lightShininess;
void main()
{
vec3 N = normalize(normalV);
vec3 L = normalize(lightDir);
vec4 texture = texture2D(uranusmap,vUv);
float l = clamp(dot(N,L),0.0,1.0);
vec4 color = l * (lightColor*texture);
vec3 E = normalize(eyeDir);
vec3 R = -L - 2.0 * dot(-L,N)*N;
float specular = pow(max(dot(R,N),0.0),lightShininess);
color += lightColor * specular;
gl_FragColor = vec4(color.rgb, 1.0);
}`

// Construction pour uranus

var uranusVertexShader = document.getElementById("uranusVertexShader").textContent
var uranusFragmentShader = document.getElementById("uranusFragmentShader").textContent
var uranusTexture = THREE.ImageUtils.loadTexture("images/uranusmap.png")

var uranusTextureUniform = {type:"t",value:uranusTexture}
var lightPosition = {type:"v3",value:light.position}
var uranusLightColors = {type:"v3",value:light.color}
var uranusShininess = {type:"f",value:light.intensity}
var uranusUniforms = {uranusmap : uranusTextureUniform,lightPosition :lightPosition,lightColor:uranusLightColors,lightShininess:uranusShininess}
var uranusMaterialParams = {vertexShader: uranusVertexShader, fragmentShader: uranusFragmentShader ,uniforms: uranusUniforms}
var uranusMaterial = new THREE.ShaderMaterial(uranusMaterialParams)
var uranus = new THREE.Mesh(sphereGeometry,new THREE.MeshPhongMaterial({map:uranusTexture,specular: new THREE.Color('grey')}))

uranus.add(new THREE.AxisHelper(2));
uranus.receiveShadow = true;
uranus.castShadow = true;
// VertexShader pour la planet venus
var venusVertexShader =`uniform vec3 lightPosition;
varying vec2 vUv;
varying vec3 lightDir;
varying vec3 eyeDir;
varying vec3 normalV;
void main()
{
vec4 worldPos = modelMatrix * vec4(position, 1.0);
lightDir = lightPosition - worldPos.xyz;
eyeDir = cameraPosition - worldPos.xyz;
gl_Position = projectionMatrix * viewMatrix * worldPos;
normalV = normal;
vUv = uv;
}`
// FragmentShader pour la planet venus
var venusFragmentShader = `varying vec3 worldPosition;
varying vec2 vUv;
varying vec3 lightDir;
varying vec3 eyeDir;
varying vec3 normalV;
uniform sampler2D venusmap;
uniform vec4 lightColor;
uniform float lightShininess;
void main()
{
vec3 N = normalize(normalV);
vec3 L = normalize(lightDir);
vec4 texture = texture2D(venusmap,vUv);
float l = clamp(dot(N,L),0.0,1.0);
vec4 color = l * (lightColor*texture);
vec3 E = normalize(eyeDir);
vec3 R = -L - 2.0 * dot(-L,N)*N;
float specular = pow(max(dot(R,N),0.0),lightShininess);
color += lightColor * specular;
gl_FragColor = vec4(color.rgb, 1.0);
}`

// Construction pour venus

var venusVertexShader = document.getElementById("venusVertexShader").textContent
var venusFragmentShader = document.getElementById("venusFragmentShader").textContent
var venusTexture = THREE.ImageUtils.loadTexture("images/venusmap.png")

var venusTextureUniform = {type:"t",value:venusTexture}
var lightPosition = {type:"v3",value:light.position}
var venusLightColors = {type:"v3",value:light.color}
var venusShininess = {type:"f",value:light.intensity}
var venusUniforms = {venusmap : venusTextureUniform,lightPosition :lightPosition,lightColor:venusLightColors,lightShininess:venusShininess}
var venusMaterialParams = {vertexShader: venusVertexShader, fragmentShader: venusFragmentShader ,uniforms: venusUniforms}
var venusMaterial = new THREE.ShaderMaterial(venusMaterialParams)
var venus = new THREE.Mesh(sphereGeometry,new THREE.MeshPhongMaterial({map:venusTexture,specular: new THREE.Color('grey')}))

venus.add(new THREE.AxisHelper(2));
venus.receiveShadow = true;
venus.castShadow = true;
