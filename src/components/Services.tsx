import { HiCommandLine, HiChartBarSquare, HiCodeBracket } from "react-icons/hi2";

export function Services() {
  const experience = [
    {
      title: "Desenvolvedor Back-End Python",
      company: "Projetos Autorais & Freelancer",
      period: "Janeiro 2024 - Presente",
      description:
        "Desenvolvimento de soluções back-end robustas com Python, implementando arquiteturas de microserviços, APIs REST com FastAPI e Django, sistemas de mensageria assíncrona (RabbitMQ + Celery), pipelines de ETL com Pandas, containerização com Docker e TDD com Pytest. Foco em código limpo, escalabilidade e performance.",
      icon: <HiCodeBracket className="h-12 w-12" />,
      technologies: ["Python", "Django", "FastAPI", "RabbitMQ", "Celery", "Docker", "PostgreSQL", "TDD", "Microserviços"],
    },
    {
      title: "Especialista em Análise de Processos",
      company: "Setor Financeiro",
      period: "2011 - 2024 (13 anos)",
      description:
        "Gestão completa de processos financeiros, controle de NF-e, administração de sistemas ERP, desenvolvimento de relatórios gerenciais avançados, automação com Excel/VBA e análise de grandes volumes de dados. Experiência sólida que proporciona visão analítica única para desenvolvimento de soluções tecnológicas eficientes.",
      icon: <HiChartBarSquare className="h-12 w-12" />,
      technologies: ["Análise de Dados", "ERP", "Excel Avançado", "VBA", "Gestão de Processos", "Automação", "Relatórios"],
    },
    {
      title: "Formação Acadêmica & Metodologias",
      company: "Ciência da Computação - Estácio",
      period: "2020 - 2024",
      description:
        "Bacharel em Ciência da Computação com foco em desenvolvimento back-end. Aplicação prática de metodologias ágeis (Scrum, Kanban), práticas DevOps, CI/CD com GitHub Actions, versionamento com Git Flow e desenvolvimento orientado por testes (TDD). Constante atualização em tecnologias emergentes.",
      icon: <HiCommandLine className="h-12 w-12" />,
      technologies: ["Scrum", "Kanban", "TDD", "Pytest", "CI/CD", "Git Flow", "DevOps", "GitHub Actions"],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/5 to-transparent"></div>
      </div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-lg border border-white/20">
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-300 uppercase tracking-wider">Minha Trajetória</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Experiência
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
              Profissional
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Trajetória única combinando <span className="font-semibold text-indigo-400">formação sólida em Ciência da Computação</span>, 
            projetos autorais robustos e <span className="px-2 py-1 bg-gradient-to-r from-indigo-500/20 to-violet-500/20 border border-indigo-400/30 rounded-md font-bold text-indigo-300">13 anos de experiência analítica</span> no setor financeiro.
          </p>
        </div>

        <div className="space-y-12">
          {experience.map((exp, index) => (
            <div key={exp.title} className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-white">
                  {exp.title}
                </h3>
                <div className="space-y-4 text-lg leading-relaxed">
                  <p className="text-gray-300">
                    <span className="font-semibold text-indigo-400">{exp.company}</span> • 
                    <span className="px-2 py-1 bg-gradient-to-r from-indigo-500/20 to-violet-500/20 border border-indigo-400/30 rounded-md font-bold text-indigo-300 ml-2">{exp.period}</span>
                  </p>
                  <p className="text-gray-300">
                    {exp.description.split('.').slice(0, 2).join('.')}. 
                    {index === 0 && (
                      <span className="font-semibold text-violet-400"> Arquiteturas modernas e escaláveis</span>
                    )}
                    {index === 1 && (
                      <span className="font-semibold text-violet-400"> Visão analítica estratégica</span>
                    )}
                    {index === 2 && (
                      <span className="font-semibold text-violet-400"> Base sólida em computação</span>
                    )}
                    {exp.description.split('.').slice(2).join('.')}.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-6">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-xs text-gray-300 hover:bg-white/10 hover-scale hover-glow transition-all duration-300 animate-bounce-in stagger-${techIndex + 1}`}
                        style={{ animationDelay: `${index * 200 + techIndex * 100}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {index < experience.length - 1 && (
                <div className="w-full h-px bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
