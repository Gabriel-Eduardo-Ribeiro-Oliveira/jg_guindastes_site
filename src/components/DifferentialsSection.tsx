import { CheckCircle2 } from "lucide-react";

const differentials = [
  "Equipe técnica especializada",
  "Pronto-atendimento",
  "Garantia em todos os serviços realizados",
  "Orçamento sem compromisso",
  "Peças originais e de qualidade certificada",
  "muita  experiência no mercado",
];

const DifferentialsSection = () => {
  return (
    <section className="py-20 bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-fade-in">
            Por Que Escolher a nossa equipe?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {differentials.map((differential, index) => (
              <div
                key={index}
                className="flex items-start gap-4 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-1" />
                <p className="text-lg">{differential}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
