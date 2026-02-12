import { motion } from "framer-motion";

const FallingHearts = () => {
  const hearts = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 8,
    duration: 6 + Math.random() * 6,
    size: 12 + Math.random() * 20,
    opacity: 0.2 + Math.random() * 0.5,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-primary"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            opacity: heart.opacity,
            animation: `heart-fall ${heart.duration}s ${heart.delay}s linear infinite`,
          }}
        >
          ♥
        </div>
      ))}
    </div>
  );
};

export default FallingHearts;
