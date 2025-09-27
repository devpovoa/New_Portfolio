import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { OptimizedImage } from "./OptimizedImage";
import { useScrollAnimation } from "../hooks/useOptimizedAnimations";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  colSpan: string;
  technologies: string[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const { targetRef } = useScrollAnimation(index * 100);

  return (
    <div
      ref={targetRef}
      className="group relative animate-on-scroll"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-1000 animate-glow-pulse"></div>
      <div className="relative bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 transform hover:-translate-y-2 hover-scale">
        {/* Project Image */}
        <div className="relative h-56 overflow-hidden">
          <OptimizedImage
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
          
          {/* GitHub Link Overlay */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
            >
              <HiArrowTopRightOnSquare className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
        
        {/* Project Content */}
        <div className="p-8 space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-gray-300 leading-relaxed line-clamp-3">
              {project.description}
            </p>
          </div>
          
          {/* Technologies */}
          {project.technologies && (
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech: string) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-xs text-gray-300 hover:bg-white/10 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-3 py-1 text-xs text-gray-400">
                  +{project.technologies.length - 4} mais
                </span>
              )}
            </div>
          )}
          
          {/* GitHub Link */}
          <div className="pt-4 border-t border-gray-700/50">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-3 text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
            >
              <span className="font-medium">Ver no GitHub</span>
              <HiArrowTopRightOnSquare className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const projects = [
    {
      title: "Classificador Inteligente de E-mails",
      description:
        "Aplicação web em FastAPI com interface moderna (Jinja2, Tailwind, Alpine.js), NLP (spaCy/NLTK) e integração com OpenAI API (GPT). Containerizada com Docker, CI/CD via GitHub Actions e arquitetura escalável para classificação automática de e-mails.",
      image: "https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg",
      link: "https://github.com/devpovoa/autou-email-classifier",
      colSpan: "col-span-1 md:col-span-2",
      technologies: ["Python", "FastAPI", "OpenAI GPT", "NLP", "spaCy", "Docker", "CI/CD", "Tailwind", "Alpine.js"],
    },
    {
      title: "Microserviços de Ingestão e Distribuição",
      description:
        "Arquitetura de microserviços com FastAPI, Django, RabbitMQ e PostgreSQL para ingestão, validação e distribuição de dados. Inclui autenticação JWT, mensageria assíncrona, ORM SQLAlchemy e dashboards para visualização de dados em tempo real.",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
      link: "https://github.com/devpovoa/Microservicos_Ingestao_Distribuicao",
      colSpan: "col-span-1",
      technologies: ["Python", "FastAPI", "Django", "RabbitMQ", "PostgreSQL", "JWT", "SQLAlchemy", "Microserviços"],
    },
    {
      title: "Medic Search - Busca de Profissionais de Saúde",
      description:
        "Aplicação voltada para facilitar a busca por profissionais da área da saúde. Com interface intuitiva e moderna, permite localizar médicos e especialistas com base em especialidade, localização, disponibilidade e avaliações dos usuários.",
      image: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg",
      link: "https://github.com/devpovoa/Medic_Search",
      colSpan: "col-span-1",
      technologies: ["Python", "Django", "PostgreSQL", "Geolocalização", "Sistema de Avaliações", "Bootstrap"],
    },
    {
      title: "Blog Completo com Django CBVs",
      description:
        "Blog completo desenvolvido com Python e Django, seguindo boas práticas de desenvolvimento com Class-Based Views (CBV), estrutura MVT e organização modular. Sistema completo de posts, comentários, categorias e painel administrativo.",
      image: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg",
      link: "https://github.com/devpovoa/Blog",
      colSpan: "col-span-1 md:col-span-2",
      technologies: ["Python", "Django", "CBVs", "MVT", "PostgreSQL", "Bootstrap", "Sistema de Comentários"],
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
      
      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-lg border border-white/20">
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-300 uppercase tracking-wider">Meu Portfólio</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent block">
              Projetos
            </span>
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-blue-400 bg-clip-text text-transparent block">
              Autorais
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Soluções completas desenvolvidas desde{' '}
            <span className="inline-block px-2 py-1 bg-gradient-to-r from-indigo-500/20 to-violet-500/20 border border-indigo-400/30 rounded-md font-bold text-indigo-300 whitespace-nowrap">
              janeiro de 2024
            </span>,{' '}
            demonstrando expertise em{' '}
            <span className="font-semibold text-indigo-400 whitespace-nowrap">
              back-end Python, APIs REST
            </span>{' '}
            e{' '}
            <span className="font-semibold text-violet-400 whitespace-nowrap">
              arquiteturas modernas escaláveis
            </span>.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}