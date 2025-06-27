import { PageLayout, ProjectCard } from "@/components";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Plataforma E-commerce",
      description: "Uma plataforma de e-commerce completa com autenticação de usuário, gerenciamento de produtos e integração de pagamento.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop&crop=center",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      githubUrl: "https://github.com/lucasaires/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.com"
    },
    {
      id: 2,
      title: "Dashboard de Redes Sociais",
      description: "Um dashboard para gerenciar contas de redes sociais, agendar posts e analisar engajamento.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=450&fit=crop&crop=center",
      technologies: ["Vue.js", "Express", "MongoDB", "Chart.js"],
      githubUrl: "https://github.com/lucasaires/social-dashboard",
      liveUrl: "https://social-dashboard-demo.com"
    },
    {
      id: 3,
      title: "Rastreador de Finanças Pessoais",
      description: "Uma aplicação web para rastrear finanças pessoais, orçamento e geração de relatórios.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=450&fit=crop&crop=center",
      technologies: ["React", "Python", "Django", "SQLite"],
      githubUrl: "https://github.com/lucasaires/finance-tracker",
      liveUrl: "https://finance-tracker-demo.com"
    },
    {
      id: 4,
      title: "Sistema de Gestão de Tarefas",
      description: "Um sistema completo para gestão de projetos e tarefas com colaboração em equipe.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=450&fit=crop&crop=center",
      technologies: ["Next.js", "TypeScript", "Prisma", "MySQL"],
      githubUrl: "https://github.com/lucasaires/task-manager",
      liveUrl: "https://task-manager-demo.com"
    },
    {
      id: 5,
      title: "API de Análise de Dados",
      description: "Uma API RESTful para processamento e análise de grandes volumes de dados.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop&crop=center",
      technologies: ["Java", "Spring Boot", "Apache Kafka", "Redis"],
      githubUrl: "https://github.com/lucasaires/data-analysis-api",
      liveUrl: null
    },
    {
      id: 6,
      title: "Aplicativo de Delivery",
      description: "Um aplicativo móvel para delivery de comida com pagamento integrado e rastreamento em tempo real.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=450&fit=crop&crop=center",
      technologies: ["React Native", "Firebase", "Google Maps API", "PayPal"],
      githubUrl: "https://github.com/lucasaires/delivery-app",
      liveUrl: null
    }
  ];

  return (
    <PageLayout currentPage="projects">
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <div className="flex min-w-72 flex-col gap-3 w-full">
          <p className="text-[#0d141c] tracking-light text-[28px] sm:text-[32px] font-bold leading-tight">
            Portfólio de Projetos
          </p>
          <p className="text-[#49719c] text-sm font-normal leading-normal">
            Explore uma seleção dos meus projetos mais recentes, demonstrando minhas habilidades e experiência em desenvolvimento web e mobile.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            technologies={project.technologies}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
      
      <p className="text-[#49719c] text-sm font-normal leading-normal pb-3 pt-4 px-4 text-center">
        Para mais detalhes sobre cada projeto, visite os respectivos repositórios no GitHub ou acesse as demonstrações ao vivo.
      </p>
    </PageLayout>
  );
}
