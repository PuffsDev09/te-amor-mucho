import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import FallingHearts from "@/components/FallingHearts";

const Index = () => {
  const navigate = useNavigate();
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-4">
      <FallingHearts />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center gap-6 text-center max-w-xl">
        {/* Small intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-blush font-heading text-lg tracking-widest uppercase"
        >
          Feliz día de San Valentín
        </motion.p>

        {/* Heart icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
          className="text-6xl"
          style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
        >
          ❤️
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-display text-7xl sm:text-8xl md:text-9xl text-gold drop-shadow-[0_0_30px_hsl(42,90%,60%,0.4)]"
        >
          Mariela
        </motion.h1>

        {/* Message */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="font-heading text-2xl sm:text-3xl md:text-4xl text-foreground italic leading-relaxed"
        >
          Te amo, <br />
          <span className="text-primary font-bold not-italic">
            ¿quieres ser mi San Valentín?
          </span>
        </motion.p>

        {/* Decorative hearts row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex gap-3 mt-4 text-primary/60"
        >
          {["♥", "♥", "♥", "♥", "♥"].map((h, i) => (
            <span
              key={i}
              className="text-xl"
              style={{
                animation: `float 3s ${i * 0.4}s ease-in-out infinite`,
              }}
            >
              {h}
            </span>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="flex gap-4 mt-6"
        >
          <button
            onClick={() => navigate("/love-letter")}
            className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-heading text-lg tracking-wide hover:scale-105 transition-transform shadow-[0_0_30px_hsl(350,80%,55%,0.4)]"
          >
            ¡Sí, acepto! 💕
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
