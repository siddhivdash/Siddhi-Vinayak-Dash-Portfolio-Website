import { useEffect, useRef } from 'react';

const LightAnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mini sun particles
    interface Sun {
      x: number;
      y: number;
      radius: number;
      dx: number;
      dy: number;
      opacity: number;
      fadeDirection: number;
    }

    const suns: Sun[] = [];
    const sunCount = 40;

    // Create suns
    for (let i = 0; i < sunCount; i++) {
      suns.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 8 + 4,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.4 + 0.2,
        fadeDirection: Math.random() > 0.5 ? 1 : -1
      });
    }

    // Draw sun with rays
    const drawSun = (sun: Sun) => {
      ctx.save();
      ctx.globalAlpha = sun.opacity;
      
      // Sun center circle
      ctx.beginPath();
      ctx.arc(sun.x, sun.y, sun.radius, 0, Math.PI * 2);
      ctx.fillStyle = '#fbbf24'; // Yellow-400
      ctx.fill();
      
      // Sun rays
      const rayCount = 8;
      const rayLength = sun.radius * 1.5;
      ctx.strokeStyle = '#fbbf24';
      ctx.lineWidth = 1.5;
      
      for (let i = 0; i < rayCount; i++) {
        const angle = (Math.PI * 2 * i) / rayCount;
        const startX = sun.x + Math.cos(angle) * sun.radius;
        const startY = sun.y + Math.sin(angle) * sun.radius;
        const endX = sun.x + Math.cos(angle) * (sun.radius + rayLength);
        const endY = sun.y + Math.sin(angle) * (sun.radius + rayLength);
        
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
      }
      
      ctx.restore();
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Light background gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#fef3c7'); // Amber-100
      gradient.addColorStop(0.5, '#fef9e7'); // Yellow-50
      gradient.addColorStop(1, '#e0f2fe'); // Sky-100
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw suns
      suns.forEach((sun) => {
        // Move
        sun.x += sun.dx;
        sun.y += sun.dy;

        // Bounce off edges
        if (sun.x < 0 || sun.x > canvas.width) sun.dx *= -1;
        if (sun.y < 0 || sun.y > canvas.height) sun.dy *= -1;

        // Pulse opacity
        sun.opacity += sun.fadeDirection * 0.002;
        if (sun.opacity >= 0.5 || sun.opacity <= 0.2) {
          sun.fadeDirection *= -1;
        }

        drawSun(sun);
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ background: 'linear-gradient(135deg, #fef3c7 0%, #fef9e7 50%, #e0f2fe 100%)' }}
    />
  );
};

export default LightAnimatedBackground;

