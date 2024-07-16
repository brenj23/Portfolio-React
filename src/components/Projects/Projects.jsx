import Project from './Project';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Project 1',
      image: '/src/assets/project1.jpg',
      deployedLink: 'https://deployedapp1.com',
      githubLink: 'https://github.com/username/project1'
    },
    // Add more projects here
  ];

  return (
    <section>
      <h2>Projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
