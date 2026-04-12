import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-24 md:py-32 bg-muted/50">
      <div ref={ref} className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-4">Contacto</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
            Ven a <span className="italic text-gold-gradient">conocernos</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg text-foreground mb-1">Dirección</h3>
                <p className="font-body text-muted-foreground">C/ Parque Eugenia de Montijo<br />Carabanchel, Madrid</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg text-foreground mb-1">Teléfono</h3>
                <a href="tel:+34685038967" className="font-body text-muted-foreground hover:text-primary transition-colors">
                  685 038 967
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg text-foreground mb-1">Horario</h3>
                <p className="font-body text-muted-foreground">
                  Lunes a Viernes: 10:00 – 20:00<br />
                  Sábados: 10:00 – 15:00<br />
                  Domingos: Cerrado
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/34685038967?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[hsl(142,70%,40%)] text-cream px-8 py-4 rounded-full font-body font-medium hover:bg-[hsl(142,70%,35%)] transition-colors duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Escríbenos por WhatsApp
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="rounded-2xl overflow-hidden border border-border h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.5!2d-3.74!3d40.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDIzJzE2LjgiTiAzwrA0NCcyNC4wIlc!5e0!3m2!1ses!2ses!4v1600000000000!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Kairos Estética"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
