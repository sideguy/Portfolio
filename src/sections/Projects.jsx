import Tesla from '../assets/Tesla.png';
import Book from '../assets/Book.png';
import Email from '../assets/Email.png';
import more  from '../assets/more.png';
import ProjectCard from '../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className="flex flex-col text-center">
      <h1 className="sectionTitle">Projects</h1>
      <div className="flex flex-col items-center gap-[30px] md:flex-row md:flex-wrap md:justify-evenly md:px-[30px]">
        <ProjectCard
          src={Tesla}
          link="https://github.com/sideguy/tesla-car-customizer"
          h3 ="Tesla"
          p="Car Customizer"
        />
        <ProjectCard
          src={Book}
          link="https://github.com/sideguy/booknation"
          h3="BookNation"
          p="A Digital Bookstore"
        />
        <ProjectCard
          src={Email}
          link="https://github.com/sideguy/normalhuman"
          h3="Normal Human"
          p="AI-powered Email Web App"
        />
        <ProjectCard
          src={more}
          link="https://github.com/sideguy"
          h3="Explore"
          p="For More Projects"
        />
      </div>
    </section>
  );
}

export default Projects;