import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, UserCheck, Eye, Leaf } from "lucide-react";

const reasons = [
  {
    icon: UserCheck,
    title: "Atención personalizada real",
    desc: "Cada tratamiento se adapta a tu piel, tu cuerpo y tus objetivos. Nada genérico.",
  },
  {
    icon: Eye,
    title: "Resultados visibles",
    desc: "Utilizamos productos y técnicas de última generación para que notes la diferencia.",
  },
  {
    icon: Leaf,
    title: "Ambiente relajante",
    desc: "Un espacio diseñado para que desconectes del mundo y te conectes contigo.",
  },
  {
    icon: Star,
    title: "Protocolos de higiene impecables",
    desc: "Tu seguridad es nuestra prioridad. Cumplimos los más altos estándares.",
  },
];

const WhyUs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 md:py-32 bg-background">
      <div ref={ref} className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-4">Diferenciación</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
            Por qué elegir <span className="italic text-gold-gradient">Kairos</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                <r.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
              </div>
              <h3 className="font-display text-lg text-foreground mb-2">{r.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
