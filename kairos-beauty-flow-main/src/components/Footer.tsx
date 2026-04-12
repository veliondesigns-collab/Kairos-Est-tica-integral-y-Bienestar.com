import { Instagram, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl mb-4">
              <span className="text-gold-gradient">Kairos</span>
            </h3>
            <p className="font-body text-sm text-cream/60 leading-relaxed">
              Estética Integral y Bienestar.<br />
              Tu espacio de cuidado personal en Carabanchel, Madrid.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-sm text-cream mb-4 tracking-wide">Enlaces</h4>
            <ul className="space-y-2">
              {["Inicio", "Nosotros", "Servicios", "Opiniones", "Contacto"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l === "Inicio" ? "hero" : l === "Nosotros" ? "about" : l === "Opiniones" ? "testimonials" : l.toLowerCase()}`}
                    className="font-body text-sm text-cream/50 hover:text-primary transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm text-cream mb-4 tracking-wide">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+34685038967" className="font-body text-sm text-cream/50 hover:text-primary transition-colors">
                  685 038 967
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="font-body text-sm text-cream/50">Carabanchel, Madrid</span>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <a
                  href="https://www.instagram.com/kairosestetica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <Instagram className="w-4 h-4 text-cream" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 text-center">
          <p className="font-body text-xs text-cream/30">
            © {new Date().getFullYear()} Kairos Estética Integral y Bienestar. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
