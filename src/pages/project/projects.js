import "./project.css"; // separate CSS for modal styling

export default function Project({ project, onClose }) {
  if (!project) return null; // Do not render if no project is selected

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>{project.title}</h2>
        <img src={project.image} alt={project.title} className="modal-image" />
        <p>{project.fullDescription}</p>
        {project.links && (
          <div className="project-links">
            {project.links.live && (
              <a href={project.links.live} target="_blank" rel="noreferrer">
                Live Website
              </a>
            )}
            {project.links.github && (
              <a href={project.links.github} target="_blank" rel="noreferrer">
                GitHub Repo
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
