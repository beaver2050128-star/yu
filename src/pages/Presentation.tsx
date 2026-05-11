import { Link } from 'react-router-dom';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

function GridParticles() {
  const ref = useRef<THREE.Points>(null);
  
  // Generate a grid of particles
  const [positions, sizes] = (() => {
    const pos = [];
    const sz = [];
    for(let x = -20; x <= 20; x += 2) {
      for(let z = -20; z <= 20; z += 2) {
        pos.push(x, -5, z);
        sz.push(Math.random());
      }
    }
    return [new Float32Array(pos), new Float32Array(sz)];
  })();

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.2;
      ref.current.position.z = (state.clock.elapsedTime * 2) % 2;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-size" count={sizes.length} array={sizes} itemSize={1} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#4a4a4a" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

export default function Presentation() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center p-6 font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(50,50,50,0.5),transparent_50%)] pointer-events-none z-0" />
      
      {/* 3D Grid Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 2, 10], fov: 60 }}>
          <fog attach="fog" args={['#09090b', 5, 20]} />
          <GridParticles />
        </Canvas>
      </div>

      <div className="relative z-10 max-w-5xl w-full text-center mt-20 pointer-events-none">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight drop-shadow-xl">Design Concepts</h1>
        <p className="text-zinc-300 mb-12 max-w-2xl mx-auto leading-relaxed backdrop-blur-sm bg-zinc-950/30 p-4 rounded-xl border border-zinc-800/50">
          ご要望に基づき、3つの異なる世界観のデザインプロトタイプを作成しました。<br />
          以下のリンクから各デザイン（コンセプト）をご確認いただき、最もイメージに近いものをひとつお選びください。<br />
          選んでいただいた後に、そのデザインベースで全ページを構築します。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left pointer-events-auto">
          {/* A */}
          <Link to="/concept-a" className="group bg-zinc-900/60 backdrop-blur-md border border-cyan-900/50 p-8 rounded-3xl hover:bg-zinc-800 transition-all hover:border-cyan-400/50 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,100,200,0.15)] ring-1 ring-cyan-500/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="text-xs font-bold text-cyan-400 tracking-widest mb-2 block relative z-10">A案 (Selected & Updated)</span>
            <h2 className="text-2xl font-bold mb-4 group-hover:text-white text-zinc-100 relative z-10">Deep Space Cybernetic</h2>
            <p className="text-sm text-cyan-100/70 mb-6 font-medium relative z-10">宇宙深淵 × IT・サイバー</p>
            <ul className="text-xs text-zinc-400 space-y-3 leading-relaxed relative z-10">
              <li>・ネイビーブラックとブルー・シアンの光</li>
              <li>・明朝体を活かした映画のような重厚感</li>
              <li>・ワイヤーフレームとデータリングの惑星</li>
            </ul>
          </Link>
          
          {/* B */}
          <Link to="/concept-b" className="group bg-zinc-900/60 backdrop-blur-md border border-zinc-700/50 p-8 rounded-3xl hover:bg-zinc-800 transition-all hover:border-zinc-400 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
            <span className="text-xs font-bold text-zinc-400 tracking-widest mb-2 block">B案</span>
            <h2 className="text-2xl font-bold mb-4 group-hover:text-white text-zinc-100">Minimal Monolith</h2>
            <p className="text-sm text-zinc-400 mb-6 font-medium">近未来 × ミニマル</p>
            <ul className="text-xs text-zinc-400 space-y-3 leading-relaxed">
              <li>・AppleのPro製品のような洗練さ</li>
              <li>・装飾を削ぎ落としたグリッドUI</li>
              <li>・マウス追従する巨大な3Dモノリス</li>
            </ul>
          </Link>

          {/* C */}
          <Link to="/concept-c" className="group bg-zinc-900/60 backdrop-blur-md border border-zinc-700/50 p-8 rounded-3xl hover:bg-zinc-800 transition-all hover:border-zinc-400 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
            <span className="text-xs font-bold text-zinc-400 tracking-widest mb-2 block">C案</span>
            <h2 className="text-2xl font-bold mb-4 group-hover:text-white text-zinc-100">Holographic Glass</h2>
            <p className="text-sm text-zinc-400 mb-6 font-medium">高級AI企業 × ガラスUI</p>
            <ul className="text-xs text-zinc-400 space-y-3 leading-relaxed">
              <li>・深いネイビーと静かな青い発光</li>
              <li>・すりガラス（backdrop-blur）の重なり</li>
              <li>・AIの知性を感じる3D屈折ガラス</li>
            </ul>
          </Link>
        </div>
        
        <div className="mt-16 pt-8 border-t border-zinc-800/80 text-center pointer-events-auto pb-10">
          <Link to="/old-home" className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">
            旧デザインを確認する場合はこちら
          </Link>
        </div>
      </div>
    </div>
  );
}
