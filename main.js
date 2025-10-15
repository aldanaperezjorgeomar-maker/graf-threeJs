import * as THREE from 'https://unpkg.com/three@0.154.0/build/three.module.js';

// Crear la escena, cámara y renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear la misma geometría de cubo PERO MÁS GRANDE
const cubeGeometry = new THREE.BoxGeometry(2, 2, 2); // Cubos más grandes (2x2x2)

// Crear materiales de diferentes colores
const material1 = new THREE.MeshStandardMaterial({ 
    color: 0x00ff00, // Verde
    metalness: 0.2,
    roughness: 0.6
});
const material2 = new THREE.MeshStandardMaterial({ 
    color: 0xff0000, // Rojo
    metalness: 0.5,
    roughness: 0.3
});
const material3 = new THREE.MeshStandardMaterial({ 
    color: 0x0000ff, // Azul
    metalness: 0.1,
    roughness: 0.8
});

// Crear los 3 cubos (todos con la misma geometría cúbica grande)
const cube1 = new THREE.Mesh(cubeGeometry, material1);
const cube2 = new THREE.Mesh(cubeGeometry, material2);
const cube3 = new THREE.Mesh(cubeGeometry, material3);

// Posicionar los cubos ALINEADOS horizontalmente con más separación
cube1.position.set(-5, 0, 0);   // Cubo izquierdo
cube2.position.set(0, 0, 0);    // Cubo central  
cube3.position.set(5, 0, 0);    // Cubo derecho

// Agregar cubos a la escena
scene.add(cube1);
scene.add(cube2);
scene.add(cube3);

// Agregar luces
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 5);
scene.add(directionalLight);

const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
scene.add(ambientLight);

// Posicionar la cámara más lejos para ver los cubos grandes
camera.position.z = 12;

// Función de animación con velocidades diferentes para cada cubo
function animate() {
    
    // CUBO 1 - VELOCIDAD LENTA (Verde)
    cube1.rotation.x += 0.005;  // Muy lento en X
    cube1.rotation.y += 0.008;  // Lento en Y
    cube1.rotation.z += 0.003;  // Muy lento en Z
    
    // CUBO 2 - VELOCIDAD MEDIA (Rojo)
    cube2.rotation.x += 0.015;  // Medio en X
    cube2.rotation.y += 0.012;  // Medio en Y
    cube2.rotation.z += 0.010;  // Medio en Z
    
    // CUBO 3 - VELOCIDAD RÁPIDA (Azul)
    cube3.rotation.x += 0.025;  // Rápido en X
    cube3.rotation.y += 0.020;  // Rápido en Y
    cube3.rotation.z += 0.018;  // Rápido en Z
    
    renderer.render(scene, camera);
}

// Iniciar la animación
renderer.setAnimationLoop(animate);

// Manejar redimensionado de ventana
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});