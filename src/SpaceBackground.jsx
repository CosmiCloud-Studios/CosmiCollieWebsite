import { useEffect, useRef } from "react";

export default function SpaceBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let stars = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      const numStars = Math.floor((canvas.width * canvas.height) / 1200); // increased density
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2.0, // slightly larger max radius
          vx: Math.random() * 0.3 - 0.15, // faster x velocity
          vy: Math.random() * 0.3 - 0.15, // faster y velocity
          opacity: Math.random(),
          opacitySpeed: Math.random() * 0.02 + 0.005, // twinkling speed
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        star.x += star.vx;
        star.y += star.vy;

        // Twinkling effect
        star.opacity += star.opacitySpeed;
        if (star.opacity >= 1 || star.opacity <= 0) {
          star.opacitySpeed = -star.opacitySpeed;
        }

        // Wrap around
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">
      <canvas ref={canvasRef} className="absolute inset-0 z-10 opacity-60" />
      <div className="absolute inset-0 z-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
    </div>
  );
}