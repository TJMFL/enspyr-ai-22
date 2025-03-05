import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create more particles for a denser effect
    const geometry = new THREE.BufferGeometry();
    const vertices = [];

    // Increase particle count and spread for a more impressive effect
    for (let i = 0; i < 8000; i++) {
      const x = THREE.MathUtils.randFloatSpread(2000);
      const y = THREE.MathUtils.randFloatSpread(2000);
      const z = THREE.MathUtils.randFloatSpread(2000);
      vertices.push(x, y, z);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    // Create two particle systems for depth
    const particles1 = new THREE.Points(
      geometry,
      new THREE.PointsMaterial({ 
        color: 0x8b5cf6,
        size: 0.7,
        transparent: true,
        opacity: 0.6
      })
    );

    const particles2 = new THREE.Points(
      geometry,
      new THREE.PointsMaterial({ 
        color: 0xa78bfa,
        size: 0.5,
        transparent: true,
        opacity: 0.4
      })
    );

    scene.add(particles1);
    scene.add(particles2);
    camera.position.z = 1000;

    // Add mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    const onDocumentMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - windowHalfX) * 0.05;
      mouseY = (event.clientY - windowHalfY) * 0.05;
    };

    document.addEventListener('mousemove', onDocumentMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);

      // Smooth camera movement
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      // Rotate particle systems
      particles1.rotation.x += 0.0001;
      particles1.rotation.y += 0.0001;
      particles2.rotation.x -= 0.0002;
      particles2.rotation.y -= 0.0002;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', onDocumentMouseMove);
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-40"
    />
  );
}