import { Wrench, Shield, PackageCheck, ClipboardCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Wrench,
    title: "Manutenção Preventiva",
    description:
      "Inspeções regulares e manutenção programada para evitar falhas e garantir a segurança operacional.",
  },
  {
    icon: Shield,
    title: "Reparos Corretivos",
    description:
      "Diagnóstico preciso e reparos especializados em sistemas hidráulicos, elétricos e mecânicos.",
  },
  {
    icon: PackageCheck,
    title: "Venda de munks",
    description:
      "munks usados 100% funcionais e com os melhores  preços.",
  },
  {
    icon: ClipboardCheck,
    title: "Inspeções Técnicas",
    description:
      "Laudos técnicos completos e certificação de segurança conforme normas regulamentadoras.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para manutenção e reparo de guindastes Munck
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 bg-card animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="mb-4 inline-flex p-3 bg-accent rounded-lg">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
