import { motion } from "framer-motion";
import heroImg from "@/assets/hero-spa.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Sala de tratamiento Kairos Estética"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-sm tracking-[0.3em] uppercase text-cream mb-6"
        >
          Estética Integral y Bienestar
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl text-cream leading-tight mb-6"
        >
          Cuida tu piel.{" "}
          <span className="italic">Cuida tu bienestar.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-body text-lg md:text-xl text-cream/80 mb-10 max-w-xl mx-auto"
        >
          Tratamientos personalizados que realzan tu belleza natural en Carabanchel, Madrid
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-body font-medium text-base hover:bg-gold-light transition-colors duration-300"
          >
            Reserva tu cita
          </a>
          <a
            href="#services"
            className="border border-cream/40 text-cream px-8 py-4 rounded-full font-body font-medium text-base hover:bg-cream/10 transition-colors duration-300"
          >
            Descubre nuestros tratamientos
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-cream/40 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-cream/60"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
