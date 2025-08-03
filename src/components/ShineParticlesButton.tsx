import React, { useRef } from "react";

interface ShineParticlesButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const random = (min: number, max: number) => Math.random() * (max - min) + min;

export const ShineParticlesButton: React.FC<ShineParticlesButtonProps> = ({ children, ...props }) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // Llama al evento onClick del usuario si lo tiene
    props.onClick?.(e);

    const btn = btnRef.current;
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const parent = btn.parentElement!;
    const btnLeft = rect.left - parent.getBoundingClientRect().left;
    const btnTop = rect.top - parent.getBoundingClientRect().top;

    // Crea 10 partículas
    for (let i = 0; i < 12; i++) {
      const particle = document.createElement("span");
      particle.className =
        "pointer-events-none z-50 absolute rounded-full bg-sky-300 shadow-sky-100 shadow-lg";
      particle.style.width = particle.style.height = `${random(8, 16)}px`;
      particle.style.left = `${btnLeft + rect.width / 2}px`;
      particle.style.top = `${btnTop + rect.height / 2}px`;
      particle.style.opacity = "2";
      particle.style.transition =
        "transform 0.7s cubic-bezier(.57,1.49,.53,1.02), opacity 2s";

      // Dirección y distancia aleatoria
      const angle = random(0, 2 * Math.PI);
      const dist = random(30, 60);
      const x = Math.cos(angle) * dist;
      const y = Math.sin(angle) * dist;
      setTimeout(() => {
        particle.style.transform = `translate(${x}px, ${y}px) scale(0.4)`;
        particle.style.opacity = "0";
      }, 10);

      parent.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 800);
    }
  };

  // El contenedor debe ser relative para posicionar partículas
  return (
    <div className="relative">
      <button
        {...props}
        ref={btnRef}
        className={props.className}
        onClick={handleClick}
      >
        {children}
      </button>
    </div>
  );
};
