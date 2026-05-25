import type { Language, PortfolioContent, UiCopy } from '../types/portfolio';

export const uiTranslations: Record<Language, UiCopy> = {
  pt: {
    header: {
      brand: 'Portfólio',
      resume: 'Currículo',
      languageLabel: 'Idioma',
      navigation: [
        { id: 'sobre', label: 'Sobre' },
        { id: 'experiencia', label: 'Experiência' },
        { id: 'formacao', label: 'Formação' },
        { id: 'skills', label: 'Skills' },
        { id: 'projetos', label: 'Projetos' },
        { id: 'destaques', label: 'Diferenciais' },
        { id: 'idiomas', label: 'Idiomas' },
        { id: 'interesses', label: 'Interesses' },
        { id: 'contato', label: 'Contato' },
      ],
    },
    hero: {
      //availability: 'Disponível para oportunidades remotas',
      portfolioLabel: 'Portfólio profissional',
      primaryCta: 'Entrar em contato',
      secondaryCta: 'Ver experiência',
      spotlightTitle: 'Perfil em foco',
      spotlightBadge: 'Fullstack',
      spotlightCards: [
        { label: 'Base sólida', text: '.NET, ASP.NET MVC, Angular, JavaScript e SQL Server' },
        { label: 'Operação real', text: 'Deploys, QA, produção e incidentes' },
        { label: 'Evolução técnica', text: 'Arquitetura, segurança e mentoria' },
      ],
    },
    summary: {
      eyebrow: 'Resumo',
      title: 'Experiência prática com visão de produto, operação e evolução técnica.',
    },
    experience: {
      eyebrow: 'Trajetória',
      // title: 'Experiência construída em sistemas reais, com responsabilidade crescente.',
      // description:
      //   'A evolução profissional foi traduzida em formatos visuais distintos para evidenciar senioridade, contexto e progressão de carreira.',
      featuredLabel: 'Experiência em destaque',
      timelineLabel: 'Linha do tempo',
      milestoneLabel: 'Marco',
      compactLabel: 'Base da jornada',
      companyLabel: 'Empresa',
    },
    education: {
      eyebrow: 'Formação',
      // title: 'Base acadêmica plural, com transição estratégica para tecnologia.',
      // description:
      //   'A formação combina profundidade analítica, visão de engenharia e especialização em desenvolvimento de sistemas.',
       featuredLabel: 'Formação Recente',
      supportingLabel: 'Base complementar',
    },
    skills: {
      eyebrow: 'Competências',
      // title: 'Capacidades técnicas organizadas por contexto de atuação.',
      // description:
      //   'Cada grupo foi tratado com uma linguagem visual própria para destacar natureza, profundidade e aplicação prática.',
      // badge: 'Stack guiada por JSON',
      groups: {
        backend: { title: 'Backend', description: 'Fundação principal da atuação técnica.' },
        frontend: {
          title: 'Frontend',
          description: 'Construção de interfaces e manutenção de aplicações web.',
        },
        database: {
          title: 'Banco de dados',
          description: 'Camada de persistência e suporte operacional.',
        },
        cloudDevops: {
          title: 'Cloud e DevOps',
          description: 'Sustentação, deploy e gestão de ambientes.',
          badge: 'Operação',
        },
      },
    },
    projects: {
      eyebrow: 'Projetos',
      // title: 'Projetos no GitHub que mostram prática, repertório e evolução.',
      // description:
      //   'Uma seleção de repositórios pessoais e acadêmicos, reunindo jogos, aplicações, automação de cálculos e a própria landing page do portfólio.',
      repositoryLabel: 'Abrir repositório',
    },
    highlights: {
      eyebrow: 'Diferenciais',
      // title: 'Sinais concretos de maturidade técnica e confiança operacional.',
      // description:
      //   'Os destaques foram organizados com leves variações de composição para evitar repetição visual e manter leitura dinâmica.',
      ribbonLabel: 'Destaque',
    },
    languages: {
      eyebrow: 'Idiomas',
      // title: 'Comunicação preparada para contexto local e colaboração internacional.',
      // description:
      //   'Os idiomas reforçam adaptabilidade em times distribuídos, leitura técnica e interação com produtos globais.',
      fluencyLabel: 'Proficiência',
    },
    interests: {
      eyebrow: 'Interesses',
      // title: 'Áreas de interesse que reforçam direção de carreira e aderência cultural.',
      // description:
      //   'A seção finaliza a narrativa com um tom mais leve, mantendo a estética profissional e diferenciando-se visualmente das skills.',
    },
    contact: {
      eyebrow: 'Contato',
      // title: 'Aberta para conversar sobre oportunidades backend e fullstack remotas.',
      // description:
      //   'Se a vaga pede alguém com profundidade técnica, senso de operação e boa comunicação com o time, esta landing já resume bem a proposta de valor. O próximo passo pode ser uma conversa.',
      primaryCta: 'Baixar currículo',
      secondaryCta: 'Voltar ao topo',
      // availabilityBadge: 'Resposta rápida',
      emailLabel: 'Email',
      phoneLabel: 'Telefone',
      linkedinLabel: 'LinkedIn',
    },
    seo: {
      title: 'Flávia Florentino | Desenvolvedora Fullstack / Backend',
      description:
        'Portfólio profissional com experiência em backend, fullstack, Azure, SQL Server e sustentação de ambientes críticos.',
    },
  },
  en: {
    header: {
      brand: 'Portfolio',
      resume: 'Resume',
      languageLabel: 'Language',
      navigation: [
        { id: 'sobre', label: 'About' },
        { id: 'experiencia', label: 'Experience' },
        { id: 'formacao', label: 'Education' },
        { id: 'skills', label: 'Skills' },
        { id: 'projetos', label: 'Projects' },
        { id: 'destaques', label: 'Highlights' },
        { id: 'idiomas', label: 'Languages' },
        { id: 'interesses', label: 'Interests' },
        { id: 'contato', label: 'Contact' },
      ],
    },
    hero: {
      availability: 'Open to remote opportunities',
      portfolioLabel: 'Professional portfolio',
      primaryCta: 'Get in touch',
      secondaryCta: 'View experience',
      spotlightTitle: 'Profile at a glance',
      spotlightBadge: 'Fullstack',
      spotlightCards: [
        { label: 'Solid foundation', text: '.NET, Angular, and SQL Server' },
        { label: 'Real operations', text: 'Deployments, QA, production, and incidents' },
        { label: 'Technical growth', text: 'Architecture, security, and mentorship' },
      ],
    },
    summary: {
      eyebrow: 'Summary',
      title: 'Hands-on experience with product awareness, operations, and technical growth.',
    },
    experience: {
      eyebrow: 'Journey',
      // title: 'Experience built in real systems with increasing responsibility.',
      // description:
      //   'The professional journey is presented through distinct visual formats to highlight seniority, context, and career progression.',
      featuredLabel: 'Featured experience',
      timelineLabel: 'Timeline',
      milestoneLabel: 'Milestone',
      compactLabel: 'Career foundation',
      companyLabel: 'Company',
    },
    education: {
      eyebrow: 'Education',
      // title: 'A diverse academic foundation with a strategic move into technology.',
      // description:
      //   'The academic path blends analytical depth, engineering thinking, and a focused transition into software development.',
      featuredLabel: 'Primary degree',
      supportingLabel: 'Supporting background',
    },
    skills: {
      eyebrow: 'Capabilities',
      // title: 'Technical strengths organized by context of execution.',
      // description:
      //   'Each group uses a distinct visual language to emphasize purpose, depth, and practical application.',
      // badge: 'JSON-driven stack',
      groups: {
        backend: { title: 'Backend', description: 'Primary technical foundation.' },
        frontend: {
          title: 'Frontend',
          description: 'Interface building and web application maintenance.',
        },
        database: {
          title: 'Database',
          description: 'Persistence layer and operational support.',
        },
        cloudDevops: {
          title: 'Cloud & DevOps',
          description: 'Support, deployment, and environment management.',
          badge: 'Operations',
        },
      },
    },
    projects: {
      eyebrow: 'Projects',
      title: 'GitHub projects that show practice, range, and technical growth.',
      description:
        'A selection of personal and academic repositories covering games, applications, calculation automation, and this portfolio landing page.',
      repositoryLabel: 'Open repository',
    },
    highlights: {
      eyebrow: 'Highlights',
      title: 'Concrete signs of technical maturity and operational trust.',
      description:
        'Highlights alternate between compositions to avoid repetition and keep the reading rhythm dynamic.',
      ribbonLabel: 'Highlight',
    },
    languages: {
      eyebrow: 'Languages',
      title: 'Communication readiness for local context and international collaboration.',
      description:
        'Language proficiency strengthens adaptability in distributed teams, technical reading, and collaboration around global products.',
      fluencyLabel: 'Proficiency',
    },
    interests: {
      eyebrow: 'Interests',
      title: 'Areas of interest that reinforce career direction and cultural fit.',
      description:
        'The closing section ends the narrative on a lighter tone while preserving the professional visual language.',
    },
    contact: {
      eyebrow: 'Contact',
      // title: 'Open to discussing remote backend and fullstack opportunities.',
      // description:
      //   'If the role calls for someone with technical depth, operational awareness, and strong communication, this landing already captures the value proposition. The next step can be a conversation.',
      primaryCta: 'Download resume',
      secondaryCta: 'Back to top',
      // availabilityBadge: 'Quick reply',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      linkedinLabel: 'LinkedIn',
    },
    seo: {
      title: 'Flávia Florentino | Fullstack / Backend Developer',
      description:
        'Professional portfolio with experience in backend, fullstack, Azure, SQL Server, and support for critical production environments.',
    },
  },
};

export const resumeLinks: Record<Language, string> = {
  pt: '/cv-pt.pdf',
  en: '/cv-en.pdf',
};

export function getLocalizedPortfolio(
  portfolio: PortfolioContent,
  language: Language,
): PortfolioContent {
  if (language === 'pt') {
    return portfolio;
  }

  return {
    ...portfolio,
    title: 'Fullstack / Backend Developer (.NET | Angular)',
    location: 'Remote',
    objective:
      'To work as a Backend or Fullstack Developer (Mid-level/Senior) in a remote environment, contributing to robust, secure, and scalable solutions.',
    summary:
      'Software developer with around 6 years of experience building web applications with a strong focus on backend and fullstack development using .NET and Angular. Brings hands-on experience with day-to-day technical leadership, QA and production deployments, QA support, Azure environment management, and direct database work. Participates in strategic technical decisions, drives refactoring with a focus on performance and security, and mentors junior developers. Currently deepening expertise in modern architecture and AI-assisted development.',
    education: [
      {
        degree: 'Associate Degree in Systems Analysis and Development',
        institution: 'FACENS - Sorocaba Engineering College',
        period: '08/2019 - 12/2021',
      },
      {
        degree: 'Master’s Degree in Civil and Environmental Engineering',
        institution: 'UNESP - São Paulo State University',
        period: '08/2014 - 10/2017',
      },
      {
        degree: 'Bachelor’s Degree in Civil Engineering',
        institution: 'FACENS - Sorocaba Engineering College',
        period: '01/2009 - 12/2013',
      },
    ],
    languages: [
      { language: 'Portuguese', level: 'Native' },
      { language: 'English', level: 'Fluent' },
    ],
    experience: [
      {
        ...portfolio.experience[0],
        role: 'Fullstack Developer (.NET | Angular)',
        period: '12/2024 - Present',
        note: 'Progression from Mid-level to Senior-level responsibilities',
        responsibilities: [
          'Development and maintenance of applications using C#, ASP.NET MVC, Web Forms, and Angular',
          'Creation and evolution of interfaces with HTML, CSS, and JavaScript',
          'Continuous work on enhancements and bug fixing in production systems',
          'Integration between the application layer and SQL Server databases',
          'Technical reference for Angular application maintenance',
          'Responsible for QA deployments and support for the QA team',
          'Responsible for production deployment, maintenance, and support',
          'Application monitoring and incident resolution',
          'Direct work with production databases',
          'Management and maintenance of Azure resources',
          'Participation in technical and strategic decisions',
          'Training and mentoring junior developers',
          'Leading the documentation initiative for a critical system, including flowcharts',
          'Refactoring focused on performance, maintainability, and security',
          'Implementation of improvements to mitigate vulnerabilities and intrusion attempts',
        ],
      },
      {
        ...portfolio.experience[1],
        role: 'Software Development Intern',
        period: '08/2020 - 06/2021',
        responsibilities: [
          'Development support for applications built with C# .NET MVC and Web Forms',
          'Integration with SQL Server databases',
          'Front-end component development with JavaScript, HTML5, and CSS',
        ],
      },
    ],
    skills: {
      backend: ['C#', '.NET Framework', 'ASP.NET MVC', 'Web Forms', 'REST APIs'],
      frontend: ['Angular', 'AngularJS', 'TypeScript', 'HTML5', 'CSS', 'JavaScript', 'Bootstrap'],
      database: ['SQL Server'],
      cloud_devops: ['Azure', 'IIS', 'Git', 'QA and Production Deployments'],
    },
    projects: [
      {
        ...portfolio.projects[0],
        description:
          'Professional portfolio landing page built with React, Vite, Tailwind CSS, and JSON-structured content.',
        tags: ['React', 'Vite', 'Tailwind'],
      },
      {
        ...portfolio.projects[1],
        description:
          'Application focused on smart recipes, exploring culinary information organization and data-oriented user experience.',
        tags: ['Application', 'Recipes', 'AI'],
      },
      {
        ...portfolio.projects[2],
        description:
          'Bingo game project focused on draw logic, multi-device user interaction, and match rule organization.',
        tags: ['Game', 'Logic', 'AI'],
      },
      {
        ...portfolio.projects[3],
        description:
          'Academic game project developed in the FACENS context, combining programming practice, interface work, and gameplay rules.',
        tags: ['Academic', 'Game', 'FACENS'],
      },
      {
        ...portfolio.projects[4],
        description:
          'Material calculation project connecting a civil engineering background with automation and software development.',
        tags: ['Calculation', 'Engineering', 'Software'],
      },
    ],
    highlights: [
      'Hands-on scope aligned with senior-level responsibilities',
      'Experience with deployments and support for production environments',
      'Management of Azure resources and applications',
      'Leadership in documenting a critical system with flowcharts',
      'Refactoring focused on performance, security, and stability',
      'Mentoring junior developers',
      'Active participation in strategic technical decisions',
      'Practical experience mitigating vulnerabilities',
    ],
    interests: [
      'Backend',
      'Fullstack',
      'Remote work',
      'Software architecture',
      'AI-assisted development',
    ],
  };
}
