import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Laura M.",
    text: "El trato es increíble, Rebeca te asesora en cada momento y los resultados son espectaculares. Repetí sin dudarlo.",
  },
  {
    name: "Carmen R.",
    text: "Una experiencia súper relajante y profesional. Se nota el cariño que pone en cada tratamiento. ¡100% recomendable!",
  },
  {
    name: "Marta S.",
    text: "Se nota que le apasiona su trabajo. Mi piel nunca estuvo tan bien. El ambiente es acogedor y te sientes como en casa.",
  },
  {
    name: "Patricia G.",
    text: "Llevo años buscando un centro así. Personalización real, no tratamientos genéricos. Rebeca es una profesional excepcional.",
  },
  {
    name: "Ana B.",
    text: "El mejor centro de estética de Carabanchel, sin duda. La limpieza facial me dejó la piel completamente renovada.",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % reviews.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-muted/50">
      <div ref={ref} className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-4"
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-4">Opiniones</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Lo que dicen nuestras <span className="italic text-gold-gradient">clientas</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-primary text-primary" />
            ))}
          </div>
          <p className="font-body text-muted-foreground">5,0 / 5 — +47 reseñas en Google</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="max-w-2xl mx-auto mt-12"
        >
          <div className="relative h-48 flex items-center justify-center">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: current === i ? 1 : 0,
                  y: current === i ? 0 : 20,
                }}
                transition={{ duration: 0.5 }}
                className={`absolute text-center px-4 ${current === i ? "pointer-events-auto" : "pointer-events-none"}`}
              >
                <p className="font-body text-lg text-foreground italic leading-relaxed mb-4">
                  "{review.text}"
                </p>
                <p className="font-display text-sm text-primary">{review.name}</p>
              </motion.div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                  current === i ? "bg-primary" : "bg-border"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
