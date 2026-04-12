import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ctaImg from "@/assets/cta-wellness.jpg";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={ctaImg}
          alt="Bienestar y relajación"
          className="w-full h-full object-cover"
          loading="lazy"
          width={1920}
          height={800}
        />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      <div ref={ref} className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-cream/80 mb-4">Tu momento</p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-cream mb-8 leading-tight">
            Es tu momento.{" "}
            <span className="italic">Reserva tu cita.</span>
          </h2>
          <a
            href="https://wa.me/34685038967?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20cita"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-primary text-primary-foreground px-10 py-5 rounded-full font-body font-semibold text-lg hover:bg-gold-light transition-colors duration-300"
          >
            Reservar ahora
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
