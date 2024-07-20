import Project from './Project';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Marvel Lookup',
      image: '/src/assets/marvelLookup.png',
      deployedLink: 'https://egarza0614.github.io/marvel_lookup/',
      githubLink: 'https://github.com/egarza0614/marvel_lookup'
    },
    {
      title: 'The HVAC Pocket Technician',
      image: '/src/assets/pocketHvac.png',
      deployedLink: 'https://brenj23.github.io/The-Pocket-HVAC-Technician/',
      githubLink: 'https://github.com/brenj23/The-Pocket-HVAC-Technician'
    },
    {
      title: 'Personal Blog',
      image: '/src/assets/personalBlog.png',
      deployedLink: 'https://brenj23.github.io/Personal-Blog/',
      githubLink: 'https://github.com/brenj23/Personal-Blog'
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
