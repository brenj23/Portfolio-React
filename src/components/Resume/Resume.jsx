import './Resume.css';

function Resume() {
  return (
    <section>
      <h2>Resume</h2>
      <a href="/src/assets/resume.pdf" download>Download Resume</a>
      <h3>Proficiencies</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        {/* Add more proficiencies */}
      </ul>
    </section>
  );
}

export default Resume;
