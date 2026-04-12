import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Shield, Sparkles, Users } from "lucide-react";
import cabinImg from "@/assets/cabin-enhanced.jpg";

const values = [
  { icon: Heart, label: "Trato cercano" },
  { icon: Shield, label: "Higiene extrema" },
  { icon: Sparkles, label: "Resultados reales" },
  { icon: Users, label: "Espacio seguro e inclusivo" },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div ref={ref} className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden">
              <img
                src={cabinImg}
                alt="Interior de la cabina de Kairos Estética"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-6 shadow-lg border border-border">
              <p className="font-display text-3xl text-primary font-semibold">+5</p>
              <p className="font-body text-sm text-muted-foreground">años de experiencia</p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-4">Sobre nosotros</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              Un espacio pensado{" "}
              <span className="italic text-gold-gradient">para ti</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              En Kairos creemos que la belleza nace del equilibrio entre cuerpo y mente. Cada tratamiento está 
              diseñado para ofrecerte una experiencia única, adaptada a tus necesidades y realizada con los 
              productos y técnicas más avanzados del sector.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              <strong className="text-foreground">Rebeca</strong>, nuestra fundadora, te acompañará en cada sesión 
              con un enfoque totalmente personalizado. Su pasión por la estética y su formación continua garantizan 
              resultados visibles y una experiencia inolvidable.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((v, i) => (
                <motion.div
                  key={v.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3 bg-muted rounded-xl p-4"
                >
                  <v.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-body text-sm text-foreground">{v.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
