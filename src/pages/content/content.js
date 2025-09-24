import { useState } from "react";
import Courses from "../courses/courses";
import courses from "../courses/coursesdata"; // you can import courses similarly
import Papers from "../papers/papers";
import papers from "../papers/papersdata"; // same for upcoming
import Project from "../project/projects";
import projects from "../project/projectsData";

export default function Content() {
  const [selectedTab, setSelectedTab] = useState("projects"); // default tab
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCourses, setSelectedCourses] = useState(null);
  const [selectedPapers, setSelectedPapers] = useState(null);

  const renderContent = () => {
    switch (selectedTab) {
      case "projects":
        return projects.map((proj) => (
          <div key={proj.id} className="card">
            <img
              src={proj.image}
              alt={proj.title}
              onClick={() => setSelectedProject(proj)}
              style={{ cursor: "pointer" }}
            />
            <h3>{proj.title}</h3>
            <p>{proj.fullDescription.split(".")[0]}.</p>
          </div>
        ));
      case "courses":
        return courses.map((course) => (
          <div key={course.id} className="card">
            <img
              src={course.image}
              alt={course.title}
              style={{ cursor: "pointer" }}
              onClick={() => setSelectedProject(course)}
            />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
          </div>
        ));
      case "papers":
        return papers.map((item) => (
          <div key={item.id} className="card">
            <img
              src={item.image}
              alt={item.title}
              style={{ cursor: "pointer" }}
              onClick={() => setSelectedProject(item)}
            />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ));
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Buttons */}
      <div className="button-group" style={{ marginBottom: "20px" }}>
        <button
          onClick={() => setSelectedTab("projects")}
          style={{
            backgroundColor: selectedTab === "projects" ? "#007bff" : "#f0f0f0",
            color: selectedTab === "projects" ? "#fff" : "#000",
            marginRight: "10px",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Projects
        </button>
        <button
          onClick={() => setSelectedTab("courses")}
          style={{
            backgroundColor: selectedTab === "courses" ? "#007bff" : "#f0f0f0",
            color: selectedTab === "courses" ? "#fff" : "#000",
            marginRight: "10px",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Courses
        </button>
        <button
          onClick={() => setSelectedTab("papers")}
          style={{
            backgroundColor: selectedTab === "papers" ? "#007bff" : "#f0f0f0",
            color: selectedTab === "papers" ? "#fff" : "#000",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Papers
        </button>
      </div>

      {/* Content */}
      <div className="cards-container">{renderContent()}</div>

      {/* Modal for selected project */}
      {selectedProject && (
        <Project
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
      {selectedCourses && (
        <Courses
          project={selectedCourses}
          onClose={() => setSelectedCourses(null)}
        />
      )}
      {selectedPapers && (
        <Papers
          project={selectedPapers}
          onClose={() => setSelectedPapers(null)}
        />
      )}
    </div>
  );
}
