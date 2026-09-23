import ProjectCard from './ProjectCard'

function Projects() {
  const projects = [
    {
      title: 'D-BookShop — Full-Stack E-Commerce Platform',
      description:
        'A production-deployed full-stack e-commerce application built with React, Node.js, Express and PostgreSQL. Features include authentication, role-based access control, product and inventory management, shopping cart, checkout, order management, email verification and an administrative dashboard.',
      technologies: [
        'React',
        'Node.js',
        'Express',
        'PostgreSQL',
        'JWT',
        'Tailwind CSS',
        'REST API',
      ],
      githubUrl: 'https://github.com/Dee68/D_BookShop',
      caseStudyUrl: '/projects/d-bookshop',
      demoUrl: 'https://d-book-shop.vercel.app',
      status: 'Featured',
    },
    {
      title: 'MyBooky — E-Commerce Bookstore',
      description:
        'Full-stack e-commerce application developed as my BSc (Hons) Contemporary Software Development project. Built with ASP.NET Core MVC, C#, Entity Framework Core and SQL Server, featuring authentication, role-based access, catalogue management, shopping cart, order management and Stripe payment integration.',
      technologies: [
        'ASP.NET Core MVC',
        'C#',
        'Entity Framework Core',
        'SQL Server',
        'ASP.NET Identity',
        'Stripe',
      ],
      githubUrl: 'https://github.com/Dee68/MyBooky',
      caseStudyUrl: '/projects/mybooky',
      demoStatus: 'Deployment: Previously deployed to Microsoft Azure; the original deployment is currently offline.',
      status: 'Featured',
    },
    {
      title: 'Buyify',
      description:
        'A Shopify-inspired e-commerce application currently under development, exploring full-stack architecture and online shopping functionality.',
      technologies: [
        'Django',
        'Django REST Framework',
        'PostgreSQL',
        'Docker',
      ],
      githubUrl: 'https://github.com/Dee68/buyify',
      status: 'Work in Progress',
    },
    {
      title: 'Tkinter Game',
      description:
        'A Python desktop game project exploring object-oriented programming, graphical interfaces, game states and event-driven programming.',
      technologies: [
        'Python',
        'Tkinter',
        'OOP',
      ],
      githubUrl: 'https://github.com/Dee68/ptkinter_game',
      demoVideo: 'https://www.youtube.com/embed/eFZiqXyXfOo',
      status: 'Project',
    },
    {
      title: 'Pygame Application',
      description:
        'A Python game development project focused on interactive gameplay, programming logic and graphical application development.',
      technologies: [
        'Python',
        'Pygame',
        'Game Development',
      ],
      githubUrl: 'https://github.com/Dee68/pygame_app',
      demoVideo: 'https://www.youtube.com/embed/xirtxlqTUQw',
      status: 'Project',
    },
  ]

  return (
    <section
      id="projects"
      className="border-t border-slate-200 bg-white px-6 py-24 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
            Projects
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Projects that demonstrate how I build.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
            A selection of academic, personal and practical software
            development projects covering full-stack development, databases,
            APIs, Python and application architecture.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              status={project.status}
              demoVideo={project.demoVideo}
              caseStudyUrl={project.caseStudyUrl}
              demoUrl={project.demoUrl}
              demoStatus={project.demoStatus}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects