import { motion } from "framer-motion";
import FallingHearts from "@/components/FallingHearts";

const LoveLetter = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-start overflow-hidden bg-background px-4 py-12 sm:py-20">
      <FallingHearts />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center gap-8 text-center max-w-2xl w-full">
        {/* Heart icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="text-5xl"
          style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
        >
          ❤️
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-display text-6xl sm:text-7xl md:text-8xl text-gold drop-shadow-[0_0_30px_hsl(42,90%,60%,0.4)]"
        >
          I Love You
        </motion.h1>

        {/* Love letter text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="font-heading text-base sm:text-lg md:text-xl text-black leading-relaxed sm:leading-loose text-left space-y-6 px-6 sm:px-8 py-6 sm:py-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/10"
        >
          <p>
            Te amo, con tus virtudes y defectos, con ese cariño tan propio de nosotros y que no cambiaría por nada del mundo, que me hacen querer verte y abrazarte aunque fuesen solo 5 segundos
          </p>
          <p>
            Amo tus besos, tus abrazos, tus golpecitos, tu risa y tu cabello. Amo tambien que me ames, amo compartir mi tiempo contigo y te amo aunque no esté contigo. Por que amo cada caracteristica tuya, desde tus virtudes hasta tus defectos, que te hacer ser tan tu, y al mismo tiempo me hacen sentirte tan mía. Y no lo malentiendas, ni mucho menos, que te quiero tanto que que amaría incluso aunque no lo fueses.
          </p>
          <p>
            Y, sinceramente, tal vez no seas perfecta- para otros - y tambien, sinceramente, ellos no saben nada. Por que para mi, tu, tan tu, eres perfecta. Y no por que seas un conjunto infinito de virtudes, y que podrías serlo, sino por que amo hasta cada átomo de tu ser  que, mientras seas tu misma, me harían protegerte y cuidarte hasta el final de tus días. Y sinceramente, me gusta saber que puedo apoyarte y abrazarte en tus momentos más humanos y complicados.
          </p>
          <p>
            Quiero que sepas que siempre podrás contar conmigo, desde el 1 hasta el infinito si quisieras. Pero siempre, siempre, podrás contar conmigo
          </p>
          <p className="text-primary font-bold italic text-center text-lg sm:text-xl md:text-2xl pt-4">
            Te amo, I love you, Eu Gosto de Voce, Je'te aime, y en todos los idiomas descubiertos y por descubrir
          </p>
        </motion.div>

        {/* Decorative hearts */}
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
              style={{ animation: `float 3s ${i * 0.4}s ease-in-out infinite` }}
            >
              {h}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LoveLetter;
