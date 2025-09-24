import { useState } from "react";
import Project from "../project/projects";
import projects from "../project/projectsData";

export default function Content() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="cards-container">
      {projects.map((proj) => (
        <div key={proj.id} className="card">
          <img
            src={proj.image}
            alt={proj.title}
            onClick={() => setSelectedProject(proj)}
            style={{ cursor: "pointer" }}
          />
          <h3>{proj.title}</h3>
          <p>{proj.fullDescription.split(".")[0]}.</p> {/* short preview */}
        </div>
      ))}

      {selectedProject && (
        <Project
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
