import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    emoji: "💆‍♀️",
    title: "Faciales",
    description: "Luce una piel renovada, luminosa y saludable con nuestros tratamientos personalizados.",
    items: ["Limpieza facial profunda", "Tratamientos personalizados", "Protocolos de renovación"],
  },
  {
    emoji: "💃",
    title: "Corporales",
    description: "Moldea y cuida tu cuerpo con técnicas avanzadas y resultados visibles.",
    items: ["Anticelulíticos", "Reafirmantes", "Remodelación corporal", "Maderoterapia"],
  },
  {
    emoji: "💅",
    title: "Uñas",
    description: "Manos y pies perfectos con acabados impecables y duraderos.",
    items: ["Manicura", "Pedicura"],
  },
  {
    emoji: "🪒",
    title: "Depilación",
    description: "Piel suave y limpia con técnicas profesionales y cuidado de tu piel.",
    items: ["Depilación con cera"],
  },
  {
    emoji: "🧖‍♀️",
    title: "Bienestar",
    description: "Relájate y desconecta con masajes que renuevan cuerpo y mente.",
    items: ["Masajes relajantes", "Masajes descontracturantes"],
  },
  {
    emoji: "💄",
    title: "Maquillaje",
    description: "Brilla en tus momentos especiales con un look diseñado para ti.",
    items: ["Eventos", "Bodas", "Celebraciones"],
  },
];

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-24 md:py-32 bg-muted/50">
      <div ref={ref} className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-4">Nuestros servicios</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
            Tratamientos que <span className="italic text-gold-gradient">transforman</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-500"
            >
              <span className="text-4xl mb-4 block">{cat.emoji}</span>
              <h3 className="font-display text-xl text-foreground mb-2">{cat.title}</h3>
              <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">{cat.description}</p>
              <ul className="space-y-1.5">
                {cat.items.map((item) => (
                  <li key={item} className="font-body text-sm text-foreground/70 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-body font-medium hover:bg-gold-light transition-colors duration-300"
          >
            Consulta todos los tratamientos
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
