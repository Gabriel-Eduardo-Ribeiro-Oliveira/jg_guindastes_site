import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroImage from "@/assets/hero-munck.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Especialistas em Reparo de{" "}
            <span className="text-primary">Muncks</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Manutenção especializada e peças originais com equipe técnica qualificada
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-primary-hover text-primary-foreground transition-all shadow-lg hover:shadow-xl group"
            >
              <a
                href="https://wa.me/5511942205280?text=venha%20fazer%20sua%20manuten%C3%A7%C3%A3o%20com%20a%20melhor%20equipe%20de%20sp=="
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all group"
            >
              <a
                href="https://wa.me/5511942205280?text=venha%20fazer%20sua%20manuten%C3%A7%C3%A3o%20com%20a%20melhor%20equipe%20de%20sp=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="mr-2 h-5 w-5" />
                Fale Conosco
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
