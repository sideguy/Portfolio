function ProjectCard({ src, link, h3, p }) {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-fit no-underline text-[#222] transition-transform duration-200 ease-in-out hover:scale-[1.05]"
    >
      <img 
        className="max-w-[250px] self-center bg-[var(--project-card-bg)] rounded-[20px] hover" 
        src={src} 
        alt={`${h3} logo`} 
      />
      <h3>{h3}</h3>
      <p>{p}</p>
    </a>
  );
}

export default ProjectCard;