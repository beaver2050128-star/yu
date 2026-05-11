import { useFrame, Canvas } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function ShootingStars() {
  const count = 3;
  const groupRef = useRef<THREE.Group>(null);
  
  const starsParams = useMemo(() => {
    return Array.from({ length: count }, () => ({
      pos: new THREE.Vector3(0, 0, 0),
      tail: new THREE.Vector3(0, 0, 0),
      active: false,
      timer: Math.random() * 4,
      speed: 0,
      opacity: 0,
    }));
  }, []);

  const starGeometries = useMemo(() => {
    return Array.from({ length: count }, () => {
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(6), 3));
      return geo;
    });
  }, []);

  const materials = useMemo(() => {
    return Array.from({ length: count }, () => new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      linewidth: 2,
    }));
  }, []);

  useFrame((_, delta) => {
    starsParams.forEach((star, i) => {
      if (!star.active) {
        star.timer -= delta;
        if (star.timer <= 0) {
          star.active = true;
          star.pos.set(
            (Math.random() - 0.5) * 300 + 100, 
            (Math.random() - 0.5) * 150 + 100,
            -150 + (Math.random() - 0.5) * 50
          );
          star.tail.copy(star.pos);
          star.speed = 30 + Math.random() * 50;
          star.opacity = 0.15 + Math.random() * 0.15;
          materials[i].opacity = star.opacity;
        }
      } else {
        const dir = new THREE.Vector3(-1, -0.4, 0).normalize();
        
        star.pos.add(dir.clone().multiplyScalar(star.speed * delta));
        
        const length = star.speed * 0.2;
        star.tail.copy(star.pos).sub(dir.clone().multiplyScalar(length));
        
        const positions = starGeometries[i].attributes.position.array as Float32Array;
        positions[0] = star.pos.x;
        positions[1] = star.pos.y;
        positions[2] = star.pos.z;
        positions[3] = star.tail.x;
        positions[4] = star.tail.y;
        positions[5] = star.tail.z;
        starGeometries[i].attributes.position.needsUpdate = true;
        
        star.opacity -= delta * 0.5;
        materials[i].opacity = Math.max(0, star.opacity);
        
        if (star.opacity <= 0) {
          star.active = false;
          star.timer = 3 + Math.random() * 8;
        }
      }
    });
  });

  return (
    <group ref={groupRef}>
      {starGeometries.map((geo, i) => (
        <line key={i} geometry={geo} material={materials[i]} />
      ))}
    </group>
  );
}

function CinematicStars() {
  const ref = useRef<THREE.Points>(null);
  const count = 100000;
  
  const circleTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const context = canvas.getContext('2d')!;
    const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.8)');
    gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.2)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    context.fillStyle = gradient;
    context.fillRect(0, 0, 64, 64);
    return new THREE.CanvasTexture(canvas);
  }, []);

  const [positions, sizes] = useMemo(() => {
    const p = new Float32Array(count * 3);
    const s = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
        // Uniform spherical distribution for high density everywhere
        const theta = Math.random() * 2 * Math.PI;
        const phi = Math.acos(2 * Math.random() - 1);
        const r = 20 + 200 * Math.pow(Math.random(), 0.5); // Dense near center, spread out
        p[i*3] = r * Math.sin(phi) * Math.cos(theta);
        p[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
        p[i*3+2] = r * Math.cos(phi) - 100;
        
        s[i] = Math.random() * (Math.random() > 0.99 ? 3.5 : 1.8);
    }
    return [p, s];
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.005;
      ref.current.rotation.z += delta * 0.002;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-size" count={sizes.length} array={sizes} itemSize={1} />
      </bufferGeometry>
      <pointsMaterial 
        size={0.6} 
        color="#bae6fd" 
        transparent 
        opacity={0.9} 
        sizeAttenuation={true} 
        depthWrite={false} 
        blending={THREE.AdditiveBlending} 
        map={circleTexture}
        alphaTest={0.01}
      />
    </points>
  );
}

function Scene() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    const scrollY = window.scrollY;
    const t = state.clock.elapsedTime;
    
    if (groupRef.current) {
        // 回転方向を調整：正の値でスクロール時に回転させる（左から右への水平回転）
        const targetRotationY = scrollY * 0.0005; 
        const targetRotationX = 0; // 下方向へのドリフトをなくす
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotationY, 0.05);
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotationX, 0.05);

        // 立体感
        groupRef.current.rotation.z = Math.sin(t * 0.1) * 0.02;
    }
  });

  return (
    <>
      <ambientLight intensity={0.1} color="#0f172a" />
      <directionalLight position={[-20, 20, 10]} intensity={3} color="#f8fafc" />
      <directionalLight position={[20, -20, 10]} intensity={1} color="#6b7280" />
      
      <group ref={groupRef}>
        <CinematicStars />
        <ShootingStars />
      </group>
    </>
  );
}

export default function ImmersiveBackground() {
  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
          <fog attach="fog" args={['#000000', 30, 200]} />
          <Scene />
        </Canvas>
      </div>

      <div className="fixed inset-0 opacity-[0.03] bg-noise pointer-events-none z-10 mix-blend-overlay" />
    </>
  );
}
