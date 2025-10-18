import teamImage from "@/assets/team-work.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sobre a JG Guindastes
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                melhor atendimento de sp <strong className="text-foreground">equipe muito experiente</strong> no mercado, a JG Guindastes se consolidou como referência em manutenção e reparo de equipamentos Guindauto.
              </p>
              <p>
                Nossa equipe é formada por técnicos especializados e certificados, que passam por treinamentos constantes para oferecer o melhor serviço aos nossos clientes.
              </p>
              <p>
                Trabalhamos com <strong className="text-foreground">peças originais e certificadas</strong>, garantindo a qualidade e segurança de todos os serviços realizados. Nosso compromisso é com a excelência técnica e a satisfação total dos nossos clientes.
              </p>
              <p>
                Oferecemos <strong className="text-foreground">atendimento 24 horas</strong> para emergências, porque sabemos que o tempo de inatividade do seu equipamento representa prejuízo para o seu negócio.
              </p>
            </div>
          </div>

          <div className="animate-slide-up">
            <img
              src={teamImage}
              alt="Equipe técnica da JG Guindastes"
              className="rounded-lg shadow-card-hover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
