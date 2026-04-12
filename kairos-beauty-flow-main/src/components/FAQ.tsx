import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Cómo puedo reservar una cita?",
    a: "Puedes reservar tu cita a través de WhatsApp, llamándonos por teléfono o visitándonos directamente en nuestro centro. Te responderemos lo antes posible para encontrar el horario que mejor se adapte a ti.",
  },
  {
    q: "¿Qué tratamiento facial es mejor para mí?",
    a: "En tu primera visita, Rebeca realizará un diagnóstico personalizado de tu piel para recomendarte el tratamiento más adecuado según tus necesidades y objetivos.",
  },
  {
    q: "¿Cuánto dura una limpieza facial?",
    a: "Una limpieza facial profunda dura aproximadamente 60-75 minutos. Incluye análisis de piel, limpieza, extracción, tratamiento específico y finalización con productos adaptados.",
  },
  {
    q: "¿Cuándo debo reservar para maquillaje de eventos?",
    a: "Para bodas y eventos especiales, te recomendamos reservar con al menos 2-3 semanas de antelación. Así podremos hacer una prueba previa y asegurarnos de que todo sea perfecto.",
  },
  {
    q: "¿Los tratamientos son aptos para pieles sensibles?",
    a: "Sí, todos nuestros tratamientos se adaptan a cada tipo de piel. Utilizamos productos profesionales hipoalergénicos y siempre realizamos un diagnóstico previo.",
  },
];

const FAQ = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 md:py-32 bg-background">
      <div ref={ref} className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-4">Preguntas frecuentes</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
            ¿Tienes <span className="italic text-gold-gradient">dudas</span>?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="font-display text-left text-base text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
