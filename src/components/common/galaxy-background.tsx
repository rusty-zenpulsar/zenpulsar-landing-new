'use client';

import { useEffect, useRef } from 'react';

export function GalaxyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    class Particle {
      x: number;
      y: number;
      z: number;
      size: number;
      color: string;
      speedX: number;
      speedY: number;
      speedZ: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas.width - canvas.width / 2;
        this.y = Math.random() * canvas.height - canvas.height / 2;
        this.z = Math.random() * 1500;
        this.size = Math.random() * 2 + 0.5;

        const colorChoice = Math.random();
        if (colorChoice < 0.4) {
          this.color = '#C926D4'; // Fuchsia
        } else if (colorChoice < 0.8) {
          this.color = '#2926CF'; // Electric Blue
        } else {
          this.color = '#ffffff';
        }

        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.speedZ = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.5;
      }

      update() {
        this.z -= this.speedZ;
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.z <= 0) {
          this.z = 1500;
          this.x = Math.random() * canvas.width - canvas.width / 2;
          this.y = Math.random() * canvas.height - canvas.height / 2;
        }
      }

      draw() {
        if (!ctx) return;

        const scale = 1000 / (1000 + this.z);
        const x2d = this.x * scale + canvas.width / 2;
        const y2d = this.y * scale + canvas.height / 2;
        const size2d = this.size * scale;

        if (x2d < 0 || x2d > canvas.width || y2d < 0 || y2d > canvas.height) {
          return;
        }

        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity * (1 - this.z / 1500);
        ctx.fillRect(Math.floor(x2d), Math.floor(y2d), Math.ceil(size2d), Math.ceil(size2d));
        ctx.globalAlpha = 1;
      }
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const init = () => {
      particles = [];
      for (let i = 0; i < 800; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.fillStyle = '#0a0a0f';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Smooth mouse movement
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Draw grid lines (8-bit style)
      ctx.strokeStyle = 'rgba(201, 38, 212, 0.05)';
      ctx.lineWidth = 1;
      const gridSize = 50;

      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 20 - 10;
      mouse.targetY = (e.clientY / window.innerHeight) * 20 - 10;
    };

    resizeCanvas();
    init();
    animate();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pixelated"
      style={{ imageRendering: 'pixelated' }}
    />
  );
}
